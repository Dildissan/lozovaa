/* =====================================================
   BUSINESS WHATSAPP NUMBER
   Digits only, country code first, no + or spaces (wa.me format).
===================================================== */

const WHATSAPP_NUMBER = "94770221092";
const WHATSAPP_DISPLAY = "+94 77 022 1092";


/* =====================================================
   RESOLVE PRODUCT FROM URL
===================================================== */

const params = new URLSearchParams(window.location.search);
const product = getProductById(params.get("id"));

const root = document.getElementById("productRoot");
const breadcrumb = document.getElementById("breadcrumb");


if (!product) {

    renderNotFound();

} else {

    renderProduct(product);

}


/* =====================================================
   NOT FOUND STATE
===================================================== */

function renderNotFound() {

    document.title = "Product not found | LAZOVA";

    root.innerHTML = `
        <section class="not-found">
            <h1>We couldn't find that product</h1>
            <p>It may have been removed, or the link is out of date.</p>
            <a href="products.html" class="btn btn-primary">Back to shop</a>
        </section>
    `;

}


/* =====================================================
   MAIN RENDER
===================================================== */

function renderProduct(product) {

    document.title = product.name + " | LAZOVA";

    const categoryMeta = getCategoryMeta(product.category);
    const images = product.images && product.images.length ? product.images : [product.image];

    /* breadcrumb */
    const subcategoryMeta = getSubcategoryMeta(product.subcategory);

    breadcrumb.innerHTML = `
        <a href="index.html">Home</a>
        <span>/</span>
        <a href="products.html?category=${encodeURIComponent(product.category)}">${categoryMeta ? categoryMeta.label : product.category}</a>
        ${subcategoryMeta ? `
            <span>/</span>
            <a href="products.html?category=${encodeURIComponent(product.category)}&subcategory=${encodeURIComponent(product.subcategory)}">${subcategoryMeta.label}</a>
        ` : ""}
        <span>/</span>
        <span class="current">${product.name}</span>
    `;

    /* main product section */
    root.innerHTML = `

        <section class="product-page">

            <div class="product-gallery">

                <div class="main-image">
                    <img id="mainImage" src="${images[0]}" alt="${product.name}">
                </div>

                ${images.length > 1 ? `
                    <div class="thumbnail-row" id="thumbnailRow">
                        ${images.map((img, i) => `
                            <div class="thumb ${i === 0 ? "active" : ""}" data-src="${img}">
                                <img src="${img}" alt="${product.name} view ${i + 1}">
                            </div>
                        `).join("")}
                    </div>
                ` : ""}

                <div class="gallery-features">
                    <h3>Why Choose This Product</h3>
                    <ul class="feature-list">
                        ${getProductFeatures(product).map(feature => `
                            <li><i class="fa-solid fa-circle-check"></i><span>${feature}</span></li>
                        `).join("")}
                    </ul>
                </div>

            </div>

            <div class="product-info">

                <span class="product-category-tag">${categoryMeta ? categoryMeta.label : product.category}</span>

                <h1>${product.name}</h1>

                <div class="rating-row">
                    ${"★".repeat(product.rating)}${"☆".repeat(5 - product.rating)}
                    <span>(${product.reviews} reviews)</span>
                </div>

                <p class="price-row">${formatPrice(product.price)}</p>

                <p class="stock"><i class="fa-solid fa-circle-check"></i> In Stock, ready to ship</p>

                <p class="description">${getProductDescription(product)}</p>

                ${renderComfortScale(product)}

                <div class="quantity-row">

                    <div class="quantity">
                        <button id="qtyMinus" aria-label="Decrease quantity">−</button>
                        <input id="qty" type="text" value="1" inputmode="numeric" aria-label="Quantity">
                        <button id="qtyPlus" aria-label="Increase quantity">+</button>
                    </div>

                </div>

                <div class="buttons">
                    <button class="btn cart-btn" id="addToCart">Add to Cart</button>
                    <button class="btn buy-btn" id="buyNow">Buy Now</button>
                </div>

                <div class="info-block">
                    <h3>Specifications</h3>
                    <ul>
                        ${getProductSpecs(product).map(spec => `<li>${spec}</li>`).join("")}
                    </ul>
                </div>

                <div class="info-block">
                    <h3>Shipping</h3>
                    <p>Free island-wide shipping. Delivery within 3–5 working days.</p>
                </div>

            </div>

        </section>

        <section class="reviews-section">

            <div class="reviews-header">
                <h2>Customer Reviews</h2>
                <button class="btn btn-primary" id="writeReviewBtn">
                    <i class="fa-brands fa-whatsapp"></i> Write a Review
                </button>
            </div>

            <div class="reviews-list" id="reviewsList"></div>

        </section>

        <section class="related">
            <h2>You may also like</h2>
            <div class="related-grid" id="relatedGrid"></div>
        </section>

        <div class="toast" id="toast"></div>

    `;

    setupGallery(images);
    setupQuantity();
    setupActions(product);
    renderRelated(product);
    renderReviews(product);

}


