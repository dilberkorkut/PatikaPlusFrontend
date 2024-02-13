import { useState } from "react";
import "./App.css";
import Balance from "./components/Balance";
import ProductCard from "./components/ProductCard";
import Receipt from "./components/Receipt";
import { products } from "./data";

function App() {
  // const [count, setCount] = useState(0);

  // let totalWorth = numberWithCommas(100000000000);

  // function numberWithCommas(x) {
  //   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // }

  return (
    <>
      <div className="nav">
        <h2>NEAL.FUN</h2>
      </div>
      <div className="profile-container">
        <img src="https://neal.fun/spend/billgates.jpg" alt="Bill Gates" />
        <h2>Spend Bill Gates' Money</h2>
      </div>
      <Balance />
      <ProductCard />
      <Receipt />
    </>
  );
}

export default App;
