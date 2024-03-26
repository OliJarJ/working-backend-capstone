// pages/Products.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import bostonterrier from '../imgs/bostonterrier.jpg';
import { BACKEND_URL } from '../config';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await axios.get(BACKEND_URL + 'products'); // Assuming your backend API endpoint is '/api/products'
        console.log(response)
        setProducts(response.data); // Assuming the backend returns an array of products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();

    // Cleanup function
    return () => {
      // Cleanup code if needed
    };
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <div className="container-fluid">

      <img src={bostonterrier} alt="Boston Terrier looking out a car window." className="img-fluid mb-4" />

      <div className="container">
        <h1 className="text-center  mb-4" style={{color:'#7986CB'}}>Our Products</h1>
        <div className="row">
          {products.map(product => (
            <div className="col-lg-4 col-md-6 mb-4" key={product._id}>
              <div className="card h-100">
                <img src={product.imageURL} alt="" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title text-center fw-bold text-secondary">{product.title}</h5>
                  <p className="card-text text-center">{product.description}</p>
                  <p className="fw-bold">Category: {product.category}</p>
                  <p className="fw-bold">Price: ${product.price}</p>
                  <p className="fw-bold">Date Added: {new Date(product.date_added).toLocaleDateString()}</p>
                  <a href="#" className="btn btn-block portfolio-button" style={{backgroundColor:'#42A5F5', color:'white'}}>View Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;