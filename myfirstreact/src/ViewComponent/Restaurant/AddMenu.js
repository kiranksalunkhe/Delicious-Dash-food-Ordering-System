import React, { useReducer, useEffect, useState } from 'react';
import '../Restaurant/AddMenu.css';
import RestaurantOwner from './RestaurantOwner';

// Initial state for the reducer
const init = {
  category: "",
  menuname: "",
  menudescription: "",
  price: "",
  menuimage: null,
};

// Reducer function to handle state updates
const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return { ...state, [action.fld]: action.val };
    case 'init':
      return init;
    default:
      return state;
  }
};

const AddMenu = () => {
  const [menu, dispatch] = useReducer(reducer, init);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');
  const deptid = JSON.parse(localStorage.getItem("loggeduser")).restaurants[0].restaurantId;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:8080/categories/allcat');
        if (!response.ok) {
          throw new Error('Error while fetching categories');
        }
        const data = await response.json();
        console.log(data); // Check if data is correct
        setCategories(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchCategories();
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const menuResponse = await fetch('http://localhost:8080/menus/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          menu_name: menu.menuname,
          menu_desc: menu.menudescription,
          price: menu.price,
          restaurant_id: deptid,
          category_id: menu.category,
        }),
      });
      console.log(menu.menudescription)
      if (!menuResponse.ok) {
        const errorDetails = await menuResponse.text(); // Get error details from the response
        throw new Error(`Failed to save menu: ${errorDetails}`);
      }
  
      const savedMenu = await menuResponse.json();
      const menuId = savedMenu.menuId;
  
      if (menu.menuimage) {
        const formData = new FormData();
        formData.append('file', menu.menuimage);
  
        const imageResponse = await fetch(`http://localhost:8080/menus/upload/image/${menuId}`, {
          method: 'POST',
          body: formData,
        });
    
        if (!imageResponse.ok) {
          const errorDetails = await imageResponse.text();
          throw new Error(`Failed to upload image: ${errorDetails}`);
        }
      }
  
      alert('Menu item added successfully!');
      dispatch({ type: 'init' }); // Reset form
    } catch (error) {
      console.error('Error:', error.message); // Log only the message
      setError('An error occurred while submitting the form');
    }
  };
  

  return (
    <>
      <RestaurantOwner />
      <div className="container mt-5">
        <h2 className="mb-4">Add New Menu Item</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="categorySelect" className="form-label">Select Category</label>
            <select
              className="form-select"
              id="categorySelect"
              name="category"
              aria-label="Default select example"
              value={menu.category}
              onChange={(e) => dispatch({ type: 'update', fld: 'category', val: e.target.value })}
              required
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.categoryId} value={category.categoryId}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="menuName" className="form-label">Menu Name</label>
            <input
              type="text"
              className="form-control"
              id="menuName"
              name="menuname"
              value={menu.menuname}
              onChange={(e) => dispatch({ type: 'update', fld: 'menuname', val: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="menuDescription" className="form-label">Menu Description</label>
            <input
              type="text"
              className="form-control"
              id="menuDescription"
              name="menudescription"
              value={menu.menudescription}
              onChange={(e) => dispatch({ type: 'update', fld: 'menudescription', val: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={menu.price}
              onChange={(e) => dispatch({ type: 'update', fld: 'price', val: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="menuImage" className="form-label">Menu Image</label>
            <input
              className="form-control"
              id="menuImage"
              type="file"
              name="menuimage"
              onChange={(e) => dispatch({ type: 'update', fld: 'menuimage', val: e.target.files[0] })}
            />
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-primary">Add Menu Item</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddMenu;