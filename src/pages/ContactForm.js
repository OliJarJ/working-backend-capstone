import React, { useState } from 'react';
import axios from 'axios';
import couplewithdog from '../imgs/couple-with-dog.jpg'
import { BACKEND_URL } from '../config';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  console.log(BACKEND_URL)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const contactData = { name, email, message };
    try {
      const response = await axios.post(BACKEND_URL + 'contact', contactData);
      console.log(response.data);
      setName('');
      setEmail('');
      setMessage('');
      setError(null);
    } catch (error) {
      console.error('Error submitting message:', error);
      if (error.response) {
        setError(error.response.data.error);
      } else {
        setError('An error occurred. Please try again later.');
      }
    }
  };
  return (
    <div>
     <div>
  <img className="img-fluid" src={couplewithdog} alt="A couple and their pet dog" />
</div>
<div className='container'>
<div className='row'>
<div className='col-lg-6 col-xl-6 col-md-6 col-xs-12 col-sm-12 col-6'>
    <form className="create mx-5 " onSubmit={handleSubmit}>
        <h3 className="text-center my-4 display-6" style={{color:'#7986CB'}}>Leave us a message!</h3>
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control"  onChange={(e) => setName(e.target.value)}/>
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp"   onChange={(e) => setEmail(e.target.value)}/>
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5"   onChange={(e) => setMessage(e.target.value)}></textarea>
    </div>
    <div className="text-center">
    <button type="submit" className="btn btn-primary my-4 portfolio-button">Submit</button>
    </div>
</form>
</div>
        {error && <div className="error">{error}</div>} 
        <div className='col-lg-6 col-xl-6 col-md-6 col-xs-12 col-sm-12 col-6'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3090.611176869781!2d-84.37845712353605!3d39.228995627069644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8840536f0dec042f%3A0x54c665d266579f3e!2sKable%20Academy!5e0!3m2!1sen!2sus!4v1709822438219!5m2!1sen!2sus" style={{width: 600, height:450, border:0}}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>   
        </div>
        </div>
    
        <br></br>
        <hr />
        <br />            
      <div className="container">
      <h3 className="mx-2 fw-bold text-center py-2" style={{color:'#7986CB'}}>Follow us on Social Media:</h3>
      <div className="row mx-2 py-2">
        <ul className="py-4" style={{listStyle:'none', textDecoration:'none', flexDirection: 'row', display:'inline-flex', justifyContent:'center'}}>
          <li className="social-media-card mx-2 text-center fw-bold my-2"><a href="https://example.com/facebook" target="_blank" rel="noopener noreferrer">Facebook</a></li>

          <li className="social-media-card mx-2  text-center fw-bold my-2"><a href="https://example.com/twitter" target="_blank" rel="noopener noreferrer">Twitter</a></li>

          <li className="social-media-card mx-2  text-center fw-bold my-2"><a href="https://example.com/instagram" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          {/* Add more social media links as needed */}
        </ul>
      </div>
      </div>
    </div>
    
  );
};
export default ContactForm;