/* =====================================================
   RESOLVE ARTICLE FROM URL
===================================================== */

const params = new URLSearchParams(window.location.search);
const article = getArticleBySlug(params.get("slug"));

const root = document.getElementById("articleRoot");
const breadcrumb = document.getElementById("breadcrumb");

const WHATSAPP_NUMBER = "94713443701";


if (!article) {

    renderNotFound();

} else {

    renderArticle(article);

}


/* =====================================================
   NOT FOUND STATE
===================================================== */

function renderNotFound() {

    document.title = "Article not found | LAZOVA";

    root.innerHTML = `
        <section class="not-found">
            <h1>We couldn't find that article</h1>
            <p>It may have been moved, or the link is out of date.</p>
            <a href="blog.html" class="btn btn-primary">Back to the journal</a>
        </section>
    `;

}


/* =====================================================
   MAIN RENDER
===================================================== */

function renderArticle(article) {

    document.title = article.title + " | LAZOVA";

    breadcrumb.innerHTML = `
        <a href="index.html">Home</a>
        <span>/</span>
        <a href="blog.html">Blog</a>
        <span>/</span>
        <span class="current">${article.title}</span>
    `;

    const bodyHtml = article.content.map(block => {

        if (block.startsWith("## ")) {
            return `<h3>${block.slice(3)}</h3>`;
        }

        return `<p>${block}</p>`;

    }).join("");

    const shareText = `${article.title} — LAZOVA Journal\n${window.location.href}`;
    const shareLink = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

    root.innerHTML = `

        <article>

            <div class="article-header">
                <span class="article-category">${article.category}</span>
                <h1>${article.title}</h1>
                <div class="article-meta">
                    <span><i class="fa-regular fa-calendar"></i> ${formatArticleDate(article.date)}</span>
                    <span><i class="fa-regular fa-clock"></i> ${article.readTime}</span>
                    <span><i class="fa-regular fa-user"></i> ${article.author}</span>
                </div>
            </div>

            <div class="article-hero">
                <img src="${article.image}" alt="${article.title}">
            </div>

            <div class="article-body">
                ${bodyHtml}
            </div>

            <div class="article-share">
                <span>Share this article</span>
                <a class="share-btn" href="${shareLink}" target="_blank" rel="noopener">
                    <i class="fa-brands fa-whatsapp"></i> WhatsApp
                </a>
            </div>

        </article>

        <section class="related">
            <h2>More from the journal</h2>
            <div class="related-grid" id="relatedGrid"></div>
        </section>

    `;

    renderRelated(article);

}


/* =====================================================
   RELATED ARTICLES
===================================================== */

function renderRelated(article) {

    const grid = document.getElementById("relatedGrid");
    const related = getRelatedArticles(article, 3);

    grid.innerHTML = related.map(item => `

        <a class="related-card" href="blog-post.html?slug=${item.slug}">
            <img src="${item.image}" alt="${item.title}">
            <div class="related-info">
                <p class="related-category">${item.category}</p>
                <h3>${item.title}</h3>
            </div>
        </a>

    `).join("");

}
