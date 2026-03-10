import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { CurrentUserContext } from '../../context/CurrentUserContext.js';

import Main from '../Main/Main.jsx';
import Header from '../Header/Header.jsx';
import SavedNews from '../SavedNews/SavedNews.jsx';
import Footer from '../Footer/Footer.jsx';

export default function App() {
  const [popup, setPopup] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('Elise');

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
    </CurrentUserContext.Provider>
  );
}
