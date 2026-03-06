import SearchForm from '../SearchForm/SearchForm.jsx';
import About from '../About/About.jsx';
import NewsCardList from '../NewsCardList/NewsCardList.jsx';

export default function Main() {
  return (
    <main className='main'>
      <SearchForm />
      <NewsCardList />
      <About />
    </main>
  );
}
