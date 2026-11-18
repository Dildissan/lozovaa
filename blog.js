/* =====================================================
   RENDER FEATURED ARTICLES
===================================================== */

function renderFeatured() {

    const grid = document.getElementById("featuredGrid");
    const featured = getFeaturedArticles();

    grid.innerHTML = featured.map(article => `

        <div class="featured-item">
            <img src="${article.image}" alt="${article.title}">
            <div class="featured-content">
                <h2>${article.title}</h2>
                <p>${article.excerpt}</p>
                <a href="blog-post.html?slug=${article.slug}" class="read-btn" style="display:inline-block;text-decoration:none;">Read More</a>
            </div>
        </div>

    `).join("");

}


/* =====================================================
   RENDER LATEST ARTICLES
===================================================== */

function renderLatest() {

    const grid = document.getElementById("latestGrid");
    const latest = getLatestArticles();

    grid.innerHTML = latest.map(article => `

        <div class="blog-card">
            <img src="${article.image}" alt="${article.title}">
            <div class="blog-content">
                <span>${formatArticleDate(article.date)}</span>
                <h3>${article.title}</h3>
                <p>${article.excerpt}</p>
                <a href="blog-post.html?slug=${article.slug}">Read More &rarr;</a>
            </div>
        </div>

    `).join("");

}


/* =====================================================
   NEWSLETTER
===================================================== */

document.getElementById("newsletterForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("newsletterEmail").value.trim();
    showToast(`Thanks! We'll send updates to ${email}.`);
    e.target.reset();
});

function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove("show"), 2600);
}


renderFeatured();
renderLatest();
