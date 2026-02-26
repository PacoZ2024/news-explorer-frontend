import backgroundSearch from '../../assets/images/background-search.jpg';

export default function SearchForm() {
  return (
    <div className='search-form'>
      <div className='search-form__image-container'>
        <img
          className='search-form__image'
          alt='Imagen de fondo para formulario de búsqueda'
          src={backgroundSearch}
        />
      </div>
      <h1 className='search-form__title'>¿Qué está pasando en el mundo?</h1>
      <p className='search-form__paragraph'>
        Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu
        cuenta personal.
      </p>
      <form className='search-form__form'>
        <div className='search-form__form-container'>
          <input
            type='text'
            className='search-form__form-input'
            placeholder='Introduce un tema'
            required
          />
          <button type='submit' className='search-form__button'>
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
}
