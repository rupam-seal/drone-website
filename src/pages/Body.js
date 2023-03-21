import React from 'react';
import Divider from '../components/Divider/Divider';
import { Object } from '../components/Object';
import { Info } from '../components/Info';
import { Shop } from '../components/Shop';

import './Body.css';

const Body = () => {
  return (
    <div className="sidebar">
      <Info />
      <Divider />
      <Object />
      <Shop />
    </div>
  );
};

export default Body;
