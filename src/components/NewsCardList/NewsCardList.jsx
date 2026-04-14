import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchArticleContext } from '../../context/searchArticleContext.js';
import notFound from '../../assets/images/not-found.svg';
import NewsCard from '../NewsCard/NewsCard.jsx';

export default function NewsCardList() {
  const { searchResults, savedArticles } = useContext(SearchArticleContext);
  const [visibleCards, setVisibleCards] = useState(3);
  const location = useLocation();

  function handleShowMore() {
    setVisibleCards((prev) => prev + 3);
  }

  const articlesToShow =
    location.pathname === '/saved-news'
      ? savedArticles
      : searchResults.slice(0, visibleCards);

  const showMoreButton =
    location.pathname === '/' && visibleCards < searchResults.length;

  return (
    <section className='news-card-list' id='search-results'>
      {location.pathname === '/' && searchResults.length == 0 ? (
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
        <>
          {location.pathname === '/' ? (
            <h2 className='news-card-list__title'>Resultados de la búsqueda</h2>
          ) : (
            <></>
          )}
          <div className='news-card-list__card-container'>
            {articlesToShow.map((card, index) => (
              <NewsCard key={`${card.url}-${index}`} article={card} />
            ))}
          </div>
          {showMoreButton && (
            <div className='news-card-list__button-container'>
              <button
                className='news-card-list__button'
                onClick={handleShowMore}
              >
                Ver más
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
