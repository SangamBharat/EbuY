import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductComp/ProductDetails";
import Cart from "./components/ProductComp/Cart";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/Products"/> }/>
          <Route path="/Products" element={<Products/>} />
          <Route path="/ProductDetails/:id" element={<ProductDetails />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>  
    </div>
  );
}

export default App;
