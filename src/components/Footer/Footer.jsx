import { Link } from 'react-router-dom';
import iconFacebook from '../../assets/images/icon_fb.svg';
import iconGithub from '../../assets/images/icon_github.svg';

export default function Footer() {
  function handleSend() {
    setTimeout(() => {
      document.getElementById('header').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 1000);
  }

  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__content'>
          <p className='footer__copyright'>
            &#169; 2026 Supersite, Powered by News API
          </p>
          <div className='footer__link-content'>
            <div className='footer__link-container'>
              <Link className='footer__link' to='/' onClick={handleSend}>
                Inicio
              </Link>
              <a
                className='footer__link'
                href='https://github.com/PacoZ2024/news-explorer-frontend'
                target='_blank'
              >
                Practicum
              </a>
            </div>
            <div className='footer__icon-container'>
              <a
                className='footer__link-icon'
                href='https://github.com'
                target='_blank'
              >
                <img
                  className='footer__icon'
                  alt='icono GitHub'
                  src={iconGithub}
                />
              </a>
              <a
                className='footer__link-icon'
                href='https://www.facebook.com'
                target='_blank'
              >
                <img
                  className='footer__icon'
                  alt='icono Facebook'
                  src={iconFacebook}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
