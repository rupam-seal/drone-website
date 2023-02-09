import React, { useEffect } from 'react';
import Body from './utils/Body';

import { init } from './utils/Drone';

import Footer from './utils/Footer';
import Nav from './utils/Nav';

const App = () => {
  useEffect(() => {
    init();
  }, []);
  return (
    <div class="container">
      <Nav />

      <Body />

      <Footer />
    </div>
  );
};

export default App;