/* =====================================================
   LAZOVA COMFORT SCALE (density-based, see data.js)
   Shows only for products that have a density value.
===================================================== */

function renderComfortScale(product) {

    const position = getComfortPosition(product);
    if (position === null) return "";

    const density = getProductDensity(product);

    return `
        <div class="comfort-scale">
            <div class="comfort-scale-head">
                <span>LAZOVA Comfort Scale</span>
                <strong>${getComfortLabel(product)} · ${density} kg/m³</strong>
            </div>
            <div class="comfort-scale-bar">
                <span class="comfort-scale-dot" style="left:${position}%"></span>
            </div>
            <div class="comfort-scale-ends">
                <span>Soft</span>
                <span>Firm</span>
            </div>
        </div>
    `;

}


/* =====================================================
   GALLERY
===================================================== */

function setupGallery(images) {

    if (images.length <= 1) return;

    const mainImage = document.getElementById("mainImage");
    const thumbs = document.querySelectorAll(".thumb");

    thumbs.forEach(thumb => {

        thumb.addEventListener("click", () => {

            if (thumb.classList.contains("active")) return;

            mainImage.classList.add("swapping");

            setTimeout(() => {
                mainImage.src = thumb.dataset.src;
                mainImage.classList.remove("swapping");
            }, 150);

            thumbs.forEach(t => t.classList.remove("active"));
            thumb.classList.add("active");

        });

    });

}


/* =====================================================
   QUANTITY
===================================================== */

function setupQuantity() {

    let qty = 1;
    const qtyInput = document.getElementById("qty");

    document.getElementById("qtyPlus").addEventListener("click", () => {
        qty++;
        qtyInput.value = qty;
    });

    document.getElementById("qtyMinus").addEventListener("click", () => {
        if (qty > 1) {
            qty--;
            qtyInput.value = qty;
        }
    });

    qtyInput.addEventListener("change", () => {
        const value = parseInt(qtyInput.value, 10);
        qty = (!isNaN(value) && value > 0) ? value : 1;
        qtyInput.value = qty;
    });

}


/* =====================================================
   CART / BUY ACTIONS
===================================================== */

function setupActions(product) {

    document.getElementById("addToCart").addEventListener("click", () => {
        const qty = getCurrentQty();
        if (typeof addToCart === "function") {
            addToCart(product, qty);
        }
        showToast(`${product.name} added to cart.`);
    });

    document.getElementById("buyNow").addEventListener("click", () => {
        const qty = getCurrentQty();
        openOrderModal(product, qty);
    });

    document.getElementById("modalClose").addEventListener("click", closeOrderModal);

    document.getElementById("orderModalOverlay").addEventListener("click", (e) => {
        if (e.target.id === "orderModalOverlay") closeOrderModal();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeOrderModal();
    });

}

function getCurrentQty() {
    const value = parseInt(document.getElementById("qty").value, 10);
    return (!isNaN(value) && value > 0) ? value : 1;
}

function showToast(message) {

    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2400);

}


/* =====================================================
   ORDER MODAL  (no online payment — order details are
   confirmed manually over WhatsApp)
===================================================== */

function generateOrderRef() {
    const now = new Date();
    const stamp = now.toISOString().slice(0,10).replace(/-/g,"");
    const rand = Math.floor(100 + Math.random() * 900);
    return `LX-${stamp}-${rand}`;
}

