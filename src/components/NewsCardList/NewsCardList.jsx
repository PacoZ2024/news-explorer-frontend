import notFound from '../../assets/images/not-found.svg';
import natureNotice from '../../assets/images/nature-notice.jpg';
import lakeNotice from '../../assets/images/lake-notice.jpg';
import parkNotice from '../../assets/images/park-notice.jpg';
import bisonNotice from '../../assets/images/bison-notice.jpg';
import skyNotice from '../../assets/images/sky-notice.jpg';
import NewsCard from '../NewsCard/NewsCard.jsx';

export default function NewsCardList() {
  const value = false;
  const card = {
    image:
      'https://www.amblesideanddistrictu3a.org.uk/file/2021/03/Stump-Grinding.png',
    date: '4 de noviembre de 2020',
    title: 'Todo el mundo necesita un lugar de reflexión en la naturaleza',
    content:
      'Desde que leí el influyente libro de Richard Louv, El último niño en el bosque, la idea de tener un lugar de reflexión especial para mi se me ha quedado grabada. Este consejo, que...',
    source: 'treehugger',
  };
  return (
    <section className='news-card-list'>
      {value ? (
        <div className='news-card-list__not-found-content'>
          <img
            className='news-card-list__not-found-image'
            src={notFound}
            alt='Resultados no encontrados'
          />
          <h2 className='news-card-list__not-found-title'>
            No se ha encontrado nada
          </h2>
          <p className='news-card-list__not-found-message'>
            Lo sentimos, pero no hay nada que coincida con tus términos de
            búsqueda.
          </p>
        </div>
      ) : (
        <div className='news-card-list__card-container'>
          <NewsCard card={card} isLoggedIn={false} />
          <div className='news-card'>
            <div className='news-card__image-container'>
              <img
                className='news-card__image'
                alt='Imagen de la noticia'
                src={natureNotice}
              />
            </div>
            <div className='news-card__info'>
              <p className='news-card__date'>4 de noviembre de 2020</p>
              <h3 className='news-card__title'>
                Todo el mundo necesita un lugar de reflexión en la naturaleza
              </h3>
              <p className='news-card__paragraph'>
                Desde que leí el influyente libro de Richard Louv, "El último
                niño en el bosque", la idea de tener un "lugar de reflexión"
                especial para mi se me ha quedado grabada. Este consejo, que...
              </p>
              <p className='news-card__source'>treehugger</p>
            </div>
          </div>
          <div className='news-card'>
            <div className='news-card__image-container'>
              <img
                className='news-card__image'
                alt='Imagen de la noticia'
                src={lakeNotice}
              />
            </div>
            <div className='news-card__info'>
              <p className='news-card__date'>19 de febrero de 2019</p>
              <h3 className='news-card__title'>La naturaleza te hace mejor</h3>
              <p className='news-card__paragraph'>
                Milenios atrás ya nos percatamos de ello: el sonido del océano,
                los aromas de un bosque, la forma en que la luz del sol moteada
                baila entre las hojas.
              </p>
              <p className='news-card__source'>national geographic</p>
            </div>
          </div>
          <div className='news-card'>
            <div className='news-card__image-container'>
              <img
                className='news-card__image'
                alt='Imagen de la noticia'
                src={parkNotice}
              />
            </div>
            <div className='news-card__info'>
              <p className='news-card__date'>19 de octubre de 2020</p>
              <h3 className='news-card__title'>
                Fotos nostálgicas hechas por turistas en los parques nacionales
                de Estados Unidos
              </h3>
              <p className='news-card__paragraph'>
                Uri Løvevild Golman y Helle Løvevild Golman son exploradores de
                National Geographic y fotógrafos de conservación que acaban de
                completar un proyecto y un libro que llaman su...
              </p>
              <p className='news-card__source'>national geographic</p>
            </div>
          </div>
          <div className='news-card'>
            <div className='news-card__image-container'>
              <img
                className='news-card__image'
                alt='Imagen de la noticia'
                src={bisonNotice}
              />
            </div>
            <div className='news-card__info'>
              <p className='news-card__date'>4 de noviembre de 2020</p>
              <h3 className='news-card__title'>
                El Grand Teton renueva el histórico Camino de la Cresta
              </h3>
              <p className='news-card__paragraph'>
                La unión de los senderos de la Cascada y del Cañón de la Muerte
                en sus picos tuvo lugar el 1 de octubre de 1933, y marcó el
                primer paso en la realización de un plan por el que el...
              </p>
              <p className='news-card__source'>National parks traveler</p>
            </div>
          </div>
          <div className='news-card'>
            <div className='news-card__image-container'>
              <img
                className='news-card__image'
                alt='Imagen de la noticia'
                src={skyNotice}
              />
            </div>
            <div className='news-card__info'>
              <p className='news-card__date'>16 de marzo de 2020</p>
              <h3 className='news-card__title'>
                Los científicos no saben por qué la estrella polar es tan
                extraña
              </h3>
              <p className='news-card__paragraph'>
                Los seres humanos se han basado durante mucho tiempo en el cielo
                estrellado para adentrarse hacia nuevas fronteras, navegar hasta
                el fin del mundo y encontrar el camino de vuelta...
              </p>
              <p className='news-card__source'>treehugger</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
