/* =====================================================
   ELEMENTS
===================================================== */

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("productSearch");
const sortSelect = document.getElementById("sortProducts");
const resultsText = document.getElementById("resultsText");
const pagination = document.getElementById("pagination");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const minPriceValue = document.getElementById("minPriceValue");
const maxPriceValue = document.getElementById("maxPriceValue");
const categoryList = document.getElementById("categoryList");
const materialFilters = document.getElementById("materialFilters");
const sizeFilters = document.getElementById("sizeFilters");
const firmnessFilters = document.getElementById("firmnessFilters");
const firmnessGroup = document.getElementById("firmnessGroup");
const comfortGroup = document.getElementById("comfortGroup");
const minDensity = document.getElementById("minDensity");
const maxDensity = document.getElementById("maxDensity");
const comfortValues = document.getElementById("comfortValues");
const pageTitle = document.getElementById("pageTitle");
const breadcrumbCurrent = document.getElementById("breadcrumbCurrent");


/* =====================================================
   STATE
   Category comes from the URL (?category=Pillow) so links
   from the homepage land directly on a pre-filtered page.
===================================================== */

const urlParams = new URLSearchParams(window.location.search);

let selectedCategory = urlParams.get("category") || "all";

// guard against an unknown/typo'd category value in the URL
if (selectedCategory !== "all" && !categories.some(c => c.value === selectedCategory)) {
    selectedCategory = "all";
}

let selectedSubcategory = urlParams.get("subcategory") || "all";

// a subcategory only makes sense under its own parent category
if (
    selectedSubcategory !== "all" &&
    (selectedCategory === "all" || !getSubcategoryMeta(selectedSubcategory) || getSubcategoryMeta(selectedSubcategory).parent !== selectedCategory)
) {
    selectedSubcategory = "all";
}

let currentPage = 1;
const productsPerPage = 12;


/* =====================================================
   BUILD DYNAMIC FILTER OPTIONS FROM REAL DATA
===================================================== */

function uniqueValues(key) {
    return [...new Set(products.map(p => p[key]))];
}

function buildCheckboxGroup(container, key, className) {

    container.innerHTML = uniqueValues(key).map(value => {

        const count = products.filter(p => p[key] === value).length;

        return `
            <label class="checkbox-item">
                <input type="checkbox" value="${value}" class="${className}">
                <span>${value}</span>
                <small>(${count})</small>
            </label>
        `;

    }).join("");

    container.querySelectorAll("input").forEach(input => {
        input.addEventListener("change", () => {
            currentPage = 1;
            renderProducts();
        });
    });

}

function buildCategoryList() {

    const all = `
        <button class="category-filter top-level ${selectedCategory === "all" ? "active" : ""}" data-category="all">
            <span>All Products</span>
            <small>(${products.length})</small>
        </button>
    `;

    const sections = categories.map(cat => {

        const subs = getSubcategoriesFor(cat.value);
        const isExpanded = selectedCategory === cat.value;
        const isActive = selectedCategory === cat.value && selectedSubcategory === "all";

        const subItems = subs.map(sub => {

            const count = countInSubcategory(sub.value);
            const isSubActive = selectedCategory === cat.value && selectedSubcategory === sub.value;

            return `
                <button class="category-filter sub-level ${isSubActive ? "active" : ""} ${count === 0 ? "coming-soon" : ""}"
                        data-category="${cat.value}" data-subcategory="${sub.value}">
                    <span>${sub.label}</span>
                    <small>${count === 0 ? "Soon" : `(${count})`}</small>
                </button>
            `;

        }).join("");

        return `
            <div class="category-section ${isExpanded ? "expanded" : ""}">
                <button class="category-filter top-level ${isActive ? "active" : ""}"
                        data-category="${cat.value}">
                    <span>${cat.label}</span>
                    <span class="count-and-chevron">
                        <small>(${countInCategory(cat.value)})</small>
                        <i class="fa-solid fa-chevron-down chevron"></i>
                    </span>
                </button>
                <div class="subcategory-list">
                    ${subItems}
                </div>
            </div>
        `;

    }).join("");

    categoryList.innerHTML = all + sections;

    categoryList.querySelectorAll(".category-filter").forEach(button => {

        button.addEventListener("click", () => {

            selectedCategory = button.dataset.category;
            selectedSubcategory = button.dataset.subcategory || "all";

            syncUrl();
            currentPage = 1;
            updatePageHeading();
            buildCategoryList();
            renderProducts();

        });

    });

}

function syncUrl() {

    const url = new URL(window.location);

    if (selectedCategory === "all") {
        url.searchParams.delete("category");
    } else {
        url.searchParams.set("category", selectedCategory);
    }

    if (selectedSubcategory === "all") {
        url.searchParams.delete("subcategory");
    } else {
        url.searchParams.set("subcategory", selectedSubcategory);
    }

    window.history.replaceState({}, "", url);

}

