// App.js

import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Contact from './pages/ContactForm';
import Home from './pages/Home';
import Products from './pages/Products';
import Pets from './pages/Pets';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutUs' element={<AboutUs />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/products' element={<Products />} />
            <Route path='/pets' element={<Pets />} />
          </Routes>



        </div>
       <Footer />
      </BrowserRouter>
    );
  }
}
