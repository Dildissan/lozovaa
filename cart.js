/* =====================================================
   CART BADGE + DRAWER
   -----------------------------------------------------
   Cart state is kept in sessionStorage, scoped to this
   browser tab/session:

     - Add to Cart (product.html) adds the item and updates
       the badge count on the "shop" icon straight away.
     - The cart carries over as you navigate to any other
       page on the site — nothing is lost between pages.
     - Clicking the shop icon opens the cart panel showing
       every item added so far, and the badge is marked as
       seen (it reappears if something new is added later).
     - Closing the browser tab/window clears the cart, so
       the next visit starts fresh.

   addToCart(product, qty) is called from product.js when
   "Add to Cart" is clicked.
===================================================== */

(function () {

    const STORAGE_KEY = "LAZOVA_cart";

    const WHATSAPP = (typeof WHATSAPP_NUMBER !== "undefined") ? WHATSAPP_NUMBER : "94770221092";

    function priceText(amount) {
        return (typeof formatPrice === "function")
            ? formatPrice(amount)
            : `Rs. ${Number(amount).toLocaleString("en-US")}`;
    }


    /* ---------- persisted state ---------- */

    function loadState() {
        try {
            const raw = sessionStorage.getItem(STORAGE_KEY);
            if (!raw) return { items: [], seen: true };
            const parsed = JSON.parse(raw);
            return {
                items: Array.isArray(parsed.items) ? parsed.items : [],
                seen: typeof parsed.seen === "boolean" ? parsed.seen : true
            };
        } catch (e) {
            return { items: [], seen: true };
        }
    }

    function saveState() {
        try {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ items: window.cart, seen }));
        } catch (e) {
            // sessionStorage unavailable (e.g. private browsing) — cart still
            // works for the current page, it just won't carry over
        }
    }

    const initial = loadState();
    window.cart = initial.items;
    let seen = initial.seen;


    /* ---------- badge ---------- */

    const cartBtn = document.querySelector('.icons button[aria-label="Cart"]');
    let badge = null;

    if (cartBtn) {
        cartBtn.style.position = "relative";
        badge = document.createElement("span");
        badge.className = "cart-badge";
        cartBtn.appendChild(badge);
    }

    function updateBadge() {

        if (!badge) return;

        const count = window.cart.reduce((sum, item) => sum + item.qty, 0);

        if (count > 0 && !seen) {
            badge.textContent = count;
            badge.classList.add("show");
        } else {
            badge.classList.remove("show");
        }

    }


    /* ---------- public API (called from product.js) ---------- */

    window.addToCart = function (product, qty = 1) {

        const existing = window.cart.find(i => i.id === product.id);

        if (existing) {
            existing.qty += qty;
        } else {
            window.cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                qty
            });
        }

        seen = false;
        saveState();
        updateBadge();

    };


    /* ---------- drawer ---------- */

    const overlay = document.createElement("div");
    overlay.className = "cart-drawer-overlay";
    overlay.innerHTML = `
        <div class="cart-drawer">
            <div class="cart-drawer-head">
                <h3>Your Cart</h3>
                <button class="cart-drawer-close" aria-label="Close cart">✕</button>
            </div>
            <div class="cart-drawer-body"></div>
        </div>
    `;
    document.body.appendChild(overlay);

    const drawerBody = overlay.querySelector(".cart-drawer-body");

    function renderDrawer() {

        if (!window.cart.length) {
            drawerBody.innerHTML = `
                <div class="cart-empty">
                    <p>Your cart is empty.</p>
                    <a href="products.html" class="btn btn-primary">Browse Products</a>
                </div>
            `;
            return;
        }

        const total = window.cart.reduce((sum, item) => sum + item.price * item.qty, 0);

        const waMessage = `Hi LAZOVA, I'd like to order:\n` +
            window.cart.map(i => `${i.name} x${i.qty}`).join("\n") +
            `\nTotal: ${priceText(total)}`;

        drawerBody.innerHTML = `

            <div class="cart-items">
                ${window.cart.map(item => `
                    <div class="cart-item" data-id="${item.id}">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cart-item-info">
                            <p class="cart-item-name">${item.name}</p>
                            <p class="cart-item-meta">Qty: ${item.qty} &times; ${priceText(item.price)}</p>
                        </div>
                        <button class="cart-item-remove" aria-label="Remove ${item.name}">✕</button>
                    </div>
                `).join("")}
            </div>

            <div class="cart-drawer-total">
                <span>Total</span>
                <span>${priceText(total)}</span>
            </div>

            <a class="btn cart-checkout-btn" target="_blank" rel="noopener"
               href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waMessage)}">
                <i class="fa-brands fa-whatsapp"></i> Checkout on WhatsApp
            </a>

        `;

        drawerBody.querySelectorAll(".cart-item-remove").forEach(btn => {
            btn.addEventListener("click", () => {
                const id = Number(btn.closest(".cart-item").dataset.id);
                window.cart = window.cart.filter(i => i.id !== id);
                saveState();
                renderDrawer();
                updateBadge();
            });
        });

    }

    function openDrawer() {
        renderDrawer();
        overlay.classList.add("open");
        document.body.style.overflow = "hidden";
        seen = true;
        saveState();
        updateBadge();
    }

    function closeDrawer() {
        overlay.classList.remove("open");
        document.body.style.overflow = "";
    }

    if (cartBtn) {
        cartBtn.addEventListener("click", openDrawer);
    }

    overlay.querySelector(".cart-drawer-close").addEventListener("click", closeDrawer);

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeDrawer();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeDrawer();
    });

    updateBadge();

})();
