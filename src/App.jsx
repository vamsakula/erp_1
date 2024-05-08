import './App.css';

import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Sidebar from './component/sidebar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/AboutUs';
import Product from './pages/Product';
import OrdersManagement from './pages/Order';
import OrdersCalendarView from './pages/OrdersCalendarView';
import background from '../public/background.jpg';



function App() {
  return (
    <div style={{backgroundImage: `url(${background})`}}>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element = {<Home/>} ></Route>
      <Route path='/product' exact element = {<Product/>} ></Route>
      <Route path='/order' exact element = {<OrdersManagement/>} ></Route>
      <Route path='/ordercal' exact element = {<OrdersCalendarView/>} ></Route>
      <Route path='/contact' exact element = {<Contact/>} ></Route>
      <Route path='/about' exact element = {<About/>} ></Route>

    </Routes>
    </BrowserRouter>
    </div>
      
   
  );  
}

export default App;
