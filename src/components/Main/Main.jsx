import { useContext } from 'react';
import { SearchArticleContext } from '../../context/searchArticleContext.js';
import SearchForm from '../SearchForm/SearchForm.jsx';
import About from '../About/About.jsx';
import NewsCardList from '../NewsCardList/NewsCardList.jsx';
import Preloader from '../Preloader/Preloader.jsx';

export default function Main() {
  const { isLoading, hasSearched } = useContext(SearchArticleContext);
  return (
    <main className='main'>
      <SearchForm />
      {isLoading && <Preloader />}
      {hasSearched && !isLoading && <NewsCardList />}
      <About />
    </main>
  );
}
