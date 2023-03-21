import React from 'react';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav__left">
        <div className="logo">ThreeD</div>

        <div className="next">
          <i className="fa fa-angle-right"></i>
        </div>
      </div>

      <div className="nav__right">
        <div className="watch">
          <i className="fa fa-caret-right"></i>&nbsp; watch demo
        </div>

        <div className="cart">
          <i className="fa fa-shopping-cart"></i>
        </div>
      </div>
      <i className="fa fa-play"></i>
    </div>
  );
};
