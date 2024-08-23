import React from 'react'
import '../Category/Category.css'
const Category = (handleChange) => {
  return (
    <div>
       <h2 className='sidebar-title'>Category</h2>
         <label className='sidebar-label-container'>
           <input type='radio' name='test' onChange={handleChange}/>
           <span className='checkmark'></span>All
         </label><br/>
         {/* <label className='sidebar-label-container'>
           <input type='radio' name='test'/>
           <span className='checkmark'></span>Pizza
         </label>
         <label className='sidebar-label-container'>
           <input type='radio' name='test'/>
           <span className='checkmark'></span>South Indian
         </label>  */}


         


        
    </div>
  )
}

export default Category