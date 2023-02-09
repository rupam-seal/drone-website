import React from 'react';

const Body = () => {
  return (
    <div className="sidebar">
      <div class="left-sidebar">
        <h1 class="product-title">Blender Drone</h1>

        <p class="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          culpa veniam enim quam, sunt officiis, maiores quod esse molestias a!
        </p>

        <p id="price">Price : USD $999</p>

        <button class="btn">BUY NOW</button>
      </div>
      <div className="middle-sidebar" id="middle-sidebar"></div>
      <div class="right-sidebar">
        <ul>
          <li class="title">Shop</li>
          <li>Drones</li>
          <li>Cameras</li>
          <li>Lenses</li>
          <li>Accessories</li>
          <li>View all</li>
        </ul>
      </div>
    </div>
  );
};

export default Body;
