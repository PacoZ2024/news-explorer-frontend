import backgroundSearch from '../../assets/images/background-search.jpg';
import { useContext } from 'react';
import { SearchArticleContext } from '../../context/searchArticleContext';

export default function SearchForm() {
  const {
    searchError,
    handleSearch,
    searchKeyword,
    setSearchKeyword,
    setSearchError,
  } = useContext(SearchArticleContext);

  function handleSearchChange(event) {
    setSearchKeyword(event.target.value);
    setSearchError('');
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleSearch(searchKeyword);
    setTimeout(() => {
      if (searchKeyword) {
        document.getElementById('search-results').scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 1000);
  }

  return (
    <section className='search-form'>
      <div className='search-form__image-container'>
        <img
          className='search-form__image'
          alt='Imagen de fondo para formulario de búsqueda'
          src={backgroundSearch}
        />
      </div>
      <h1 className='search-form__title'>
        ¿Qué está pasando
        <br />
        en el mundo?
      </h1>
      <p className='search-form__paragraph'>
        Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu
        cuenta personal.
      </p>
      <form className='search-form__form' id='search-form'>
        <div className='search-form__form-container'>
          <input
            id='search'
            name='search'
            type='text'
            className='search-form__form-input'
            placeholder='Introduce un tema'
            value={searchKeyword}
            onChange={handleSearchChange}
            required
          />
          <button
            type='submit'
            className='search-form__button'
            onClick={handleSubmit}
          >
            Buscar
          </button>
        </div>
        <span className='search-form__span-error'>{searchError}</span>
      </form>
    </section>
  );
}
