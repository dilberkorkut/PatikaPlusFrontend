import { createContext } from "react";
import { useState } from "react";

export const receiptContext = createContext(); //yeni database

function ReceiptContext({ children }) {
  const [balance, setBalance] = useState(100000000000);
  const [receipt, setReceipt] = useState([]);

  const data = {
    balance,
    setBalance,
    receipt,
    setReceipt,
  };

  return (
    <receiptContext.Provider value={data}>{children}</receiptContext.Provider>
  );
}

export default ReceiptContext;
