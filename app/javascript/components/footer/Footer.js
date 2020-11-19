import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <section className='content'>
        <div className='content__desktop'>
        <a className='footer__logo-anchor' href='#'>
          <img className='footer__logo'
          src='https://cdn.shopify.com/s/files/1/0258/2999/8641/files/footer-logo-new.png'
          alt='untitled logo'/>
        </a>
          <article className ='footer__information'>
          <h1 className="footer__information-heading">Information</h1>
            <ul className='footer__information-list-father'>
              <li className='footer__information-list-child'>
                <a className='link' href='#'>New Products</a>
              </li>
              <li className='footer__information-list-child'>
                <a href='#'>Categories</a>
              </li>
              <li className='footer__information-list-child'>
                <a href='#'>The most sold</a>
              </li>
              <li className='footer__information-list-child'>
                <a href='#'>What is untitled?</a>
              </li>
            </ul>
          </article>
          <article className='footer__contact'>
          <h1 className='footer__contact-heading'>Contact US</h1>
            <ul className='footer__contact-list-father'>
              <li className='footer__contact-list-child'>
                <a href="tel:+523141422886">+52(314)-142-28-86</a>
              </li>
              <li className='footer__contact-list-child'>
                <a>Manzanillo, Colima</a>
              </li>
              <li className='footer__contact-list-child'>
                <a href="mailto:untitledclothes@gmail.com">Untitledclothes@gmail.com</a>
              </li>
            </ul>
          </article>
        </div>
        <ul className='footer__social-media'>
          <li>
            <a href="https://www.facebook.com/Untitled.Mex/" target="_blank">
              <img className='icon' src="https://cdn.shopify.com/s/files/1/0258/2999/8641/files/facebook-icon.svg" alt ='Facabook Icon'></img>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/untitled.mex/" target="_blank">
              <img className='icon' src="//cdn.shopify.com/s/files/1/0258/2999/8641/t/8/assets/instagram-icon.svg" alt="Instagram icon"></img>
            </a>
          </li>
        </ul>
        <label class="footer__copyright">© Todos los Derechos Reservados UNTITLƎD</label>
      </section>
    </footer>)
};

export default Footer;
