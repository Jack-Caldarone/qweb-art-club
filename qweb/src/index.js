import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import Home from './Home';
import AboutUs from './AboutUs';
import Events from './Events';
import Gallery from './Gallery';
import Contact from './Contact'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);