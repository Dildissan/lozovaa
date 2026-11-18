/* =====================================================
   CUSTOMER REVIEWS
   Starts empty — reviews get added here by hand once a
   customer sends one in (via the WhatsApp "Write a Review"
   button, or however else it reaches you). This is a
   moderation queue you control, not a live public form.

   Schema:
   {
       id: unique number,
       productId: matches a product id in data.js,
       name: customer's name (as they gave it),
       rating: 1-5,
       text: the review text,
       date: "YYYY-MM-DD"
   }
===================================================== */

const reviews = [

];


/* Helper: all reviews for one product, newest first */
function getReviewsForProduct(productId) {
    return reviews
        .filter(r => r.productId === Number(productId))
        .sort((a, b) => new Date(b.date) - new Date(a.date));
}

/* Helper: most recent reviews across all products, for the homepage.
   Only counts 4-5 star reviews, since a homepage testimonials
   section is meant to showcase what customers are saying, not
   surface every review regardless of sentiment. */
function getRecentReviews(limit = 3) {
    return reviews
        .filter(r => r.rating >= 4)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, limit);
}

/* Helper: "2026-07-25" -> "July 25, 2026" */
function formatReviewDate(iso) {
    return new Date(iso + "T00:00:00").toLocaleDateString(undefined, {
        year: "numeric", month: "long", day: "numeric"
    });
}
