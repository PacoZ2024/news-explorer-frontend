import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { CurrentUserContext } from '../../context/CurrentUserContext.js';
import { SearchArticleContext } from '../../context/searchArticleContext.js';

import Main from '../Main/Main.jsx';
import Header from '../Header/Header.jsx';
import SavedNews from '../SavedNews/SavedNews.jsx';
import Footer from '../Footer/Footer.jsx';

import { newsApi } from '../../utils/NewsApi.js';
import { api } from '../../utils/Api.js';

export default function App() {
  const [popup, setPopup] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userName, setUserName] = useState('Elise');
  const [savedArticles, setSavedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState('');
  const [searchResults, setSearchResults] = useState(() => {
    try {
      const savedResults = localStorage.getItem('searchResults');
      if (savedResults) {
        return JSON.parse(savedResults);
      }
    } catch (error) {
      console.error('Error al inicializar desde localStorage:', error);
      localStorage.removeItem('searchResults');
    }
    return [];
  });
  const [hasSearched, setHasSearched] = useState(() => {
    if (localStorage.getItem('searchResults')) {
      return true;
    }
    return false;
  });

  async function handleSearch(keyword) {
    if (!keyword.trim()) {
      setSearchError('Por favor, introduzca una palabra clave');
      return;
    }
    setHasSearched(true);
    setIsLoading(true);
    setSearchError('');
    await newsApi
      .searchNews(keyword)
      .then((data) => {
        setSearchResults(
          data.articles.map((article) => ({ ...article, keyword })),
        );
        localStorage.setItem('searchResults', JSON.stringify(data.articles));
        localStorage.setItem('lastKeyword', keyword);
      })
      .catch((err) => {
        console.error(err);
        setSearchError(
          'Lo sentimos, algo ha salido mal durante la solicitud. Es posible que haya un problema de conexión o que el servidor no funcione. Por favor, inténtalo más tarde',
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function handleSaveArticle(article) {
    await api
      .saveArticle(article)
      .then((savedArticle) => {
        setSavedArticles([...savedArticles, savedArticle]);
      })
      .catch((err) => {
        console.error('Error guardando artículo:', err);
      });
  }

  async function handleDeleteArticle(articleId) {
    await api
      .deleteArticle(articleId)
      .then((resp) => {
        setSavedArticles(
          savedArticles.filter((article) => article._id !== articleId),
        );
        console.log(resp.message);
      })
      .catch((err) => {
        console.error('Error eliminando artículo:', err);
      });
  }

  function clearSearch() {
    setHasSearched(false);
    setSearchResults([]);
    setSearchError('');
    localStorage.removeItem('searchResults');
    localStorage.removeItem('lastKeyword');
  }

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <CurrentUserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userName,
        setUserName,
      }}
    >
      <SearchArticleContext.Provider
        value={{
          searchResults,
          isLoading,
          hasSearched,
          searchError,
          savedArticles,
          clearSearch,
          handleSearch,
          handleSaveArticle,
          handleDeleteArticle,
        }}
      >
        <div className='app'>
          <Header
            onOpenPopup={handleOpenPopup}
            onClosePopup={handleClosePopup}
            popup={popup}
          />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/saved-news' element={<SavedNews />} />
            <Route
              path='*'
              element={
                isLoggedIn ? (
                  <Navigate to='/saved-news' replace />
                ) : (
                  <Navigate to='/' replace />
                )
              }
            />
          </Routes>
          <Footer />
        </div>
      </SearchArticleContext.Provider>
    </CurrentUserContext.Provider>
  );
}
