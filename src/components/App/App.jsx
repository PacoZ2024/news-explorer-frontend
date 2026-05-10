import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import { CurrentUserContext } from '../../context/CurrentUserContext.js';
import { SearchArticleContext } from '../../context/searchArticleContext.js';

import Main from '../Main/Main.jsx';
import Header from '../Header/Header.jsx';
import SavedNews from '../SavedNews/SavedNews.jsx';
import Footer from '../Footer/Footer.jsx';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';

import { newsApi } from '../../utils/NewsApi.js';
import { api } from '../../utils/Api.js';
import * as auth from '../../utils/auth.js';
import {
  getTokenLocalStorage,
  removeTokenLocalStorage,
} from '../../utils/token.js';

export default function App() {
  const [popup, setPopup] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
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
      localStorage.removeItem('lastKeyword');
    }
    return [];
  });
  const [hasSearched, setHasSearched] = useState(() => {
    if (localStorage.getItem('lastKeyword')) {
      return true;
    }
    return false;
  });
  const [searchKeyword, setSearchKeyword] = useState(() => {
    return localStorage.getItem('lastKeyword') || '';
  });

  const navigate = useNavigate();

  async function handleSearch(keyword) {
    if (!keyword.trim()) {
      setSearchError('Por favor, introduzca una palabra clave');
      return;
    }
    setHasSearched(true);
    setIsLoading(true);
    await newsApi
      .searchNews(keyword)
      .then((data) => {
        const results = data.articles.map((article) => ({
          ...article,
          keyword,
          isSaved: 'false',
        }));
        setSearchResults(results);
        localStorage.setItem('lastKeyword', keyword);
        localStorage.setItem('searchResults', JSON.stringify(results));
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
        setSavedArticles([
          ...savedArticles,
          { ...savedArticle, isSaved: 'true' },
        ]);
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

  function handleSignOut() {
    removeTokenLocalStorage();
    setIsLoggedIn(false);
    setUserName('');
    setSavedArticles([]);
    navigate('/');
    clearSearch();
  }

  function clearSearch() {
    setHasSearched(false);
    setSearchResults([]);
    setSearchError('');
    setSearchKeyword('');
    localStorage.removeItem('searchResults');
    localStorage.removeItem('lastKeyword');
  }

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  useEffect(() => {
    const token = getTokenLocalStorage();

    if (!token) {
      return;
    }

    (async () => {
      await auth
        .checkToken(token)
        .then((data) => {
          api.addAuthorizationToHeader(token);
          setIsLoggedIn(true);
          setUserName(data.username);
        })
        .catch((err) => {
          removeTokenLocalStorage();
          setIsLoggedIn(false);
          console.error('Token inválido:', err);
        });
    })();
  }, []);

  useEffect(() => {
    if (isLoggedIn)
      (async () => {
        await api
          .getUserInfo()
          .then((data) => {
            setUserName(data.username);
          })
          .catch((err) => console.err(err));
      })();
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn)
      (async () => {
        await api
          .getSavedArticles()
          .then((data) => {
            setSavedArticles(data);
          })
          .catch((err) => console.error(err));
      })();
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userName,
        setUserName,
        handleSignOut,
      }}
    >
      <SearchArticleContext.Provider
        value={{
          searchResults,
          isLoading,
          hasSearched,
          searchError,
          savedArticles,
          searchKeyword,
          setSearchError,
          setSearchKeyword,
          setSearchResults,
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
            <Route
              path='/saved-news'
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedNews />
                </ProtectedRoute>
              }
            />
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
