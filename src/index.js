import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './context/cart_context.js';
import { FilterContextProvider } from './context/filter_context.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FilterContextProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </FilterContextProvider>
);
