import React from 'react'
import '../Product/Product.css'
import { AiFillStar } from 'react-icons/ai'
const Product = () => {
    return (
        <div>

            <section className="card-container">
                <section className='card'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg" height="200" width="200" alt="imgHere" />
                    <div className='card-details'>
                        <h3 className='card-title'>Pizza</h3>
                        <section className='card-reviews'>
                            <AiFillStar className='rating-star' />
                            <AiFillStar className='rating-star' />
                            <AiFillStar className='rating-star' />
                            <AiFillStar className='rating-star' />

                        </section>
                        <section className='card-price'>
                            <div className='price'>
                                <h5>Rs.200</h5>
                            </div>
                            </section>
                    </div>
                    </section>
                   
                    </section>


            <section className="card-container">
                <section className='card'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg" height="200" width="200" alt="imgHere" />
                    <div className='card-details'>
                        <h3 className='card-title'>Idli</h3>
                        <section className='card-reviews'>
                            <AiFillStar className='rating-star' />
                            <AiFillStar className='rating-star' />
                            <AiFillStar className='rating-star' />
                            <AiFillStar className='rating-star' />

                        </section>
                        <section className='card-price'>
                            <div className='price'>
                                <h5>Rs.200</h5>
                            </div>
                            </section>
                    </div>
                </section>
            </section>
           


        </div>
    )
}

export default Product