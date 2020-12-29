import React from 'react';
import './menu';

const Menu = ({extraClass, setMenuClass}) => {
  return (
    <div className={`menu ${extraClass}`} >
      <div className="menu-header">
        <img className="menu-header__logo" src="https://cdn.shopify.com/s/files/1/0258/2999/8641/files/footer-logo-new.png"/>
        <img className="menu-header__close"
             src="https://cdn.shopify.com/s/files/1/0258/2999/8641/files/close.svg"
             onClick={() => setMenuClass('')} />
      </div>

      <ul className="menu-categories">
        <li> <a href="#" >Untitled</a></li>
        <li> <a href="#" >Colaboradores</a></li>
        <li> <a href="#" >Accesorios</a></li>
        <li> <a href="#" >Cubrebocas</a></li>
      </ul>
      <div className="menu-footer">
        <h3 className= 'menu-footer__slogan'>BE THE TITLE</h3>
        <div className="menu-footer-icons">
         <a href="https://www.facebook.com/Untitled.Mex/" target="_blank">
          <img className='menu-footer__facebook' src="https://cdn.shopify.com/s/files/1/0258/2999/8641/files/facebook-icon.svg" />
         </a>
         <a href="https://www.instagram.com/untitled.mex/" target="_blank">
          <img className='menu-footer__instagram' src="https://cdn.shopify.com/s/files/1/0258/2999/8641/files/instagram-icon.svg" />
         </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
