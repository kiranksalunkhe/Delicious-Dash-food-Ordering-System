import React from 'react'
import { Link } from 'react-router-dom';
const LogOut = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-top-fixed">
    <div class="container-fluid">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
   <li class="nav-item">
   <Link class="nav-link " aria-current="page" to="/">Logout</Link>
 </li>
 </ul>
 </div>
 </nav>

 </div>
  )
}

export default LogOut;