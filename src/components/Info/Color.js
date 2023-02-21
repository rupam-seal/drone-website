import React, { createContext, useContext, useState } from 'react';
import { ColorState } from '../../pages/Body';

const Color = () => {
  const { setObjMaterial } = ColorState();

  const toggleColor = (color) => {
    setObjMaterial(color);
  };

  return (
    <div className="color">
      <div
        onClick={() => toggleColor({ r: '255', g: '1', b: '255' })}
        className="color_item"
      >
        <div className="color_value color-1" id="color-1"></div>
      </div>
      <div
        onClick={() => toggleColor({ r: '1', g: '255', b: '255' })}
        className="color_item"
      >
        <div className="color_value color-3" id="color-3"></div>
      </div>
      <div
        onClick={() => toggleColor({ r: '255', g: '255', b: '1' })}
        className="color_item"
      >
        <div className="color_value color-4" id="color-4"></div>
      </div>
    </div>
  );
};

export default Color;
