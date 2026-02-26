import SearchForm from '../SearchForm/SearchForm.jsx';
import About from '../About/About.jsx';
import Preloader from '../Preloader/Preloader.jsx';

export default function Main() {
  return (
    <main className='main'>
      <SearchForm />
      <Preloader />
      <About />
    </main>
  );
}
