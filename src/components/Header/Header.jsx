import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  const location = useLocation();
  return (
    <header
      className={`header ${location.pathname === '/saved-news' ? 'header__light' : ''}`}
    >
      <div className='header__content'>
        <Link className='header__logo' to='/'>
          News Explorer
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
