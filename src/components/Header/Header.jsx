import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

export default function Header({ popup, onOpenPopup, onClosePopup }) {
  const location = useLocation();
  return (
    <header
      className={`header ${location.pathname === '/saved-news' ? 'header__light' : ''}`}
      id='header'
    >
      <div className='header__container'>
        <div className='header__content'>
          <Link className='header__logo' to='/'>
            News Explorer
          </Link>
          <Navigation
            popup={popup}
            onOpenPopup={onOpenPopup}
            onClosePopup={onClosePopup}
          />
        </div>
      </div>
    </header>
  );
}
