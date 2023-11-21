import React, { useState } from 'react';

function AddProduct({ addProduct }) {
 const [productName, setProductName] = useState('');
 const [productPrice, setProductPrice] = useState('');
 const [productDescription, setProductDescription] = useState('');

 const handleAddProduct = () => {
  if (productName && productPrice && productDescription) {
   const newProduct = {
    name: productName,
    price: productPrice,
    description: productDescription,
   };
   addProduct(newProduct);
   setProductName('');
   setProductPrice('');
   setProductDescription('');
  }
 }

 return (
  <div>
   <h2>Add Product</h2>
   <input
    type="text"
    placeholder="Product Name"
    value={productName}
    onChange={(e) => setProductName(e.target.value)}
   />
   <input
    type="text"
    placeholder="Product Price"
    value={productPrice}
    onChange={(e) => setProductPrice(e.target.value)}
   />
   <input
    type="text"
    placeholder="Product Description"
    value={productDescription}
    onChange={(e) => setProductDescription(e.target.value)}
   />
   <button onClick={handleAddProduct}>Add Product</button>
  </div>
 );
}

export default AddProduct;