import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <p>Blender models of mine</p>
      </div>

      <div className="footer__right">
        <ul>
          <li>
            <i className="fa fa-facebook"></i>
          </li>
          <li>
            <i className="fa fa-instagram"></i>
          </li>
          <li>
            <i className="fa fa-twitter"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};
