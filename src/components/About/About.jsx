import aboutAuthor from '../../assets/images/photo-author.jpg';

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
              ¡Hola! Soy <b>Francisco Zepeda</b>. Estudié la licenciatura en
              Ciencias de la Computación y, recientemente, decidí especializarme
              como desarrollador web Full Stack.
            </p>
            <p className='about__paragraph'>
              Me apasiona transformar ideas complejas en aplicaciones web
              modernas, rápidas y fluidas. Para lograrlo, mis herramientas
              principales son: <b>React</b>, <b>Node.js</b> y <b>JavaScript</b>.
            </p>
            <p className='about__paragraph'>
              Este sitio web es el resultado de mi formación intensiva en
              <b> TripleTen</b>, un espacio donde perfeccioné el arte de
              construir aplicaciones robustas, responsivas y completamente desde
              cero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