function updatePageHeading() {

    if (selectedCategory === "all") {
        pageTitle.textContent = "All Products";
        breadcrumbCurrent.innerHTML = "All Products";
        document.title = "All Products | LAZOVA";
        return;
    }

    const cat = categories.find(c => c.value === selectedCategory);

    if (selectedSubcategory === "all") {
        pageTitle.textContent = cat.label;
        breadcrumbCurrent.innerHTML = cat.label;
        document.title = cat.label + " | LAZOVA";
        return;
    }

    const sub = getSubcategoryMeta(selectedSubcategory);

    pageTitle.textContent = `${cat.label} — ${sub.label}`;
    breadcrumbCurrent.innerHTML =
        `<a href="?category=${encodeURIComponent(cat.value)}" data-breadcrumb-category>${cat.label}</a> / ${sub.label}`;
    document.title = `${sub.label} — ${cat.label} | LAZOVA`;

    // clicking the category part of the breadcrumb should filter, not navigate away
    const link = breadcrumbCurrent.querySelector("[data-breadcrumb-category]");
    if (link) {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            selectedCategory = cat.value;
            selectedSubcategory = "all";
            syncUrl();
            currentPage = 1;
            updatePageHeading();
            buildCategoryList();
            renderProducts();
        });
    }

}

function setupPriceRange() {

    const prices = products.map(p => p.price);
    const floor = Math.floor(Math.min(...prices) / 500) * 500;
    const ceil = Math.ceil(Math.max(...prices) / 500) * 500;
    const step = ceil > 100000 ? 1000 : 500;

    [minPrice, maxPrice].forEach(input => {
        input.min = floor;
        input.max = ceil;
        input.step = step;
    });

    minPrice.value = floor;
    maxPrice.value = ceil;
    minPriceValue.textContent = floor.toLocaleString("en-US");
    maxPriceValue.textContent = ceil.toLocaleString("en-US");

}


/* =====================================================
   LAZOVA COMFORT SCALE (density filter replacing the
   Firmness checkboxes — see COMFORT_SCALE in data.js)
===================================================== */

function setupComfortScale() {

    [minDensity, maxDensity].forEach(input => {
        input.min = COMFORT_SCALE.min;
        input.max = COMFORT_SCALE.max;
    });

    minDensity.value = COMFORT_SCALE.min;
    maxDensity.value = COMFORT_SCALE.max;

    updateComfortText();

}

function isComfortFilterActive() {
    if (comfortGroup.hidden) return false;   // scale not in use (no density data yet)
    return Number(minDensity.value) > COMFORT_SCALE.min ||
           Number(maxDensity.value) < COMFORT_SCALE.max;
}

function updateComfortText() {

    if (!isComfortFilterActive()) {
        comfortValues.textContent = `All densities (${COMFORT_SCALE.min}–${COMFORT_SCALE.max} kg/m³)`;
        return;
    }

    comfortValues.textContent =
        `${Number(minDensity.value).toFixed(1)} – ${Number(maxDensity.value).toFixed(1)} kg/m³`;

}


/* =====================================================
   GET CHECKED VALUES
===================================================== */

function getCheckedValues(selector) {
    return [...document.querySelectorAll(selector + ":checked")].map(input => input.value);
}


/* =====================================================
   FILTER PRODUCTS
===================================================== */

function getFilteredProducts() {

    let result = [...products];

    if (selectedCategory !== "all") {
        result = result.filter(product => product.category === selectedCategory);
    }

    if (selectedSubcategory !== "all") {
        result = result.filter(product => product.subcategory === selectedSubcategory);
    }

    const search = searchInput.value.trim().toLowerCase();
    if (search) {
        result = result.filter(product => product.name.toLowerCase().includes(search));
    }

    result = result.filter(product =>
        product.price >= Number(minPrice.value) &&
        product.price <= Number(maxPrice.value)
    );

    const materials = getCheckedValues(".material-filter");
    if (materials.length) {
        result = result.filter(product => materials.includes(product.material));
    }

    const sizes = getCheckedValues(".size-filter");
    if (sizes.length) {
        result = result.filter(product => sizes.includes(product.size));
    }

    const firmness = getCheckedValues(".firmness-filter");
    if (firmness.length) {
        result = result.filter(product => firmness.includes(product.firmness));
    }

    // Comfort Scale: only narrows results once the sliders are moved off the
    // full range; products with no density entered yet are then left out
    if (isComfortFilterActive()) {
        const lo = Number(minDensity.value);
        const hi = Number(maxDensity.value);
        result = result.filter(product => {
            const density = getProductDensity(product);
            return density !== null && density >= lo && density <= hi;
        });
    }

    if (sortSelect.value === "low") {
        result.sort((a, b) => a.price - b.price);
    }

    if (sortSelect.value === "high") {
        result.sort((a, b) => b.price - a.price);
    }

    if (sortSelect.value === "new") {
        result = [...result].reverse();
    }

    if (sortSelect.value === "popular") {
        result.sort((a, b) => b.reviews - a.reviews);
    }

    return result;

}


/* =====================================================
   RENDER PRODUCTS
===================================================== */

