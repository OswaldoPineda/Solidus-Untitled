import React from 'react';
import './what-is-untitled.scss';

const WhatIsUntitled = () => {
  return (
    <section className='what-is-untitled'>
      <h1 className='what-is-untitled__title'> ¿Que es untitled? </h1>
      <div className='about-container'>
        <img className='about-container__image' src='https://cdn.shopify.com/s/files/1/0258/2999/8641/files/que-es-untitled.png' alt='Equipo Untitled'></img>
        <p className='about-container__text'>Untitled es un colectivo que impulsa a artistas locales que buscan promover y expandir su trabajo a través de la creación de productos textiles con diseños colaborativos entre nuestra firma y la de los artistas.<br /><br />Fundada desde las costas de Colima, UNTITLED a sido creada por la pasión al arte,para apoyar la cultura del estado por medio de creacion y difusion de espacios donde los artistas puedan presentar su trabajo y hacerlo crecer. Diseñando prendas de calidad, espacios únicos y colaboraciones sólidas.
        </p>
      </div>
    </section>
  );
};

export default WhatIsUntitled;
