import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { SearchArticleContext } from '../../context/searchArticleContext';
import iconTrash from '../../assets/images/icon-trash.svg';
import iconSaved from '../../assets/images/icon-saved.svg';
import iconSavedActive from '../../assets/images/icon-saved-fill.svg';

export default function NewsCard({ article }) {
  const { isLoggedIn } = useContext(CurrentUserContext);
  const { handleSaveArticle, handleDeleteArticle } =
    useContext(SearchArticleContext);
  const { urlToImage, publishedAt, title, description, source, keyword } =
    article;
  const [showTooltip, setShowTooltip] = useState(false);
  const [messageTooltip, setMessageTooltip] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation();

  function formatDate(dateString) {
    const date = new Date(dateString);
    const months = [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ];
    return `${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`;
  }

  function handleSaveClick() {
    if (!isLoggedIn) {
      setMessageTooltip('Inicia sesión para guardar artículos');
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
      return;
    }

    if (isSaved) {
      setIsSaved(false);
      handleDeleteArticle(article._id);
    } else {
      setIsSaved(true);
      handleSaveArticle(article);
    }
  }

  return (
    <>
      {location.pathname === '/saved-news' && !isSaved ? (
        <></>
      ) : (
        <div className='news-card'>
          <div className='news-card__image-container'>
            {location.pathname === '/saved-news' ? (
              <div className='news-card__keyword'>{keyword}</div>
            ) : (
              <></>
            )}
            <img className='news-card__image' alt={title} src={urlToImage} />
            <div className='news-card__button-container'>
              {location.pathname === '/saved-news' ? (
                <button
                  className='news-card__delete-button'
                  onClick={handleSaveClick}
                  onMouseEnter={() => {
                    setMessageTooltip('Eliminar de artículos guardados');
                    setShowTooltip(true);
                  }}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <img
                    className='news-card__delete-icon'
                    src={iconTrash}
                    alt='Icono para quitar el artículo de guardados'
                  />
                </button>
              ) : (
                <button
                  className='news-card__save-button'
                  onClick={handleSaveClick}
                  onMouseEnter={() => {
                    setMessageTooltip('Inicia sesión para guardar artículos');
                    !isLoggedIn && setShowTooltip(true);
                  }}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  {isSaved && isLoggedIn ? (
                    <img
                      className='news-card__save-icon news-card__save-icon_active'
                      src={iconSavedActive}
                      alt='Icono para indicar que un artículo esta guardado'
                    />
                  ) : (
                    <img
                      className='news-card__save-icon'
                      src={iconSaved}
                      alt='Icono sin rellenar para indicar que un artículo puede ser almacenado'
                    />
                  )}
                </button>
              )}
              {showTooltip && (
                <div className='news-card__tooltip'>{messageTooltip}</div>
              )}
            </div>
          </div>
          <div className='news-card__info'>
            <p className='news-card__date'>{formatDate(publishedAt)}</p>
            <h3 className='news-card__title'>{title}</h3>
            <p className='news-card__paragraph'>{description}</p>
            <p className='news-card__source'>{source.name}</p>
          </div>
        </div>
      )}
    </>
  );
}
