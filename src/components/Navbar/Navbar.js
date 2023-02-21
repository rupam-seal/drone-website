import React from 'react';

export const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-left">
        <div className="logo">ThreeDrone</div>

        <div className="next">
          <i className="fa fa-angle-right"></i>
        </div>
      </div>

      <div className="nav-right">
        <div className="watch">
          <i className="fa fa-caret-right"></i>&nbsp; watch demo
        </div>

        <div className="cart">
          <i className="fa fa-shopping-cart"></i>
        </div>
      </div>
    </div>
  );
};
