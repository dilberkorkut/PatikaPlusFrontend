import React from "react";
import ReceiptContext from "../context/ReceiptContext";
import { useContext } from "react";
import { products } from "../data";
import { useState, useEffect } from "react";

function Receipt() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 0);

    return () => clearInterval(interval);
  }, []);

  let total = 0;

  return (
    <div className="receipt-container">
      <h2>Your Receipt</h2>
      <ul>
        {products.map((product) => {
          if (product.quantity > 0) {
            total += product.price * product.quantity;
            return (
              <li key={product.id}>
                {product.name} x{product.quantity} $
                {product.price * product.quantity}
              </li>
            );
          }
        })}
      </ul>
      <hr />
      <p className="total">TOTAL: ${total}</p>
    </div>
  );
}

export default Receipt;