function openOrderModal(product, qty) {

    const orderRef = generateOrderRef();
    const dateStr = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
    const total = product.price * qty;

    const waMessage =
        `Hi LAZOVA, I'd like to order:\n` +
        `${product.name} x${qty}\n` +
        `Total: ${formatPrice(total)}\n` +
        `Order Ref: ${orderRef}\n\n` +
        `I'll send a screenshot/PDF of my order for verification.`;

    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

    document.getElementById("printArea").innerHTML = `

        <div class="order-slip">

            <h2>Order Summary</h2>
            <p class="order-meta">
                Ref: <strong>${orderRef}</strong> &nbsp;•&nbsp; ${dateStr}
            </p>

            <div class="order-line">
                <img src="${product.image}" alt="${product.name}">
                <div class="order-line-details">
                    <p class="name">${product.name}</p>
                    <p class="meta">${product.material} · ${product.size} · ${getComfortLabel(product)}</p>
                    <p class="meta">Qty: ${qty} &nbsp;×&nbsp; ${formatPrice(product.price)}</p>
                </div>
            </div>

            <div class="order-totals">
                <div class="row"><span>Subtotal</span><span>${formatPrice(total)}</span></div>
                <div class="row"><span>Shipping</span><span>Free</span></div>
                <div class="row total"><span>Total</span><span>${formatPrice(total)}</span></div>
            </div>

            <p class="order-note">
                This order isn't paid online. Please send screenshot or PDF of your order
                to below whatsapp number for verify and process the your order:
                <br><strong>${WHATSAPP_DISPLAY}</strong>
            </p>

            <div class="order-actions">
                <a class="btn whatsapp-btn" href="${waLink}" target="_blank" rel="noopener">
                    <i class="fa-brands fa-whatsapp"></i> Send order on WhatsApp
                </a>
                <button class="btn pdf-btn" id="downloadPdf">
                    <i class="fa-solid fa-file-arrow-down"></i> Download as PDF
                </button>
            </div>

        </div>

    `;

    document.getElementById("downloadPdf").addEventListener("click", () => {
        window.print();
    });

    document.getElementById("orderModalOverlay").classList.add("open");
    document.body.style.overflow = "hidden";

}

function closeOrderModal() {
    document.getElementById("orderModalOverlay").classList.remove("open");
    document.body.style.overflow = "";
}


/* =====================================================
   RELATED PRODUCTS
===================================================== */

function renderRelated(product) {

    const grid = document.getElementById("relatedGrid");
    const related = getRelatedProducts(product, 4);

    grid.innerHTML = related.map(item => `

        <a class="related-card" href="product.html?id=${item.id}">

            <div class="related-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>

            <div class="related-info">
                <p class="related-category">${item.category}</p>
                <h3>${item.name}</h3>
                <p class="related-price">${formatPrice(item.price)}</p>
            </div>

        </a>

    `).join("");

}


/* =====================================================
   CUSTOMER REVIEWS
===================================================== */

function renderReviews(product) {

    const list = document.getElementById("reviewsList");
    const productReviews = getReviewsForProduct(product.id);

    if (!productReviews.length) {

        list.innerHTML = `
            <div class="no-reviews">
                <p>No reviews yet for this product.</p>
                <p class="no-reviews-sub">Be the first to share what you think.</p>
            </div>
        `;

    } else {

        list.innerHTML = productReviews.map(review => `

            <div class="review-card">
                <div class="review-top">
                    <div class="review-avatar">${review.name.charAt(0).toUpperCase()}</div>
                    <div>
                        <p class="review-name">${review.name}</p>
                        <div class="review-stars">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</div>
                    </div>
                    <span class="review-date">${formatReviewDate(review.date)}</span>
                </div>
                <p class="review-text">${review.text}</p>
            </div>

        `).join("");

    }

    document.getElementById("writeReviewBtn").addEventListener("click", () => {

        const message =
            `Hi LAZOVA, I'd like to leave a review for ${product.name}.\n` +
            `My rating (1-5 stars): \n` +
            `My review: `;

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");

    });

}
