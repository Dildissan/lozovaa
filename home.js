/* =====================================================
   RENDER CATEGORY TILES
===================================================== */

function renderCategories() {

    const grid = document.getElementById("categoryGrid");

    grid.innerHTML = categories.map(cat => `

        <a class="category-card"
           href="products.html?category=${encodeURIComponent(cat.value)}">

            <img src="${cat.image}" alt="${cat.label}">

            <div class="category-body">
                <h4>${cat.label}</h4>
                <p>${cat.blurb}</p>
                <span class="category-shop-btn">Shop Now <i class="fa-solid fa-arrow-right"></i></span>
            </div>

        </a>

    `).join("");

}


/* =====================================================
   RENDER 6 POPULAR PRODUCTS (covers every category)
===================================================== */

function renderFavorites() {

    const grid = document.getElementById("favoritesGrid");

    const favorites = products.filter(p => p.popular);

    grid.innerHTML = favorites.map(product => `

        <a class="product-card"
           href="product.html?id=${product.id}">

            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>

            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3>${product.name}</h3>
                <p class="price">${formatPrice(product.price)}</p>
                <div class="rating">
                    ${"★".repeat(product.rating)}
                    <span>(${product.reviews})</span>
                </div>
            </div>

        </a>

    `).join("");

}


/* =====================================================
   RENDER TESTIMONIALS (only shows once real reviews exist)
===================================================== */

function renderTestimonials() {

    const section = document.getElementById("testimonialsSection");
    const grid = document.getElementById("testimonialsGrid");
    const recent = getRecentReviews(3);

    if (!recent.length) {
        section.style.display = "none";
        return;
    }

    grid.innerHTML = recent.map(review => {

        const product = getProductById(review.productId);

        return `
            <div class="testimonial-card">
                <div class="testimonial-top">
                    <div class="testimonial-avatar">${review.name.charAt(0).toUpperCase()}</div>
                    <div>
                        <p class="testimonial-name">${review.name}</p>
                        <p class="testimonial-product">${product ? product.name : ""}</p>
                    </div>
                </div>
                <div class="testimonial-stars">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</div>
                <p class="testimonial-text">${review.text}</p>
            </div>
        `;

    }).join("");

}


renderCategories();
renderFavorites();
renderTestimonials();
