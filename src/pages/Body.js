import React, { createContext, useContext, useEffect, useState } from 'react';
import Divider from '../components/Divider/Divider';
import { Object } from '../components/Object/tests';
import { Info } from '../components/Info';
import { Shop } from '../components/Shop';

const ColorContext = createContext();
const { Provider } = ColorContext;

const Body = () => {
  const [objMaterial, setObjMaterial] = useState({ r: '', g: '', b: '' });
  const value = {
    objMaterial,
    setObjMaterial,
  };

  console.log(objMaterial);

  return (
    <Provider value={value}>
      <div className="sidebar">
        <Info />
        <Divider />
        <Object />
        <Shop />
      </div>
    </Provider>
  );
};

export default Body;

export const ColorState = () => {
  return useContext(ColorContext);
};
