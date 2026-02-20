import './Preloader.css';

export default function Preloader() {
  return (
    <div className='preloader'>
      <div className='preloader__container'>
        <span className='preloader__round'></span>
        <p className='preloader__text'>Buscando noticias...</p>
      </div>
    </div>
  );
}
