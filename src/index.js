import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ShoppingList from './components/ShoppingList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ShoppingList />
  </React.StrictMode>
);
