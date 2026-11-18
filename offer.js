/* =====================================================
   BUSINESS WHATSAPP NUMBER
   Kept in sync with product.js. If you change your
   WhatsApp number, update it in BOTH files.
===================================================== */

const WHATSAPP_NUMBER = "94770221092";
const WHATSAPP_DISPLAY = "+94 77 022 1092";


/* =====================================================
   RENDER OFFER CARDS
===================================================== */

const grid = document.getElementById("offersGrid");

grid.innerHTML = OFFERS.map(renderOfferCard).join("");

function priceText(amount) {
    return (typeof formatPrice === "function") ? formatPrice(amount) : `Rs. ${amount}`;
}

function formatValidDate(dateStr) {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    if (isNaN(d)) return dateStr;
    return d.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

function renderOfferCard(offer) {

    const originalPriceHtml = offer.originalPrice
        ? `<span class="offer-original-price">${priceText(offer.originalPrice)}</span>`
        : "";

    const validHtml = offer.validUntil
        ? `<p class="offer-valid">Valid until ${formatValidDate(offer.validUntil)}</p>`
        : "";

    return `
        <div class="offer-card">
            ${offer.badge ? `<span class="offer-tag">${offer.badge}</span>` : ""}
            <div class="offer-image">
                <img src="${offer.image}" alt="${offer.title}">
            </div>
            <div class="offer-body">
                <h3>${offer.title}</h3>
                <p class="offer-description">${offer.description}</p>
                <p class="offer-price">${priceText(offer.price)} ${originalPriceHtml}</p>
                ${validHtml}
                <button class="btn buy-btn offer-claim-btn" data-offer-id="${offer.id}">Claim Offer</button>
            </div>
        </div>
    `;

}


/* =====================================================
   CLAIM OFFER -> BUILD ORDER ITEM -> OPEN ORDER MODAL
===================================================== */

document.querySelectorAll(".offer-claim-btn").forEach(btn => {

    btn.addEventListener("click", () => {
        const offer = OFFERS.find(o => o.id === btn.dataset.offerId);
        if (offer) claimOffer(offer);
    });

});

function claimOffer(offer) {

    let item = null;

    /* MODE A: pull real product details if productId is set */
    if (offer.productId && typeof getProductById === "function") {
        const realProduct = getProductById(offer.productId);
        if (realProduct) {
            item = {
                name: offer.title || realProduct.name,
                price: (offer.price != null) ? offer.price : realProduct.price,
                image: realProduct.image,
                material: realProduct.material,
                size: realProduct.size,
                firmness: realProduct.firmness
            };
        }
    }

    /* MODE B: standalone offer, use manual specs (if any) */
    if (!item) {
        item = {
            name: offer.title,
            price: offer.price,
            image: offer.image,
            material: offer.specs ? offer.specs.material : "",
            size: offer.specs ? offer.specs.size : "",
            firmness: offer.specs ? offer.specs.firmness : ""
        };
    }

    openOfferOrderModal(item, 1);

}


/* =====================================================
   ORDER MODAL (same pattern as product.js — WhatsApp +
   PDF, no online payment)
===================================================== */

function generateOrderRef() {
    const now = new Date();
    const stamp = now.toISOString().slice(0, 10).replace(/-/g, "");
    const rand = Math.floor(100 + Math.random() * 900);
    return `LX-OFR-${stamp}-${rand}`;
}

function openOfferOrderModal(item, qty) {

    const orderRef = generateOrderRef();
    const dateStr = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
    const total = item.price * qty;

    const waMessage =
        `Hi LAZOVA, I'd like to claim this offer:\n` +
        `${item.name} x${qty}\n` +
        `Total: ${priceText(total)}\n` +
        `Order Ref: ${orderRef}\n\n` +
        `I'll send a screenshot/PDF of my order for verification.`;

    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

    const metaParts = [item.material, item.size, item.firmness].filter(Boolean);

    document.getElementById("printArea").innerHTML = `

        <div class="order-slip">

            <h2>Offer Order Summary</h2>
            <p class="order-meta">
                Ref: <strong>${orderRef}</strong> &nbsp;•&nbsp; ${dateStr}
            </p>

            <div class="order-line">
                <img src="${item.image}" alt="${item.name}">
                <div class="order-line-details">
                    <p class="name">${item.name}</p>
                    ${metaParts.length ? `<p class="meta">${metaParts.join(" · ")}</p>` : ""}
                    <p class="meta">Qty: ${qty} &nbsp;×&nbsp; ${priceText(item.price)}</p>
                </div>
            </div>

            <div class="order-totals">
                <div class="row"><span>Subtotal</span><span>${priceText(total)}</span></div>
                <div class="row"><span>Shipping</span><span>Free</span></div>
                <div class="row total"><span>Total</span><span>${priceText(total)}</span></div>
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

function closeOfferModal() {
    document.getElementById("orderModalOverlay").classList.remove("open");
    document.body.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", closeOfferModal);

document.getElementById("orderModalOverlay").addEventListener("click", (e) => {
    if (e.target.id === "orderModalOverlay") closeOfferModal();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeOfferModal();
});


/* =====================================================
   CLOSE OFFER -> BACK TO HOMEPAGE
   (The homepage badge is static HTML with no dismiss
   state, so it will still show when the visitor returns.)
===================================================== */

document.getElementById("closeOfferBtn").addEventListener("click", () => {
    window.location.href = "index.html";
});
