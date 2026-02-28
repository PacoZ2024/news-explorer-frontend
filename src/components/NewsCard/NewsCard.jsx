export default function NewsCard(props) {
  const { image, date, title, content, source } = props.card;
  return (
    <div className='news-card'>
      <div className='news-card__image-container'>
        <img
          className='news-card__image'
          alt='Imagen de la noticia'
          src={image}
        />
      </div>
      <div className='news-card__info'>
        <p className='news-card__date'>{date}</p>
        <h3 className='news-card__title'>{title}</h3>
        <p className='news-card__paragraph'>{content}</p>
        <p className='news-card__source'>{source}</p>
      </div>
    </div>
  );
}
