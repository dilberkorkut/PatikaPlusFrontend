import React from 'react'
import { useContext } from 'react';
import { receiptContext } from '../context/ReceiptContext';

function Balance() {

  const data = useContext( receiptContext )
  console.log(data);
  
  return (
    <div className='money-container'>
      <h2>${data.balance}</h2>
    </div>
  )
}

export default Balance;