function renderProducts() {

    const filtered = getFilteredProducts();

    const totalPages = Math.max(1, Math.ceil(filtered.length / productsPerPage));

    if (currentPage > totalPages) {
        currentPage = 1;
    }

    const start = (currentPage - 1) * productsPerPage;
    const visible = filtered.slice(start, start + productsPerPage);

    if (!visible.length) {

        const isEmptySubcategory =
            selectedSubcategory !== "all" && countInSubcategory(selectedSubcategory) === 0;

        if (isEmptySubcategory) {

            const sub = getSubcategoryMeta(selectedSubcategory);

            productGrid.innerHTML = `
                <div class="no-products coming-soon-state">
                    <i class="fa-regular fa-clock" style="font-size:28px;color:var(--forest-mid);margin-bottom:14px;display:block;"></i>
                    <h3>${sub.label} — Coming Soon</h3>
                    <p>We're adding products to this collection. Check back soon, or message us on WhatsApp if you're after something specific.</p>
                    <a href="https://wa.me/94770221092?text=${encodeURIComponent(`Hi LAZOVA, do you have anything in the ${sub.label} collection?`)}"
                       target="_blank" rel="noopener" class="btn btn-primary" style="margin-top:18px;display:inline-block;">
                        <i class="fa-brands fa-whatsapp"></i> Ask us on WhatsApp
                    </a>
                </div>
            `;

        } else {

            productGrid.innerHTML = `
                <div class="no-products">
                    <h3>No products found</h3>
                    <p>Try adjusting your filters or clearing your search.</p>
                </div>
            `;

        }

    } else {

        productGrid.innerHTML = visible.map(product => `

            <article class="product-card">
                <a href="product.html?id=${product.id}">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                        <button class="wishlist" aria-label="Add to wishlist" onclick="event.preventDefault();">♡</button>
                    </div>
                    <div class="product-info">
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-price">${formatPrice(product.price)}</p>
                        <div class="product-rating">
                            ${"★".repeat(product.rating)}
                            <span>(${product.reviews})</span>
                        </div>
                    </div>
                </a>
            </article>

        `).join("");

    }

    const first = filtered.length ? start + 1 : 0;
    const last = Math.min(start + productsPerPage, filtered.length);

    resultsText.textContent = `Showing ${first}–${last} of ${filtered.length} results`;

    renderPagination(totalPages);

}


/* =====================================================
   PAGINATION
===================================================== */

function renderPagination(totalPages) {

    pagination.innerHTML = "";

    if (totalPages <= 1) {
        return;
    }

    for (let i = 1; i <= totalPages; i++) {

        const button = document.createElement("button");
        button.className = "page-btn";

        if (i === currentPage) {
            button.classList.add("active");
        }

        button.textContent = i;

        button.addEventListener("click", () => {
            currentPage = i;
            renderProducts();
            window.scrollTo({ top: 300, behavior: "smooth" });
        });

        pagination.appendChild(button);

    }

}


/* =====================================================
   EVENTS
===================================================== */

searchInput.addEventListener("input", () => {
    currentPage = 1;
    renderProducts();
});

sortSelect.addEventListener("change", () => {
    currentPage = 1;
    renderProducts();
});

minPrice.addEventListener("input", () => {

    if (Number(minPrice.value) > Number(maxPrice.value)) {
        minPrice.value = maxPrice.value;
    }

    minPriceValue.textContent = Number(minPrice.value).toLocaleString("en-US");
    currentPage = 1;
    renderProducts();

});

maxPrice.addEventListener("input", () => {

    if (Number(maxPrice.value) < Number(minPrice.value)) {
        maxPrice.value = minPrice.value;
    }

    maxPriceValue.textContent = Number(maxPrice.value).toLocaleString("en-US");
    currentPage = 1;
    renderProducts();

});

minDensity.addEventListener("input", () => {

    if (Number(minDensity.value) > Number(maxDensity.value)) {
        minDensity.value = maxDensity.value;
    }

    updateComfortText();
    currentPage = 1;
    renderProducts();

});

maxDensity.addEventListener("input", () => {

    if (Number(maxDensity.value) < Number(minDensity.value)) {
        maxDensity.value = minDensity.value;
    }

    updateComfortText();
    currentPage = 1;
    renderProducts();

});

const mobileFilterBtn = document.getElementById("mobileFilterBtn");
const filterSidebar = document.getElementById("filterSidebar");

mobileFilterBtn.addEventListener("click", () => {
    filterSidebar.classList.toggle("open");
});


/* =====================================================
   INITIAL LOAD
===================================================== */

buildCategoryList();
buildCheckboxGroup(materialFilters, "material", "material-filter");
buildCheckboxGroup(sizeFilters, "size", "size-filter");

// Use the density-based Comfort Scale once products have density values;
// until then keep the Soft / Medium / Firm checkboxes working as before.
if (hasDensityData()) {
    firmnessGroup.hidden = true;
    comfortGroup.hidden = false;
    setupComfortScale();
} else {
    buildCheckboxGroup(firmnessFilters, "firmness", "firmness-filter");
}

setupPriceRange();
updatePageHeading();
renderProducts();
