const container = document.getElementById("articles-container");

fetch("articles.json")
    .then(response => response.json())
    .then(articles => {
        renderArticles(articles);
    })
    .catch(error => {
        container.innerHTML = "<p>Articles could not be loaded.</p>";
        console.error("Error loading articles:", error);
    });

function renderArticles(articles) {

    const section = document.createElement("section");
    section.className = "publication-section";

    section.innerHTML = `
    <h2 class="publication-title">Portfolio</h2>
    <div class="articles-grid"></div>
  `;

    const grid = section.querySelector(".articles-grid");

    articles.forEach(article => {

        const card = document.createElement("a");

        card.className = "article-card";
        card.href = article.url;
        card.target = "_blank";
        card.rel = "noopener noreferrer";

        const media =
            article.mediaType === "video"
                ? `
          <video autoplay muted loop playsinline>
            <source src="${article.media}" type="video/mp4">
          </video>
        `
                : `
          <img src="${article.media}" alt="${article.title}" />
        `;

        card.innerHTML = `
      ${media}

      <h2>${article.title}</h2>
      <h4> ${article.publication}</h3>
      <h4>${article.date}</h3>
    `;

        grid.appendChild(card);

    });

    container.appendChild(section);
}