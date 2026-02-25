import backgroundSearch from '../../assets/images/background-search.jpg';

export default function SearchForm() {
  return (
    <div className='searchform'>
      <div className='searchform__image-container'>
        <img
          className='searchform__image'
          alt='Imagen de fondo para formulario de búsqueda'
          src={backgroundSearch}
        />
      </div>
      <h1 className='searchform__title'>¿Qué está pasando en el mundo?</h1>
      <p className='searchform__paragraph'>
        Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu
        cuenta personal.
      </p>
      <form className='searchform__form'>
        <div className='searchform__form-container'>
          <input
            type='text'
            className='searchform__form-input'
            placeholder='Introduce un tema'
            required
          />
          <button type='submit' className='searchform__button'>
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
}
