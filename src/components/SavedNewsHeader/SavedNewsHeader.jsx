import { useContext } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { SearchArticleContext } from '../../context/searchArticleContext';

export default function SavedNewsHeader() {
  const { userName } = useContext(CurrentUserContext);
  const { savedArticles } = useContext(SearchArticleContext);
  return (
    <section className='saved-news-header'>
      <p className='saved-news-header__section'>Artículos guardados</p>
      <h1 className='saved-news-header__title'>
        <span className='saved-news-header__username'>{userName}</span>, tienes{' '}
        {savedArticles.length} artículos guardados
      </h1>
      <p className='saved-news-header__themes'>
        Por palabras clave: <b>Naturaleza, Yellowstone, y 2 más</b>
      </p>
    </section>
  );
}
