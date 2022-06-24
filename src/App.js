import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigatoin";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Cart from './components/shop/cart/Cart';
import Checkout from "./components/checkout/Checkout";
import './App.css';

const App = () => {


  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;


