import logo from './logo.svg';
import './App.css';

import Header from './Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Carousal from './ViewComponent/Carousal';
import Footer from './ViewComponent/Footer';
import Restaurant from './ViewComponent/RestaurantRegister';
import RestaurantRegister from './ViewComponent/RestaurantRegister';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './ViewComponent/LoginUser';
import { useSelector } from 'react-redux';
import RestaurantDetails from './ViewComponent/RestaurantDetails';

import Product from './ViewComponent/Product/Product';
import Navfilter from './ViewComponent/Filtering/Navfilter';
import Recommended from './ViewComponent/Recommended/Recommended';
import Sidebar from './ViewComponent/Sidebar/Sidebar';
import { useState } from 'react';
import data from './ViewComponent/data.js'
import { Card } from 'react-bootstrap';
import RestaurantOwner from './ViewComponent/Restaurant/RestaurantOwner.js';
import AddMenu from './ViewComponent/Restaurant/AddMenu.js';
import { A } from './ViewComponent/A.js';
import CustomerRegistration from './ViewComponent/CustomerRegistration.js';
import UserIdSlice from './ViewComponent/UserIdSlice.js';
import RestaurantPage from './ViewComponent/RestaurantPage.js';
import ViewOrder from './ViewComponent/Restaurant/ViewOrder.js';
import OrderDetails from './ViewComponent/Restaurant/OrderDetails.js';

import RestaurantList from './ViewComponent/Restaurant/Myresturant.js';
import Restaurant1 from './Restaurant.js';
import PlaceOrder from './Placeorder.js';
import UserViewPage from './ViewComponent/UserViewPage.js';
import PageNotFound from './ViewComponent/PageNotFound.js';

function App() {
  const mystate = useSelector((state) => state.logged.loggedIn);
  // const [selectcategory, setSelectCategory] = useState(null);

  // //i/p filter
  // const [query, setQuery] = useState("");
  //  //i/p search
  // const handleInputChange = e=> {
  //   setQuery(e.target.value);
  // }
  // //iterating through data
  // const filterdItems = data.filter((d )=> d.title.toLocaleLowerCase().
  // indexOf(query.toLocaleLowerCase() !== -1)


  // );
  // //console.log(d);

  // //Radio filter

  // const handleChange=(e)=>setSelectCategory(e.target.value);

  // //button

  // const handleClick=(e)=>setSelectCategory(e.target.value);

  // function filteredData(menu,selected,query)
  // {
  //    let filtermenu=menu

  //    //filtering items
  //    if(query)
  //    {
  //     filtermenu=filterdItems//search
  //    }

  //    //selected filter
  //    //destructuring from data
  //    //category=data.category
  //    if(selected)
  //    {
  //     filtermenu=filterdItems.filter(({category,title,price})=>
  //   category===selected||title===selected||price===selected
  //     );
  //    }
  // const result=filteredData(data,selectcategory,query)
  //    return filtermenu.map(({img,title,price})=>(
  //     <Card key={Math.random()}
  //     img={img}
  //     title={title}
  //     price={price}
  //     />
  //    )
  //    );
  // }
  return (
    <div className="App">
      {/* <Sidebar handleChange={handleChange}/>
      <Navfilter />
      <Recommended />
      <Product /> */}

     

     <Routes>
       <Route path='/' element={<Header/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/restreg' element={<RestaurantRegister/>}/>
          <Route path='/regcust' element={<CustomerRegistration/>}/>
          <Route path="/restaurant" element={<RestaurantPage/>}/>
          <Route path="/addmenu" element={<AddMenu/>}/>
          <Route path="/vieworder" element={<ViewOrder/>}/>
          <Route path="/order" element={<OrderDetails/>}/>
           
          <Route path='/user' element={<UserViewPage/>}/>
         
          <Route path='/user1' element={<RestaurantList/>}/>
     
          <Route path='/rest1' element={<Restaurant1/>}/>
        

          { <Route path="/rest1/:id" element={<Restaurant1 />} /> }
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="*" element={<PageNotFound/>}/>
      
         </Routes> 
         {/* Aditi@1234 */}
{/* 
           <Routes>
       <Route path='/addmenu' element={<AddMenu/>} />
          
         </Routes>  */}







      {/* <h1>Hello Bappa</h1> */}
    </div>
  );
}

export default App;
// function App()
// {
//   return(
//     <div className='App'>
//       <A/>
//     </div>
//   )
// }