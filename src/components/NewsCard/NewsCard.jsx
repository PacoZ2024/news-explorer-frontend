import { useState, useContext } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import iconTrash from '../../assets/images/icon-trash.svg';
import iconSaved from '../../assets/images/icon-saved.svg';
import iconSavedActive from '../../assets/images/icon-saved-fill.svg';

export default function NewsCard({
  article,
  onSaveArticle,
  onDeleteArticle,
  isSaved,
}) {
  const { isSavedNewsPage, isLoggedIn } = useContext(CurrentUserContext);
  const { image, date, title, content, source, keyword } = article;
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
      onDeleteArticle(article);
    } else {
      onSaveArticle(article);
    }
  }

  return (
    <div className='news-card'>
      <div className='news-card__image-container'>
        {isSavedNewsPage ? (
          <div className='news-card__keyword'>{keyword}</div>
        ) : (
          <></>
        )}
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
                isSaved && isLoggedIn && setShowTooltip(true);
              }}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <img className='news-card__delete-icon' src={iconTrash} />
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
                />
              ) : (
                <img className='news-card__save-icon' src={iconSaved} />
              )}
            </button>
          )}
          {showTooltip && (
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
