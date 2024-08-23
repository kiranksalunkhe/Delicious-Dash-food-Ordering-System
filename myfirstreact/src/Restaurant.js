import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from './ViewComponent/CartContext';
import LogOut from './ViewComponent/Logout';

function Restaurant1() {
    const { id } = useParams();
    const [menu, setMenu] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [error, setError] = useState('');
    const { cart, addToCart, removeFromCart } = useCart();
    const navigate = useNavigate();
    const [addedItems, setAddedItems] = useState([]);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await fetch(`http://localhost:8080/menus/restaurant/${id}`);
                if (!response.ok) {
                    throw new Error('Error while fetching restaurant menu');
                }
                const data = await response.json();
                setMenu(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchMenu();
    }, [id]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:8080/categories/allcat');
                if (!response.ok) {
                    throw new Error('Error while fetching categories');
                }
                const data = await response.json();
                setCategories(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleQuantityChange = (menuId, delta) => {
        const menuItem = menu.find(item => item.menuId === menuId);
        if (delta > 0) {
            addToCart({ ...menuItem, quantity: delta });
        } else {
            removeFromCart(menuId);
        }
    };

    const handleAddToCart = (inventoryItem) => {
        const existingItem = cart[inventoryItem.menuId];
        const quantity = existingItem ? existingItem.quantity + 1 : 1;
        addToCart({ ...inventoryItem, quantity });
        setAddedItems(prev => [...prev, inventoryItem.menuId]); // Mark item as added
    };

    const handlePlaceOrder = () => {
        navigate('/place-order'); // Redirect to place-order page
    };

    const filteredMenu = selectedCategory
        ? menu.filter(item => item.category.categoryId === parseInt(selectedCategory))
        : menu;

    if (error) return <p className="text-danger">Error: {error}</p>;

    return (
        <div className="container mt-4">
            <LogOut/>
            <h2 className="mb-4">Restaurant Menu</h2>
            <div className="mb-4">
                <label htmlFor="categorySelect" className="form-label">Select Category</label>
                <select 
                    id="categorySelect" 
                    className="form-select"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
                    <option value="">Select a category</option>
                    {categories.map(category => (
                        <option key={category.categoryId} value={category.categoryId}>
                            {category.categoryName}
                        </option>
                    ))}
                </select>
            </div>

            <div className="row">
                {filteredMenu.map(item => (
                    <div key={item.menuId} className="col-md-4 mb-4">
                        <div className="card shadow-sm">
                            <img 
                                src={`http://localhost:8080${item.imageUrl}`} 
                                alt={item.menuName} 
                                className="card-img-top img-fluid"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.menuName}</h5>
                                <p className="card-text">{item.menuDesc}</p>
                                <p className="card-text"><strong>Price:</strong> ₹{item.price.toFixed(2)}</p>
                                <div className="d-flex align-items-center">
                                    <button 
                                        className="btn btn-outline-primary"
                                        onClick={() => handleQuantityChange(item.menuId, -1)}
                                    >
                                        -
                                    </button>
                                    <span className="mx-2">{cart[item.menuId]?.quantity || 0}</span>
                                    <button 
                                        className="btn btn-outline-primary"
                                        onClick={() => handleQuantityChange(item.menuId, 1)}
                                    >
                                        +
                                    </button>
                                    {/* {addedItems.includes(item.menuId) ? (
                                        <span className="text-success ms-2">Added to Cart</span>
                                    ) : (
                                        <button 
                                            className="btn btn-primary ms-2"
                                            onClick={() => handleAddToCart(item)}
                                        >
                                            Add to Cart
                                        </button>
                                    )} */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button 
                className="btn btn-success mt-4"
                onClick={handlePlaceOrder}
                disabled={Object.keys(cart).length === 0}
            >
                Add To Cart
            </button>

            {/* Mini Cart Display */}
            <div className="mt-4">
                <h4>Mini Cart</h4>
                <ul className="list-group">
                    {Object.keys(cart).map(itemId => {
                        const item = cart[itemId];
                        return (
                            <li key={itemId} className="list-group-item d-flex justify-content-between align-items-center">
                                <span>{item.menuName}</span>
                                <span>{item.quantity} x ₹{item.price.toFixed(2)}</span>
                            </li>
                        );
                    })}
                </ul>
                <h5 className="mt-2">Total: ₹{Object.values(cart).reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</h5>
            </div>
        </div>
    );
}

export default Restaurant1;
