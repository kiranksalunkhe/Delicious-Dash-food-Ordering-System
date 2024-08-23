import React, { useState, useEffect } from 'react';
import RestaurantOwner from './RestaurantOwner';
import PlaceOrder from '../../Placeorder';
const ViewOrder = () => {
  const [orders, setOrders] = useState([]);
  const [err, setErr] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const resId = JSON.parse(localStorage.getItem("loggeduser")).restaurants[0].restaurantId;

  useEffect(() => {
    fetch("http://localhost:8080/orders/getres/" + resId)
      .then(resp => resp.json())
      .then(data => {
        setOrders(data);
      })
      .catch(err => setErr("Failed to fetch orders"));
  }, [resId]);

  const handleAcceptOrder = (orderId) => {
    const reqdata = {
      method: "PUT",
    }
    fetch(`http://localhost:8080/orders/acceptedOrder/` + orderId, reqdata)
      .then(resp => {
        if (resp.ok) {
          setOrders(orders.map(order => 
            order.orderId === orderId ? { ...order, status: 'Accepted' } : order
          ));
          setSuccessMsg("Order Accepted");
          setErr("");

          // Clear the success message after 3 seconds
          setTimeout(() => {
            setSuccessMsg("");
          }, 3000);
          setTimeout(() => {
            setSuccessMsg(""); // Clear the message
            window.location.reload(); // Reload the page
          }, 3000);
        } else {
          setErr("Failed to accept order");
        }
      })
      .catch(err => setErr("Failed to accept order"));
  }

  return (
    <div >
      <RestaurantOwner/>
      <div className="container mt-5">
      <h1 className="mb-4">Orders</h1>
      {err && <div className="alert alert-danger">{err}</div>}
      {successMsg && <div className="alert alert-success">{successMsg}</div>}
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>Customer Name</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.orderId}>
              <td>{index + 1}</td>
              <td>{order.user.fname}</td>
              <td>Rs.{order.amount.toFixed(2)}</td>
              <td>{order.status}</td>
              <td>
                <button 
                  className="btn btn-success" 
                  onClick={() => handleAcceptOrder(order.orderId)}
                >
                  Accept
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
    </div>
  );
}

export default ViewOrder;
