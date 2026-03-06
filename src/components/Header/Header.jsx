import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import iconLogoutDark from '../../assets/images/icon-exit-dark.svg';
import iconLogoutLight from '../../assets/images/icon-exit-light.svg';

export default function Header() {
  const { isSavedNewsPage, userName, isLoggedIn } =
    useContext(CurrentUserContext);
  return (
    <header className={`header ${isSavedNewsPage ? 'header__light' : ''}`}>
      <div className='header__content'>
        <Link className='header__logo' to='/'>
          News Explorer
        </Link>
        <div className='header__link-distributions'>
          <div
            className={`header__link-container ${!isSavedNewsPage ? 'header__link-container-active' : ''}`}
          >
            <Link className='header__link' to='/'>
              Inicio
            </Link>
          </div>
          {isLoggedIn && (
            <div
              className={`header__link-container ${isSavedNewsPage ? 'header__link-container-active-light' : ''}`}
            >
              <Link className='header__link' to='/saved-news'>
                Artículos guardados
              </Link>
            </div>
          )}
          {isLoggedIn ? (
            <button
              className={`header__button ${isSavedNewsPage ? 'header__button-light' : ''}`}
            >
              <span className='header__button-text'>{userName}</span>
              <div className='header__icon-container'>
                {isSavedNewsPage ? (
                  <img src={iconLogoutDark} alt='Icono de cierre de sesión' />
                ) : (
                  <img src={iconLogoutLight} alt='Icono de cierre de sesión' />
                )}
              </div>
            </button>
          ) : (
            <button className='header__button'>Iniciar sesión</button>
          )}
        </div>
      </div>
    </header>
  );
}
