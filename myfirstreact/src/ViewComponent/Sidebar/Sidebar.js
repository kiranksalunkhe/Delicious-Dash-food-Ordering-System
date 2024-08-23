import React from 'react'
import '../Sidebar/Sidebar.css'
import Category from './Category/Category'
import Price from '../Price/Price'
const Sidebar = (handleChange) => {
  return (
    <>
    <section className='sidebar'>
      {/* //as props*/}
    <Category handleChange={handleChange}/>
    {/* <Price/> */}
    </section>
  

    </>
  )
}

export default Sidebar