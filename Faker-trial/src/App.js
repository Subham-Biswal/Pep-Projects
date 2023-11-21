import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import AddProduct from './AddProduct';

function App() {
 const [products, setProducts] = useState([]);
 const [darkMode, setDarkMode] = useState(false);
 const [showAddProduct, setShowAddProduct] = useState(false);

 useEffect(() => {
  // Fetch products from the Faker.js API
  axios.get('https://fakerapi.it/api/v1/products')
   .then(response => {
    setProducts(response.data.data);
   })
   .catch(error => {
    console.error('Error fetching products:', error);
   });
 }, []);

 const toggleDarkMode = () => {
  setDarkMode(!darkMode);
 };

 const addProductToDatabase = (newProduct) => {
  setProducts([...products, newProduct]);
  setShowAddProduct(false);
 };

 return (
  <div className={`App ${darkMode ? 'dark' : ''}`}>
   <div className="header">
    <h1>Product Inventory</h1>
    <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    <button onClick={() => setShowAddProduct(!showAddProduct)}>
     {showAddProduct ? 'Close Form' : 'Add Product'}
    </button>
   </div>

   {showAddProduct ? (
    <AddProduct addProduct={addProductToDatabase} />
   ) : (
    <div className="product-list">
     {products.map(product => (
      <div key={product.id} className="product">
       <h3>{product.name}</h3>
       <p>Price: ${product.price}</p>
       <p>Description: {product.description}</p>
      </div>
     ))}
    </div>
   )}
  </div>
 );
}

export default App;