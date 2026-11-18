/* =====================================================
   OFFERS CONFIG
   -----------------------------------------------------
   Edit the two offers below any time — just change the
   text/numbers between the quotes. No other code on this
   page needs to change.

   Each offer supports TWO modes:

   MODE A — Tied to a real product from data.js:
       Set "productId" to the same id used in
       product.html?id=XX links. The image, material,
       size and firmness will be pulled automatically
       from that product. You can still override the
       title/description/price shown on the offer card.

   MODE B — Standalone deal (no specific product):
       Leave "productId" as null and fill in "specs"
       manually (or leave specs blank to hide that line).

   Fields:
     id          - unique short code, don't reuse between offers
     badge       - small tag text shown on the card (e.g. "Limited Time")
     title       - offer heading
     description - 1-2 sentence description
     image       - path to an image file (same folder rules as elsewhere)
     price       - the offer price (number, no currency symbol)
     originalPrice - optional "was" price shown with strikethrough (or null)
     productId   - optional, see MODE A above (or null)
     specs       - optional manual specs, only used in MODE B
     validUntil  - optional display-only date string "YYYY-MM-DD" (or null)
===================================================== */

const OFFERS = [

    {
        id: "offer1",
        badge: "Limited Time",
        title: "Buy 1 Get 1 Free — Latex Pillows",
        description: "Order any natural latex pillow and get a second one free. Perfect for guest rooms or a matching pair.",
        image: "images/offer01.jpg",
        price: 12500,
        originalPrice: 25000,
        productId: null,
        specs: {
            material: "100% Natural Latex",
            size: "Standard",
            firmness: "Medium"
        },
        validUntil: "2026-12-31"
    },

    {
        id: "offer2",
        badge: "Season Deal",
        title: "20% Off Any Mattress",
        description: "Take 20% off any natural latex mattress in our collection, plus free island-wide shipping.",
        image: "images/offer02.jpg",
        price: 45000,
        originalPrice: 56250,
        productId: null,
        specs: {
            material: "100% Natural Latex",
            size: "Queen",
            firmness: "Medium-Firm"
        },
        validUntil: "2026-12-31"
    }

];
