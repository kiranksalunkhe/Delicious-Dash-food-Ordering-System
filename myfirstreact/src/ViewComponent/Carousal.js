import React from "react";
import './Carousal.css'
function Carousal()
{
    return(
    <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg" class="d-block w-150" alt="..." className="cimg1"/>
      </div>
      <div class="carousel-item">
        <img src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" class="d-block w-150" alt="..." className="cimg1"/>
      </div>
      <div class="carousel-item">
        <img src="https://cdn2.hubspot.net/hubfs/439788/Blog/Featured%20Images/Best%20Restaurant%20Website%20Design%20Inspirations.jpg" class="d-block w-150" alt="..." className="cimg1"/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
    )
}
export default Carousal;