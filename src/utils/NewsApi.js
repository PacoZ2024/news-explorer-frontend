class NewsApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._apiKey = options.apikey;
  }

  _getDateSevenDaysAgo() {
    const date = new Date();
    date.setDate(date.getDate() - 7);
    return date.toISOString().split('T')[0];
  }

  _getCurrentDate() {
    return new Date().toISOString().split('T')[0];
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  _handleError(err) {
    console.error('Error en la solicitud:', err);
    return Promise.reject(err);
  }

  async searchNews(keyword) {
    const params = new URLSearchParams({
      q: keyword,
      apiKey: this._apiKey,
      from: this._getDateSevenDaysAgo(),
      to: this._getCurrentDate(),
      pageSize: 100,
    });

    return await fetch(`${this._baseUrl}/everything?${params.toString()}`)
      .then(this._checkResponse)
      .catch(this._handleError);
  }
}

const newsApi = new NewsApi({
  baseUrl: 'https://newsapi.org/v2/',
  apikey: 'af075b469e5247a48da353b08ccdfe6c',
});

export { newsApi };
