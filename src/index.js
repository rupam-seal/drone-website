import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Body from './pages/Body';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <Navbar />
    <Body />
    <Footer />
  </div>
);
