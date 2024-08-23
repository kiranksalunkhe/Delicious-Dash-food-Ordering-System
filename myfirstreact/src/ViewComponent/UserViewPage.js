import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LogOut from './Logout';
const UserViewPage = () => {
  const user = useSelector((state) => state.logged.user);
  return (
    <div>
        <LogOut/>
        {user ? (
                <div>
                    <h1>Welcome, {user.fname} {user.lname}!</h1>
                    <p>User ID: {user.userId}</p>
                </div>
            ) : (
                <p>Please log in</p>
            )} 
           <Link to="/user1"><button className='btn btn-primary'>Visit Restaurants</button></Link>
    </div>
  )
}

export default UserViewPage