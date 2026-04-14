import aboutAuthor from '../../assets/images/about-author.jpg';

export default function About() {
  return (
    <section className='about'>
      <div className='about__container'>
        <div className='about__content'>
          <img
            className='about__image'
            alt='Imagen del autor'
            src={aboutAuthor}
          />
          <div className='about__info-container'>
            <h2 className='about__title'>Acerca del autor</h2>
            <p className='about__paragraph'>
              Este bloque describe al autor del proyecto. Aquí debe indicar tu
              nombre, a qué te dedicas y qué tecnologías de desarrollo conoces.
            </p>
            <p className='about__paragraph'>
              También puedes hablar de tu experiencia con Practicum, de lo que
              aprendiste allí y de cómo puedes ayudar a los clientes
              potenciales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
