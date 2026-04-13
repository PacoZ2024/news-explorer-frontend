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
      urlToImage: articleData.urlToImage,
      publishedAt: articleData.publishedAt,
      title: articleData.title,
      description: articleData.description,
      source: articleData.source,
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
  baseUrl: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { api };
