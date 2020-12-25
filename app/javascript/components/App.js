import React from 'react';
import Sections from './sections/Sections';
import Footer from './footer/Footer';
import Products from './products/Products';
import WhatIsUntitled from './what-is-untitled/What-is-untitled';
import Header from './header/Header';
import Navigation from './navigation/Navigation';
import '../styles/main.scss';
import '../styles/general.scss';

const App = () => {
  return(
    <div className="app-container">
      <Navigation />
      <Header />
      <Products />
      <Sections />
      <WhatIsUntitled />
      <Footer />
    </div>
  );
};

export default App;
