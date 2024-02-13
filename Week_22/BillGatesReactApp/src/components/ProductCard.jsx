import React from "react";
import { useState } from "react";
import { products } from "../data";
import { useContext } from 'react';
import { receiptContext } from '../context/ReceiptContext';

import "../App.css";


function ProductCard() {

  let {balance, setBalance} = useContext(receiptContext);

  const data = useContext( receiptContext )
  console.log(data);
  
  return (
    <div className="card-container">
      {products.map((product, index) => {
        const [quantity, setQuantity] = useState(0);

        const handleClickSell = () => {
          if (quantity > 0) {
            setBalance(balance+product.price);
            setQuantity(quantity - 1);
            product.quantity -= 1;
          }
        };

        const handleClickBuy = () => {
          setBalance(balance-product.price);
          setQuantity(quantity + 1);
          product.quantity += 1;
        };

        return (
          <div key={index} className="product-card">
            <img src={product.image} alt="product-image" />
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <div className="shop-buttons">
              <button onClick={handleClickSell} id="sell-button">
                Sell
              </button>
              <input className="shop-input" type="text" value={quantity} />

              <button onClick={handleClickBuy} id="buy-button">
                Buy
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );

  // //-------------------------------------------------
//   const [quantity, setQuantity] = useState(0);
  
//   const handleClickSell = () => {
//     if(quantity>0) {
//       setQuantity(quantity-1);
//     }
//   }

//   const handleClickBuy = () => {
//     setQuantity(quantity+1);
//   }
// //---------------------------------------------------

//   return ( 
//     <div className="card-container">
//     {products.map((product, index) => (
//       <div key={index} className="product-card">
//             <img src={product.image} alt="product-image" />
//             <h4>{product.name}</h4>
//             <p>${product.price}</p>
//             <div className="shop-buttons">
//               <button onClick={handleClickSell} id="sell-button">
//                 Sell
//               </button>
//               <input className="shop-input" type="text" value={quantity}   />

//               <button onClick={handleClickBuy} id="buy-button">
//                 Buy
//               </button>
//             </div>
//           </div>
//     ))}
//     </div>
//     )



}

export default ProductCard;
