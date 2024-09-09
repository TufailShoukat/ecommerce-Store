
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './COMPOENTS/ThemeContext'; 


import Products from './COMPOENTS/products'; 

import Home from './COMPOENTS/home'; 
import ProductsDetail from './COMPOENTS/productsDetail';

import Register from './COMPOENTS/Register'; 

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductsDetail />} />
                    <Route path="/Register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
