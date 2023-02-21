import React from 'react';
import Color from './Color';

export const Info = () => {
  return (
    <div className="left-sidebar">
      <h1 className="product-title">Blender Drone</h1>

      <p className="desc">
        The Drone is made with free open source software blender 3.4. You can
        customize the drone with using below button and change the color of the
        drone to different variation
      </p>

      <Color />

      <p id="price">Price : USD $001</p>

      <button className="btn">BUY NOW</button>
    </div>
  );
};
