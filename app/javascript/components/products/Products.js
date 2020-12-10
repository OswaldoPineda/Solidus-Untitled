import React, { useState, useEffect } from 'react';
import CardProduct from './CardProduct';
import './products.scss';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch('/solidus/api/products.json?page=1&per_page=6', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer 75be11a6e0d07b836aa2621c65f8936706499db21f0d0e5f',
        'Content-Type': 'application/json'
      }
    })
    .then(data => data.json())
    .then(data => {
      setProducts(data.products);
    }).catch((err) => {
      console.error(err);
    });
  };

  return(
    <section className="products-section">
      <div className="products-header">
        <h1 className="products-header__title">Productos Nuevos</h1>
        <span className="products-header__subtitle">Ver mas</span>
      </div>
      <div className="cards-container">
        { products.map((product) => <CardProduct product={product} />) }
      </div>
    </section>
  );
};

export default Products;
