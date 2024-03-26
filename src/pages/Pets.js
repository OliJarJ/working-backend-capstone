import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import golden from '../imgs/golden.jpg'
import { BACKEND_URL } from '../config';

const Pets = () => {
  const [shop, setProducts] = useState([]);

  useEffect(() => {
    
    // Fetch products from backend when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await axios.get(BACKEND_URL + 'pets'); 
        setProducts(response.data); // Assuming the backend returns an array of products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();

    // Cleanup function
    return () => {
      // Cleanup if necessary
    };
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <div className="container-fluid">
     
<img src={golden} alt="Dog and human sitting side by side at sunset." className="img-fluid mb-4" style={{width:'100%'}}/>
    <h2 className="display-4 text-center my-4 py-2" style={{color:'#9FA8DA'}}>Meet Our Animals</h2>
      <div className="row mx-4" id="animals" >
        {shop.map(shop => (
          <div className="col-lg-4 col-md-6 mb-4" key={shop._id}>
            <div className="card h-100">
                <img src={shop.imageURL} alt="" className="card-img-top"/>
              <div className="card-body">
                <h5 className="card-title text-center fw-bold text-secondary">{shop.title}</h5>
                <p className="card-text text-center">{shop.description}</p>
                <p className="fw-bold">Category: {shop.category}</p>
                <p className="fw-bold">Price: ${shop.price}</p>
                <p className="fw-bold">Date Added: {new Date(shop.date_added).toLocaleDateString()}</p>
                <a href="#" className="btn btn-primary btn-block portfolio-button" style={{backgroundColor:'#42A5F5', color:'white'}}>View Details</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <br />
    </div>
  );
};

export default Pets;