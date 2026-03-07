import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import iconLogoutDark from '../../assets/images/icon-exit-dark.svg';
import iconLogoutLight from '../../assets/images/icon-exit-light.svg';

export default function Navigation({ onSignIn, onSignOut }) {
  const { isLoggedIn, userName } = useContext(CurrentUserContext);
  const location = useLocation();

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
            onClick={onSignOut}
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
          <button className='navigation__button' onClick={onSignIn}>
            Iniciar sesión
          </button>
        )}
      </div>
    </nav>
  );
}
