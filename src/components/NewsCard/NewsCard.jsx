import natureNotice from '../../assets/images/nature-notice.jpg';

export default function NewsCard() {
  return (
    <div className='news-card'>
      <div className='news-card__image-container'>
        <img
          className='news-card__image'
          alt='Noticia de naturaleza'
          src={natureNotice}
        />
      </div>
      <div className='news-card__info'>
        <p className='news-card__date'>4 de noviembre de 2020</p>
        <h3 className='news-card__title'>
          Todo el mundo necesita un lugar de reflexión en la naturaleza.
        </h3>
        <p className='news-card__paragraph'>
          Desde que leí el influyente libro de Richard Louv, "El último niño en
          el bosque", la idea de tener un "lugar de reflexión" especial para mi
          se me ha quedado grabada. Este consejo, que...
        </p>
        <p className='news-card__source'>treehugger</p>
      </div>
    </div>
  );
}
