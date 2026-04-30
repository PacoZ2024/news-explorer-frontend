import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { SearchArticleContext } from '../../context/searchArticleContext';
import iconTrash from '../../assets/images/icon-trash.svg';
import iconSaved from '../../assets/images/icon-saved.svg';
import iconSavedActive from '../../assets/images/icon-saved-fill.svg';

export default function NewsCard({
  article,
  onToggleSave,
  onToggleDelete,
  onToggleChange,
}) {
  const { isLoggedIn } = useContext(CurrentUserContext);
  const { handleSaveArticle, handleDeleteArticle, savedArticles } =
    useContext(SearchArticleContext);
  const {
    keyword,
    title,
    description,
    publishedAt,
    source,
    url,
    urlToImage,
    isSaved,
  } = article;
  const [showTooltip, setShowTooltip] = useState(false);
  const [messageTooltip, setMessageTooltip] = useState('');
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

    if (isSaved === 'true') {
      if (article._id) {
        handleDeleteArticle(article._id);
        onToggleChange();
      } else {
        handleDeleteArticle(searchToDelete());
        onToggleDelete();
      }
    } else {
      handleSaveArticle({
        keyword,
        title,
        description,
        publishedAt,
        source: source.name,
        url,
        urlToImage,
        isSaved: 'true',
      });
      onToggleSave();
    }
  }

  function searchToDelete() {
    const articleDelete = savedArticles.find(
      (art) =>
        art.keyword === keyword &&
        art.title === title &&
        art.description === description &&
        art.publishedAt === publishedAt &&
        art.source === source.name &&
        art.url === url &&
        art.urlToImage === urlToImage &&
        art.isSaved === isSaved,
    );
    return articleDelete._id;
  }

  return (
    <>
      {location.pathname === '/saved-news' && isSaved === 'false' ? (
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
                  {isSaved === 'true' && isLoggedIn ? (
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
            <p className='news-card__source'>
              {location.pathname === '/saved-news' ? source : source.name}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
