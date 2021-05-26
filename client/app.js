window.onload = function() {
  renderLoader()
  get('https://www.wholejs.com/articles', (articles) => {
    if (articles) {
      setTimeout(() => renderContent(articles), 200);
      // Routing is emulated using location hash, hashchange is the main routing event
      window.addEventListener("hashchange", () => renderContent(articles));
    } else {
      setTimeout(renderFallback, 200);
    }
  });
};

const renderContent = (articles) => {
  const root = document.getElementById("app");
  clearNodeContent(root);

  // TODO: I don't like GridLayout API neither the css implementation
  const gridLayout = new GridLayout();
  gridLayout.appendTo(root);
  const renderedGridLayout = gridLayout.getRenderedChild();

  Topbar.appendTo(renderedGridLayout);

  // This is the router, casing by entity type
  switch(getLocationHashEntityType()) {

    case '#article': {
      const link = new Link('index.html', 'home');
      link.appendTo(renderedGridLayout);
      const articleData = articles.find((a) => a.id === getLocationHashEntityId())
      const article = new Article(articleData, true)
      article.appendTo(renderedGridLayout);
      break;
    }

    default: {
      articles.forEach((articleData) => {
        const article = new Article(articleData);
        article.appendTo(renderedGridLayout);
      });
    }

  }
};

const renderFallback = () => {
  const root = document.getElementById("app");
  clearNodeContent(root);

  const wrapper = createNode('fallback-wrapper');
  root.appendChild(wrapper);

  const title = new Title('The server is down for a moment 😿');
  title.appendTo(wrapper);
};

const renderLoader = () => {
  const root = document.getElementById("app");
  clearNodeContent(root);

  const wrapper = createNode('fallback-wrapper');
  root.appendChild(wrapper);

  const title = new Title('⏳');
  title.appendTo(wrapper);
}