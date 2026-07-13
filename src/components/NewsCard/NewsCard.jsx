import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { SearchArticleContext } from '../../context/searchArticleContext';
import iconTrash from '../../assets/images/icon-trash.svg';
import iconSaved from '../../assets/images/icon-saved.svg';
import iconSavedActive from '../../assets/images/icon-saved-fill.svg';
import articleWithoutImage from '../../assets/images/article-without-image.png';

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
    if (dateString === 'Artículo sin fecha') return 'Artículo sin fecha';
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
        setShowTooltip(false);
        onToggleChange();
      } else {
        handleDeleteArticle(searchToDelete());
        setShowTooltip(false);
        onToggleDelete();
      }
    } else {
      if (findArticleInSaved()) {
        onToggleSave();
      } else {
        const safeTitle = title || 'Artículo sin título';
        const safeDescription = description || 'Artículo sin descripción';
        const safePublishedAt = publishedAt || 'Artículo sin fecha';
        const safeSource = source.name || 'Artículo sin fuente';
        const safeUrl = url || 'https://newsapi.org/';
        const safeUrlToImage =
          urlToImage ||
          'https://libreria.xoc.uam.mx/portadas_art/sinimagen.png';
        handleSaveArticle({
          keyword,
          title: safeTitle,
          description: safeDescription,
          publishedAt: safePublishedAt,
          source: safeSource,
          url: safeUrl,
          urlToImage: safeUrlToImage,
          isSaved: 'true',
        });
        onToggleSave();
      }
    }
  }

  function findArticleInSaved() {
    return savedArticles.some(
      (art) =>
        art.keyword === keyword &&
        (art.title === title || art.title === 'Artículo sin título') &&
        (art.description === description ||
          art.description === 'Artículo sin descripción') &&
        (art.publishedAt === publishedAt ||
          art.publishedAt === 'Artículo sin fecha') &&
        (art.source === source.name || art.source === 'Artículo sin fuente') &&
        (art.url === url || art.url === 'https://newsapi.org/') &&
        (art.urlToImage === urlToImage ||
          art.urlToImage ===
            'https://libreria.xoc.uam.mx/portadas_art/sinimagen.png'),
    );
  }

  function searchToDelete() {
    const articleDelete = savedArticles.find(
      (art) =>
        art.keyword === keyword &&
        (art.title === title || art.title === 'Artículo sin título') &&
        (art.description === description ||
          art.description === 'Artículo sin descripción') &&
        (art.publishedAt === publishedAt ||
          art.publishedAt === 'Artículo sin fecha') &&
        (art.source === source.name || art.source === 'Artículo sin fuente') &&
        (art.url === url || art.url === 'https://newsapi.org/') &&
        (art.urlToImage === urlToImage ||
          art.urlToImage ===
            'https://libreria.xoc.uam.mx/portadas_art/sinimagen.png') &&
        art.isSaved === isSaved,
    );
    return articleDelete._id;
  }

  function handlePointerEnter(e) {
    if (e.pointerType === 'mouse') {
      setShowTooltip(true);
    }
  }

  function handlePointerLeave(e) {
    if (e.pointerType === 'mouse') {
      setShowTooltip(false);
    }
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
            <img
              className='news-card__image'
              alt={title}
              src={urlToImage || articleWithoutImage}
            />
            <div className='news-card__button-container'>
              {location.pathname === '/saved-news' ? (
                <button
                  className='news-card__delete-button'
                  onClick={handleSaveClick}
                  onPointerEnter={(e) => {
                    setMessageTooltip('Eliminar de artículos guardados');
                    handlePointerEnter(e);
                  }}
                  onPointerLeave={handlePointerLeave}
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
            <p className='news-card__date'>
              {formatDate(publishedAt) || 'Artículo sin fecha'}
            </p>
            <h3 className='news-card__title'>
              {title || 'Artículo sin título'}
            </h3>
            <p className='news-card__paragraph'>
              {description || 'Artículo sin descripción'}
            </p>
            <p className='news-card__source'>
              {(location.pathname === '/saved-news' ? source : source.name) ||
                'Artículo sin fuente'}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
