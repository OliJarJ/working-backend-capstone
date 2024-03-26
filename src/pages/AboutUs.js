// pages/AboutUs.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../index.css';
import parrot from '../imgs/parrot-img.jpg'
import corgi from '../imgs/corgi-img.jpg'
import kitten from '../imgs/kitten-img.jpg'
import dogandcat from '../imgs/dogandcat.jpg'
const AboutUs = () => {
  const [aboutContent, setAboutContent] = useState('');

  useEffect(() => {
    axios.get('localhost:4000/aboutus')
      .then(res => {
        setAboutContent(res.data.content);
      })
      .catch(error => {
        console.error('Error fetching about content:', error);
        setAboutContent('');
      });
  }, []);

  return (
    <div className="container-fluid">
      <img className="img-fluid" src={dogandcat} alt="Dog and cat lying together." />
      <h5 className="display-6 text-center my-4" style={{color:'#7986CB'}}>About Us</h5>
          <div className="row">
         
          <img className="img-fluid  col-6 my-4" src={parrot} alt="A colorful parrot" />
          <div className="col-6 ">
      <p className="text-dark text-center text-center mx-4 my-4">
          At O & A Pet Destination, we are more than just a pet store - we're a sanctuary for pets and their devoted owners alike. Nestled in the heart of our community, our passion for animals drives everything we do. From the moment you step through our doors, you'll experience a warm and welcoming atmosphere where your furry, feathery, or scaly companions are celebrated as cherished family members. Whether you're seeking premium pet products, expert advice, or simply a friendly chat about your pet's wellbeing, our knowledgeable team is here to assist you every step of the way.</p>
          <br />
</div>
<div className="col-6">
      <p className="text-dark text-center text-center mx-4 my-4">
What sets O & A Pet Destination apart is our unwavering commitment to providing the highest quality care for your beloved pets. We understand the unique needs of each animal and take pride in offering a diverse range of products that cater to their individual requirements. Whether you're in search of nutritious pet food, durable toys, stylish accessories, or essential grooming supplies, you'll find everything you need under our roof. Our carefully curated selection ensures that your pets receive the best possible care, allowing them to thrive and live their happiest, healthiest lives by your side.</p>
<br />
</div>
<img className="img-fluid flex col-6" src={corgi} alt="An adorable corgi" />

<img className="img-fluid flex col-6 my-4" src={kitten} alt="A sweet tabby kitten" />
<div className="col-6 ">
      <p className="text-dark text-center text-center mx-4 my-4">
At O & A Pet Destination, we believe in giving back to the community that has supported us throughout the years. That's why we actively participate in local initiatives and charity events aimed at improving the welfare of animals in need. From sponsoring adoption drives to organizing educational workshops, we are dedicated to making a positive impact on the lives of both pets and people. When you choose to shop with us, you're not just supporting a business - you're joining a compassionate community that values the wellbeing of all creatures great and small. Welcome to O & A Pet Destination, where every pet is treated like family.</p>
</div>
</div>
          <Link to="/contact" className="btn mx-4 portfolio-button" style={{backgroundColor:'#42A5F5', color:'white'}}>Contact Us</Link>
       
    </div>
  );
};

export default AboutUs;
