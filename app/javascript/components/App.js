import React from 'react';
import Sections from './sections/Sections';
import WhatIsUntitled from './what-is-untitled/What-is-untitled';
import '../styles/main.scss';
import '../styles/general.scss';

const App = () => {
  return(
    <div>
      <Sections />
      <WhatIsUntitled />
    </div>
  );
};

export default App;
