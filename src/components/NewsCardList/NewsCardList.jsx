import notFound from '../../assets/images/not-found.svg';
import NewsCard from '../NewsCard/NewsCard.jsx';

export default function NewsCardList() {
  const value = false;
  return (
    <section className='news-card-list'>
      {value ? (
        <div className='news-card-list__not-found-content'>
          <img
            className='news-card-list__not-found-image'
            src={notFound}
            alt='Resultados no encontrados'
          />
          <h2 className='news-card-list__not-found-title'>
            No se ha encontrado nada
          </h2>
          <p className='news-card-list__not-found-message'>
            Lo sentimos, pero no hay nada que coincida con tus términos de
            búsqueda.
          </p>
        </div>
      ) : (
        <NewsCard />
      )}
    </section>
  );
}
