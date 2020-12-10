import React from 'react';
import './cardProduct.scss';

const CardProduct = ({ product }) => {
  return (
    <div className="card-product">
      <div className="card-product__image"></div>
      <div className="card-info">
        <h3 className="card-info__title">{product.name}</h3>
        <span className="card-info__subtitle">Untitled</span>
        <span className="card-info__price">{product.display_price}</span>
        <button className="card-info__button" type="button">Añadir al carrito</button>
      </div>
    </div>
  );
};

export default CardProduct;
