import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogOut from '../Logout';


function RestaurantList() {
    const [restaurants, setRestaurants] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();  // Hook for programmatic navigation

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await fetch('http://localhost:8080/restaurants/all');
                if (!response.ok) {
                    throw new Error('Error while fetching restaurants');
                }
                const data = await response.json();
                setRestaurants(data);
            } catch (err) {
                alert(err.message);
                setError(err.message);
            }
        };

        fetchRestaurants();
    }, []);

    if (error) return <p>Error: {error}</p>;

    // Function to handle button click and navigate to the new component
    const handleButtonClick = (restaurantId) => {
        localStorage.setItem("resID",JSON.stringify(restaurantId));
        navigate(`/rest/${restaurantId}`);
    };

    return (
        <div className="container mt-4">
         <LogOut/>
            <h2 className="mb-4">Restaurants</h2>
            <div className="row">
                {restaurants.map(restaurant => (
                    <div key={restaurant.restaurantId} className="col-md-4 mb-3">
                        <div className="card" style={{ cursor: 'pointer' }}>
                            <field className="text-danger bg-dark" to={`/rest1/${restaurant.restaurantId}`}>
                                <div className="card-body">
                                    <h2 className="card-title">{restaurant.resName || 'Unnamed Restaurant'}</h2>
                                    </div>
                                    </field>
                                    <field className="text-info" to={`/rest1/${restaurant.restaurantId}`}>
                                    <div className="card-body">
                                    <h4 className="card-text">{restaurant.resDesc || 'No description available'}</h4>
                                    </div>
                                    </field>
                                
                           
                            {/* Button for navigating to the new component */}
                            <div className="card-footer">
                               
                               <Link to={`/rest1/${restaurant.restaurantId}`}><button 
                                    className="btn btn-secondary" 
                                    onClick={() => handleButtonClick(restaurant.restaurantId)}>
                                    Go to Restaurant
                                </button></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RestaurantList;
