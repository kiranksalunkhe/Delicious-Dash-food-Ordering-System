import React from 'react'
import '../ViewComponent/A.css'
export const A = () => {
  return (
    <div className='container'>
        <h1 className='text-primary'>World's largest Property Site</h1>
         <div className='row'>
            <div className='col-md-4'>
         <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>

</select>

</div>
<div className='col-md-6'>
<form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="" aria-label="Search"/>
        <button class="btn btn-outline-success btn-primary" type="submit">Search</button>
      </form>
      </div>
{/* <div className='col-md-6'>
<input type="text" class="form-control" id="exampleFormControlInput1"  />
</div>
<div className='col-md-2'>
<input type="text" class="form-control" id="exampleFormControlInput1"  />
</div> */}

{/* <div className='col-md-'>
<button className='btn btn-primary'>Search</button>
</div> */}


        </div>  
    </div>
  )
}
