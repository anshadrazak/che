import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import './App.css';
import { Link } from 'react-router-dom';
import Content from './Content';
import What from './What';
import Innovation from './Innovation';
import Future from './Future';

const App = () => {
  return (
    <Router>
      <div className='mnhd'>
      <nav>
        <ul>
          <li><Link className='hding4' to="/">Home</Link></li>
          <li><Link className='hding4' to="/about">About</Link></li>
          <li><Link className='hding4' to="/services">Services</Link></li>
          <li><Link className='hding4' to="/contact">Contact</Link></li>
        </ul>
      </nav>
      </div>
      
      
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/what' element={<What/>}/>
        <Route path='/innovation' element={<Innovation/>}/>
        <Route path='/future' element={<Future/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
