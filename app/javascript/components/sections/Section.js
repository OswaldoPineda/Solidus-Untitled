import React from 'react';
import './section.scss';

const Section = (props) => {
  return(
    <a href={props.taxon.permalink} target="_blank" className='taxonomy'> 
      <h1 className='taxonomy__title'>{props.taxon.name}</h1>
    </a>
  );
};

export default Section;
