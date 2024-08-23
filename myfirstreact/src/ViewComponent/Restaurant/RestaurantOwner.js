import React from 'react'
import { Link } from 'react-router-dom';
const RestaurantOwner = () => {
  return (
  
     <div >
         {/* <h1>Hello Krishna</h1> */}
         <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-top-fixed">
  <div class="container-fluid">
  <Link class="navbar-brand" to="#">
      <img src="https://elements-cover-images-0.imgix.net/85a16575-3900-490c-b4ae-35cf7bf3763b?auto=compress&h=630&w=1200&fit=crop&crop=edges&fm=jpeg&s=acc211cd5037a3f3c1d8b079bd032cd7" width="80" height="50" class="d-inline-block align-text-top"/>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="#">Home</Link>
        </li>

        
       

        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/addmenu">Add Menu</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/vieworder">View Order</Link>
        </li>

        {/* <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="#">Update Order</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="#">Delete Order</Link>
        </li> */}

        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/">Logout</Link>
        </li>


        </ul>
        </div>
        </div>
        </nav>
   </div>
  )
}

export default RestaurantOwner;