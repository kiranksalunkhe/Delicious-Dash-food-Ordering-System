import React from 'react'
import { useState } from 'react';
const OrderDetails = () => {
    const[orderdetails,setOrderDetails]=useState('');

  return (
    <div>
      <h1 className='text-primary'>Order Details of User</h1>
    </div>
  )
}

export default OrderDetails;
