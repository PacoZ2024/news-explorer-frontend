import { useContext } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { SearchArticleContext } from '../../context/searchArticleContext';

export default function SavedNewsHeader() {
  const { userName } = useContext(CurrentUserContext);
  const { savedArticles } = useContext(SearchArticleContext);
  const numberOfArticlesSaved = savedArticles.length;
  const listOfKeywords = [];

  function addListKeywords(savedArticle) {
    const keywordIndexToUpdate = listOfKeywords.findIndex(
      (item) => item.keyword === savedArticle.keyword,
    );
    if (keywordIndexToUpdate >= 0) {
      listOfKeywords[keywordIndexToUpdate] = {
        keyword: savedArticle.keyword,
        number: listOfKeywords[keywordIndexToUpdate].number + 1,
      };
    } else {
      listOfKeywords.push({ keyword: savedArticle.keyword, number: 1 });
    }
  }

  savedArticles.forEach((art) => addListKeywords(art));

  function printListOfKeywords() {
    const listSort = [...listOfKeywords].sort((a, b) => b.number - a.number);
    const keywordListLength = listSort.length;
    let results = '';
    if (keywordListLength <= 3) {
      listSort.forEach((item) => {
        results = results + item.keyword + ', ';
      });
      return results.slice(0, -2);
    } else {
      results =
        listSort[0].keyword +
        ', ' +
        listSort[1].keyword +
        ' y ' +
        (keywordListLength - 2) +
        ' más';
      return results;
    }
  }

  return (
    <section className='saved-news-header'>
      <p className='saved-news-header__section'>Artículos guardados</p>
      <h1 className='saved-news-header__title'>
        <span className='saved-news-header__username'>{userName}</span>, tienes{' '}
        {numberOfArticlesSaved}{' '}
        {numberOfArticlesSaved === 1
          ? 'artículo guardado'
          : 'artículos guardados'}
      </h1>
      <div className='saved-news-header__themes'>
        {numberOfArticlesSaved === 0 ? (
          <></>
        ) : (
          <p className='saved-news-header__results-themes'>
            Por palabras clave: <b>{printListOfKeywords()}</b>
          </p>
        )}
      </div>
    </section>
  );
}
