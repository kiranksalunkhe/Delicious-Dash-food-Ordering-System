import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";
function Footer()
{
    return(
        <div>
        <footer class="footer p-5">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <h2>Delicious Dash</h2>
                </div>
                <div class="col-md-3">
                    <h5>About Us</h5>
                    <p>
                    The Online Food Ordering System is a web-based application that allows customers to order food from restaurants and food establishments online. It serves as a user-friendly platform where customers can browse menus based on different categories and confirm orders.
                    </p>
                </div>
                <div class="col-md-3">
                    <h5>Contact Us</h5>
                    <ul class="list-unstyled">
                        <li>Email:delicious@gmail.com </li>
                        <li>Phone:888888888 </li>
                        <li>Address: 123 Street, City, Country</li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <h5>Follow Us</h5>
                    <ul class="list-inline footer-links">
                        <li class="list-inline-item">
                          <Link to="#">
                                <i class="fab fa-facebook"></i>
                          </Link>
                          </li>
                        <li class="list-inline-item">
                          <Link to="#">
                                <i class="fab fa-twitter"></i>
                          </Link>
                        </li>
                        <li class="list-inline-item">
                          <Link to="#">
                                <i class="fab fa-instagram"></i>
                          </Link>
                        </li>
                        <li class="list-inline-item">
                          <Link to="#">
                                <i class="fab fa-linkedin"></i>
                          </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <hr/>
            
        </div>
    </footer>
    </div>
    )
}
export default Footer;