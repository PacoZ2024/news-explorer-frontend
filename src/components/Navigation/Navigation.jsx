import { useContext, useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { Squash as Hamburger } from 'hamburger-react';
import iconLogoutDark from '../../assets/images/icon-exit-dark.svg';
import iconLogoutLight from '../../assets/images/icon-exit-light.svg';
import PopupWithForm from '../PopupWithForm/PopupWithForm.jsx';
import Login from '../PopupWithForm/form/Login/Login.jsx';

export default function Navigation({ popup, onOpenPopup, onClosePopup }) {
  const loginPopup = {
    children: (
      <Login
        popup={popup}
        onOpenPopup={onOpenPopup}
        onClosePopup={onClosePopup}
      />
    ),
  };
  const { isLoggedIn, userName } = useContext(CurrentUserContext);
  const [toggledIsOpen, setToggledIsOpen] = useState(false);
  const location = useLocation();
  const wrapperRef = useRef(null);

  function closeToggled() {
    setToggledIsOpen(false);
  }

  useEffect(() => {
    function handleOverlayClick(event) {
      if (
        toggledIsOpen &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        setToggledIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOverlayClick);
    return () => {
      document.removeEventListener('mousedown', handleOverlayClick);
    };
  }, [toggledIsOpen]);

  return (
    <nav>
      <div className='navigation__desktop'>
        <ul className='navigation__link-list'>
          <li
            className={`navigation__link-container ${location.pathname === '/' ? 'navigation__link-container-active' : ''}`}
          >
            <Link className='navigation__link' to='/'>
              Inicio
            </Link>
          </li>

          {isLoggedIn && (
            <li
              className={`navigation__link-container ${location.pathname === '/saved-news' ? 'navigation__link-container-active-light' : ''}`}
            >
              <Link className='navigation__link' to='/saved-news'>
                Artículos guardados
              </Link>
            </li>
          )}
        </ul>

        {isLoggedIn ? (
          <button
            className={`navigation__button ${location.pathname === '/saved-news' ? 'navigation__button-light' : ''}`}
          >
            <span className='navigation__button-text'>{userName}</span>
            <div className='navigation__icon-container'>
              {location.pathname === '/saved-news' ? (
                <img src={iconLogoutDark} alt='Icono de cierre de sesión' />
              ) : (
                <img src={iconLogoutLight} alt='Icono de cierre de sesión' />
              )}
            </div>
          </button>
        ) : (
          <button
            className='navigation__button'
            onClick={() => {
              onOpenPopup(loginPopup);
            }}
          >
            Iniciar sesión
          </button>
        )}
      </div>

      <div className='navigation__mobile'>
        <Hamburger
          size='24'
          toggled={toggledIsOpen}
          toggle={setToggledIsOpen}
        />
        {toggledIsOpen && (
          <ul className='navigation__menu-hamburger' ref={wrapperRef}>
            <li className='navigation__menu-hamburger-link-container'>
              <Link className='navigation__link' to='/' onClick={closeToggled}>
                Inicio
              </Link>
            </li>

            {isLoggedIn ? (
              <>
                <li className='navigation__menu-hamburger-link-container'>
                  <Link
                    className='navigation__link'
                    to='/saved-news'
                    onClick={closeToggled}
                  >
                    Artículos guardados
                  </Link>
                </li>
                <button
                  className='navigation__button'
                  onClick={() => {
                    closeToggled();
                  }}
                >
                  <span className='navigation__button-text'>{userName}</span>
                  <div className='navigation__icon-container'>
                    <img
                      src={iconLogoutLight}
                      alt='Icono de cierre de sesión'
                    />
                  </div>
                </button>
              </>
            ) : (
              <button
                className='navigation__button'
                onClick={() => {
                  onOpenPopup(loginPopup);
                  closeToggled();
                }}
              >
                Iniciar sesión
              </button>
            )}
          </ul>
        )}
      </div>
      {popup && (
        <PopupWithForm onClosePopup={onClosePopup}>
          {popup.children}
        </PopupWithForm>
      )}
    </nav>
  );
}
