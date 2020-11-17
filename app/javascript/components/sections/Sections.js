import React, { useState, useEffect } from 'react';
import Section from './Section';
import './sections.scss';

const Sections = () => {
  const [taxonomies, setTaxonomies] = useState([]);

  useEffect(() => {
    getTaxonomies();
  }, []);

  const getTaxonomies = () => {
    fetch('/solidus/api/taxonomies.json?page=1&per_page=2', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer 75be11a6e0d07b836aa2621c65f8936706499db21f0d0e5f',
        'Content-Type': 'application/json'
      }
    })
    .then(data => data.json())
    .then(data => {
      const arrayTaxonomies = data.taxonomies[0].root.taxons;
      setTaxonomies(arrayTaxonomies);
    }).catch((err) => {
      console.error(err);
    });
  };

  return(
    <section className="taxonomies-container">
      <h1 className="taxonomies-container__title">Categorías</h1>
      <div className="cards-container">
        {
          taxonomies.map((taxonomy) => <Section taxon={taxonomy}/>)
        }
      </div>
    </section>
  );
};

export default Sections;
