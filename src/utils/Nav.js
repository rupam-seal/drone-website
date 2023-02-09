import React from 'react';

const Nav = () => {
  return (
    <div class="nav">
      <div className="nav-left">
        <div class="logo">ThreeDrone</div>

        <div class="next">
          <i class="fa fa-angle-right"></i>
        </div>
      </div>

      <div className="nav-right">
        <div class="watch">
          <i class="fa fa-caret-right"></i>&nbsp; watch demo
        </div>

        <div class="cart">
          <i class="fa fa-shopping-cart"></i>
        </div>
      </div>
    </div>
  );
};

export default Nav;
