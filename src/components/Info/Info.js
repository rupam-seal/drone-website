import React from 'react';
import Color from './Color';
import { Desc } from './Desc';
import { Price } from './Price';
import { Header } from './Header';
import './Info.css';

export const Info = () => {
  return (
    <div className="left__sidebar">
      <Header>Blender Drone</Header>
      <Desc>
        The Drone is made with free open source software blender 3.4. You can
        customize the drone with using below button and change the color of the
        drone to different variation
      </Desc>
      <Color />
      <Price>125</Price>

      <button className="btn">BUY NOW</button>
    </div>
  );
};
