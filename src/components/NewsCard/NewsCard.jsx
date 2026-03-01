import iconTrash from '../../assets/images/icon-trash.svg';
import { useState } from 'react';

export default function NewsCard(
  props,
  onSaveArticle,
  onDeleteArticle,
  isSaved,
  isLoggedIn,
  isSavedNewsPage = false,
) {
  const { image, date, title, content, source } = props.card;
  const [showTooltip, setShowTooltip] = useState(false);
  const [messageTooltip, setMessageTooltip] = useState('');

  function handleSaveClick() {
    if (!isLoggedIn) {
      setMessageTooltip('Inicia sesión para guardar artículos');
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
      return;
    }

    if (isSaved) {
      onDeleteArticle(props.card);
    } else {
      onSaveArticle(props.card);
    }
  }

  return (
    <div className='news-card'>
      <div className='news-card__image-container'>
        <img
          className='news-card__image'
          alt='Imagen de la noticia'
          src={image}
        />
        <div className='news-card__button-container'>
          {isSavedNewsPage ? (
            <button
              className='news-card__delete-button'
              onClick={handleSaveClick}
              onMouseEnter={() => {
                setMessageTooltip('Eliminar de artículos guardados');
                !isLoggedIn && setShowTooltip(true);
              }}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <img className='news-card__delete-icon' src={iconTrash} />
            </button>
          ) : (
            <button
              className={`news-cardsave-button ${isSaved ? 'news-cardsave-button_active' : ''}`}
              onClick={handleSaveClick}
              onMouseEnter={() => {
                setMessageTooltip('Inicia sesión para guardar artículos');
                !isLoggedIn && setShowTooltip(true);
              }}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <i className='news-cardsave-icon'></i>
            </button>
          )}
          {showTooltip && !isLoggedIn && (
            <div className='news-card__tooltip'>{messageTooltip}</div>
          )}
        </div>
      </div>
      <div className='news-card__info'>
        <p className='news-card__date'>{date}</p>
        <h3 className='news-card__title'>{title}</h3>
        <p className='news-card__paragraph'>{content}</p>
        <p className='news-card__source'>{source}</p>
      </div>
    </div>
  );
}
