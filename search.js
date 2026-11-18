/* =====================================================
   SITE-WIDE "FIND ON THIS PAGE" SEARCH
   -----------------------------------------------------
   Wires up the magnifying-glass icon in the header on
   EVERY page. Typing into it highlights every match of
   that text within the current page's own content, live,
   as you type.

   This is completely separate from the product filter
   search box on products.html (#productSearch) — this
   script never touches that input or its behaviour.
===================================================== */

(function () {

    const searchBtn = document.querySelector('.icons button[aria-label="Search"]');
    if (!searchBtn) return;

    /* ---------- build the expanding search panel ---------- */

    const wrap = document.createElement("div");
    wrap.className = "site-search-wrap";

    searchBtn.parentNode.insertBefore(wrap, searchBtn);
    wrap.appendChild(searchBtn);

    const panel = document.createElement("div");
    panel.className = "site-search-panel";
    panel.innerHTML = `
        <input type="text" class="site-search-input" placeholder="Search this page..." aria-label="Search this page">
        <span class="site-search-count"></span>
    `;
    wrap.appendChild(panel);

    const input = panel.querySelector(".site-search-input");
    const countLabel = panel.querySelector(".site-search-count");


    /* ---------- open / close ---------- */

    function openPanel() {
        wrap.classList.add("open");
        input.focus();
    }

    function closePanel() {
        wrap.classList.remove("open");
        input.value = "";
        clearHighlights();
        countLabel.textContent = "";
    }

    searchBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        wrap.classList.contains("open") ? closePanel() : openPanel();
    });

    panel.addEventListener("click", (e) => e.stopPropagation());

    document.addEventListener("click", (e) => {
        if (!wrap.contains(e.target)) closePanel();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closePanel();
    });


    /* ---------- highlighting ---------- */

    function clearHighlights() {
        document.querySelectorAll("mark.site-search-highlight").forEach(mark => {
            const parent = mark.parentNode;
            if (!parent) return;
            parent.replaceChild(document.createTextNode(mark.textContent), mark);
            parent.normalize();
        });
    }

    function highlight(query) {

        clearHighlights();

        if (!query.trim()) {
            countLabel.textContent = "";
            return;
        }

        const lowerQuery = query.toLowerCase();

        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {

                if (!node.nodeValue || !node.nodeValue.trim()) {
                    return NodeFilter.FILTER_REJECT;
                }

                const parentTag = node.parentNode && node.parentNode.nodeName;

                if (["SCRIPT", "STYLE", "MARK", "TEXTAREA", "INPUT", "NOSCRIPT"].includes(parentTag)) {
                    return NodeFilter.FILTER_REJECT;
                }

                // never highlight inside the header (incl. this search panel itself)
                if (node.parentElement && node.parentElement.closest("header")) {
                    return NodeFilter.FILTER_REJECT;
                }

                return NodeFilter.FILTER_ACCEPT;

            }
        });

        const nodes = [];
        let current;
        while ((current = walker.nextNode())) nodes.push(current);

        let matchCount = 0;
        let firstMark = null;

        nodes.forEach(node => {

            const text = node.nodeValue;
            const lowerText = text.toLowerCase();

            if (!lowerText.includes(lowerQuery)) return;

            const frag = document.createDocumentFragment();
            let lastIndex = 0;
            let idx;

            while ((idx = lowerText.indexOf(lowerQuery, lastIndex)) !== -1) {

                if (idx > lastIndex) {
                    frag.appendChild(document.createTextNode(text.slice(lastIndex, idx)));
                }

                const mark = document.createElement("mark");
                mark.className = "site-search-highlight";
                mark.textContent = text.slice(idx, idx + query.length);
                frag.appendChild(mark);

                if (!firstMark) firstMark = mark;
                matchCount++;
                lastIndex = idx + query.length;

            }

            if (lastIndex < text.length) {
                frag.appendChild(document.createTextNode(text.slice(lastIndex)));
            }

            node.parentNode.replaceChild(frag, node);

        });

        countLabel.textContent = matchCount
            ? `${matchCount} match${matchCount === 1 ? "" : "es"} on this page`
            : "No matches on this page";

        if (firstMark) {
            firstMark.scrollIntoView({ behavior: "smooth", block: "center" });
        }

    }

    input.addEventListener("input", () => highlight(input.value));

})();



(function () {
    var toggle = document.getElementById("navToggle");
    var nav = document.getElementById("mainNav");
    if (!toggle || !nav) return;

    function setOpen(open) {
        nav.classList.toggle("open", open);
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        toggle.querySelector("i").className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    }

    toggle.addEventListener("click", function () {
        setOpen(!nav.classList.contains("open"));
    });

    nav.addEventListener("click", function (e) {
        if (e.target.tagName === "A") setOpen(false);
    });

    document.addEventListener("click", function (e) {
        if (!nav.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") setOpen(false);
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) setOpen(false);
    });
})();
