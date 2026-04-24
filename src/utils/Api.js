class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  async _request(endpoint, method, body) {
    return await fetch(`${this._baseUrl}${endpoint}`, {
      method,
      headers: this._headers,
      body: JSON.stringify(body),
    }).then((res) => this._checkResponse(res));
  }

  saveArticle(articleData) {
    return this._request('articles', 'POST', {
      keyword: articleData.keyword,
      title: articleData.title,
      description: articleData.description,
      date: articleData.date,
      source: articleData.source,
      url: articleData.url,
      urlToImage: articleData.urlToImage,
    });
  }

  deleteArticle(articleId) {
    return this._request(`articles/${articleId}`, 'DELETE');
  }

  getSavedArticles() {
    return this._request('articles');
  }
}

const api = new Api({
  baseUrl:
    import.meta.env.MODE === 'production'
      ? 'https://api.news-explorer-2026.mooo.com/'
      : 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { api };
