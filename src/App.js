import React, { useState } from "react";
import "./App.css";
import GooglePayButton from "./GpayBtn";
import productsData from "./data";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="App">
      <div className="head">
        <p style={{color:"red",textAlign:"center"}}>Added to cart: {cartItems.length}</p>
        <p style={{color:"red",textAlign:"center"}}>Total amount in USD: {calculateTotal()} USD</p>
        {calculateTotal() > 0 ? <GooglePayButton /> : null}
      </div>
      <header className="App-header">
        <h1 style={{color:"green", fontSize:"50px"}}>Movies collection to purchase</h1>
      </header>
      <main>
        {productsData.map((product) => (
          <div key={product.id} className="product">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details">
              <h2  style={{color:"blue"}}><span style={{color:"red"}}>Movie:</span> {product.name}</h2>
              <p> <span style={{color:"blue"}}>Description:</span> {product.description}</p>
              <p className="price"> <span style={{color:"blue"}}>Dollar:</span>{product.price} $</p>
              <p className="rating"> <span style={{color:"blue"}}>IMDB Ratings:</span>{product.imdb}</p>
              <button onClick={() => addToCart(product)}>Add To Cart</button>
              <button onClick={() => removeFromCart(product)}>
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
