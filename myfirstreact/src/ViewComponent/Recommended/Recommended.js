import React from 'react'
import '../Recommended/Recommended.css'
const Recommended = () => {
  return (
    <div>
        <h2 className='recommended-title'>Recommended</h2>
        <div className='recommended-flex'>
            <button className='btns'>Menu</button>
            <button className='btns'>Cheese Pizza</button>
            <button className='btns'>Dosa</button>
            <button className='btns'>Cheese Pizza</button>
        </div>
    </div>
  )
}

export default Recommended