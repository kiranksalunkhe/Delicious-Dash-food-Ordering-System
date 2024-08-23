import { Link } from "react-router-dom";
import React from "react";
import Carousal from "./ViewComponent/Carousal";
import Footer from "./ViewComponent/Footer";
function Header()
{
  const img="src\Assets\logo1.jpeg"
    return(
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
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        {/* <li class="nav-item">
          <Link class="nav-link" to="#">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="#">Contact</Link>
        </li> */}
       
        <li class="nav-item">
          <Link class="nav-link" to="/login">Login</Link>
        </li>
        {/* <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="#">Action</Link></li>
            <li><Link class="dropdown-item" to="#">Another action</Link></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><Link class="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li> */}
       
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<Carousal/>
<Footer/> 
      </div>
    )
}
export default Header;