import React from 'react';
import Sections from './sections/Sections';
import Footer from './footer/Footer';
import WhatIsUntitled from './what-is-untitled/What-is-untitled';
import '../styles/main.scss';
import '../styles/general.scss';

const App = () => {
  return(
    <div>
      <Sections />
      <WhatIsUntitled />
      <Footer />
    </div>
  );
};

export default App;
