import React from 'react';
import { useSelector } from 'react-redux';
import RestaurantOwner from './Restaurant/RestaurantOwner';
const RestaurantPage = () => {
   
        const user = useSelector((state) => state.logged.user);

    return (
       
        <div>
             <RestaurantOwner/>
            {user ? (
                <div>
                    <h1>Welcome, {user.fname} {user.lname}!</h1>
                    <p>User ID: {user.userId}</p>
                </div>
            ) : (
                <p>Please log in</p>
            )}
        </div>
    );
   
};

export default RestaurantPage;