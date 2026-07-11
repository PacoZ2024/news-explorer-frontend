import { Link } from 'react-router-dom';
import iconLinkedin from '../../assets/images/icon_linkedin.svg';
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
                href='https://pacoz2024.github.io/portafolio'
                target='_blank'
              >
                Portafolio
              </a>
            </div>
            <div className='footer__icon-container'>
              <a
                className='footer__link-icon'
                href='https://github.com/PacoZ2024'
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
                href='https://linkedin.com/in/fcozepedadev'
                target='_blank'
              >
                <img
                  className='footer__icon'
                  alt='icono Facebook'
                  src={iconLinkedin}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
