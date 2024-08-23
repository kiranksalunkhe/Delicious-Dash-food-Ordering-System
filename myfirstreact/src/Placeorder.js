import React, { useState } from 'react';
import { useCart } from './ViewComponent/CartContext';
import LogOut from './ViewComponent/Logout';

function PlaceOrder() {
    const { cart, setCart } = useCart();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const calculateTotal = () => {
        let total = 0;
        for (const itemId in cart) {
            const item = cart[itemId];
            if (item && item.price && item.quantity) {
                total += item.price * item.quantity;
            }
        }
        return total;
    };

    const totalAmount = calculateTotal();
    const resid = JSON.parse(localStorage.getItem("resID"));
    const uid = JSON.parse(localStorage.getItem("loggeduser")).userId;

    const handlePlaceOrder = async () => {
        const orderData = {
            restaurantid: resid,
            userid: uid,
            status: 'Pending',
            date: new Date().toISOString(),
            amount: totalAmount
        };

        try {
            const response = await fetch('http://localhost:8080/orders/saveorder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            });

            if (!response.ok) {
                throw new Error('Error while placing the order');
            }

            setSuccess('Order placed successfully!');
            // Clear the cart or redirect as needed
        } catch (err) {
            setError(err.message);
        }
    };

    // const handleDelete = (itemId) => {
    //     // Create a copy of the cart to modify
    //     const updatedCart = { ...cart };
    //     // Delete the item with the specified itemId
    //     delete updatedCart[itemId];
    //     // Update the cart state with the new cart
    //     setCart(updatedCart);
    // };

    return (
        <div>
            <div className="container mt-4">
                <LogOut/>
                <h2>Your Order</h2>
                <ul className="list-group">
                    {Object.keys(cart).map((itemId) => {
                        const item = cart[itemId];
                        if (!item || !item.price) {
                            return null; // Skip if item or price is undefined
                        }
                        return (
                            <li key={itemId} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <strong>{item.menuName}</strong> <br />
                                    Quantity: {item.quantity}
                                </div>
                                <span className="badge bg-primary rounded-pill">
                                    Rs.{(item.price * item.quantity).toFixed(2)}
                                </span>
                                {/* <button
                                    className="btn btn-danger btn-sm ms-3"
                                    onClick={() => handleDelete(itemId)}
                                >
                                    Delete
                                </button> */}
                            </li>
                        );
                    })}
                </ul>
                <h4 className="mt-4">Total: Rs.{totalAmount.toFixed(2)}</h4>
                <button
                    className="btn btn-success mt-4"
                    onClick={handlePlaceOrder}
                    disabled={Object.keys(cart).length === 0}
                >
                    Place Order
                </button>
                {error && <p className="text-danger mt-3">Error: {error}</p>}
                {success && <p className="text-success mt-3">{success}</p>}
            </div>
        </div>
    );
}

export default PlaceOrder;
