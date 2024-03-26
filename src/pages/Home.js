// pages/Home.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import guyandhisdog from '../imgs/guyandhisdog.jpg';
import girlandpuppy from '../imgs/girl-holding-puppy.jpg';
import dogwithcouple from '../imgs/dog-with-couple.jpg';
import kitten from '../imgs/cat-being-pet.jpg'
import catonyellow from '../imgs/catonyellow.jpg'
import blackdog from '../imgs/blackdog.jpg'
import brownwhitegp from '../imgs/brownwhitegp.jpg'
import catlickingfinger from '../imgs/catlickingfinger.jpg'
import catanddogoutside from '../imgs/catanddogoutside.jpg'
import chonkycats from '../imgs/chonkycats.jpg'
import beardeddragonlizard from '../imgs/beardeddragonlizard.jpg'
import childrenwdog from '../imgs/childrenwdog.jpg'
import smileydog from '../imgs/smileydog.jpg'
import smallbudgie from '../imgs/smallbudgie.jpg'

const Home = () => {
  // const [posts, setPosts] = useState([]);
  
  // useEffect(() => {
  //   axios.get('https://localhost:4000/home')
  //     .then(res => {
  //       setPosts(res.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching posts:', error);
  //       setPosts([]);
  //     });
  // }, []);

  // const postList = posts.length ? (
  //   posts.map(post => (
  //     <div className="post card" key={post.id}>
  //       <div className="card-content">
  //         <Link to={`/posts/${post.id}`}>
  //           <span className="card-title">{post.title}</span>
  //         </Link>
  //         <p>{post.body}</p>
  //       </div>
  //     </div>
  //   ))
  // ) : (
  //   <div className="center">No posts to show</div>
  // );

  return (
   
   <div className='container-fluid'>
   <header className="container-fluid">
    <div>
      <img id="guyanddog" className="img-fluid" src={ guyandhisdog } alt="A dog being hugged by his owner." style={{width:'100%',}}/>
      </div>
      </header>
      <div className="post">
    
      <br />
     
        <div>
        
        </div>
        <br />
        <br />
        <div>
        {/*Mission Statement*/}
        <h5 className="display-6 text-center fw-bold" style={{color:'#7986CB', marginBottom:'2rem'}}>Our Mission</h5>
          <p className="mx-5" style={{ marginBottom:'2rem'}}>At O & A Pet Destination, our mission is to create a haven where pet lovers can discover unparalleled joy in nurturing and caring for their beloved companions. With a steadfast commitment to excellence and compassion, we strive to be more than just a destination for pet supplies – we aspire to be a trusted partner on your journey of pet parenthood.</p>

<h6 className="fw-bolder text-center" style={{fontSize:'large', color:'#7986CB'}}>Adoption Services</h6>

<p className="my-2 py-2 mx-5" style={{marginLeft:'4vh', marginLeft:'4vh'}}>We believe in the transformative power of adoption, both for pets and their human companions. Our adoption services provide a loving platform for connecting rescue animals with caring individuals and families. Through meticulous screening processes and personalized matchmaking, we facilitate lifelong bonds built on trust, love, and mutual respect.</p>

<h6 className="fw-bolder text-center" style={{fontSize:'large', color:'#7986CB'}}>Products for Pets</h6>

<p className="my-2 mx-5 py-2" >Our curated selection of products reflects our dedication to providing only the highest quality essentials and indulgences for pets of all shapes and sizes. From premium nutrition and grooming supplies to stylish accessories and enriching toys, every item in our inventory is carefully chosen to enhance the well-being and happiness of your furry, feathered, or scaly friend.</p>

<p className="my-2 py-2 mx-5" style={{marginBottom:'5vh',}}>At O & A Pet Destination, we invite you to embark on a journey of discovery, companionship, and unconditional love. Together, let us celebrate the joy of pet ownership and nurture lasting relationships that enrich both our lives and the lives of our cherished animal companions.</p>
{/*End Mission Statement*/}

{/*Carousel Item*/}

<div id="carouselExampleFade" className="carousel slide carousel-fade mx-5" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={catonyellow} className="d-block w-100" alt="Cat on a yellow background."/>
    </div>
    <div className="carousel-item active">
      <img src={blackdog} className="d-block w-100" alt="Black dog with toy in mouth."/>
    </div>
    <div className="carousel-item active">
      <img src={brownwhitegp} className="d-block w-100" alt="Black and brown guinea pig."/>
    </div>
    <div className="carousel-item active">
      <img src={catlickingfinger} className="d-block w-100" alt="Cat licking hand."/>
    </div>
    <div className="carousel-item active">
      <img src={catanddogoutside} className="d-block w-100" alt="Cat and dog lying together in the grass."/>
    </div>
    <div className="carousel-item active">
      <img src={chonkycats} className="d-block w-100" alt="Two cats"/>
    </div>
    <div className="carousel-item active">
      <img src={beardeddragonlizard} className="d-block w-100" alt="Bearded dragon"/>
    </div>
    <div className="carousel-item active">
      <img src={childrenwdog} className="d-block w-100" alt="Two children sitting with dog."/>
    </div>
    <div className="carousel-item active">
      <img src={smallbudgie} className="d-block w-100" alt="Small budgie on a perch."/>
    </div>
    <div className="carousel-item active">
      <img src={smileydog} className="d-block w-100" alt="Dog smiling."/>
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
{/*End Carousel Item*/}
<br />
<br />
{/*Picture and Image Tiles*/}
<div className="container">
     <div className="row">
    <div className="col-lg-6 col-xl-6 col-md-6 float-left col-xs-12 col-sm-12">
      <h2 className=" display-6 text-center my-4" style={{color:'#7986CB', marginTop:'10rem'}}>Where Pet Passion Meets Professionalism</h2>
      <p className="text-center mx-4 my-4">At our pet shop, professionalism isn't just a standard—it's a way of life. We go above and beyond to exceed expectations, providing a welcoming and enriching environment where pets and their owners can thrive together. Come experience the difference firsthand and discover why we're more than just a pet shop—we're a community dedicated to the happiness and welfare of all animals.</p>
      <hr></hr>
    </div>
  <div className=" col-lg-6 col-xl-6 col-md-6 col-xs-12 col-sm-12">
      <img src={girlandpuppy} className="img-fluid border border-secondary my-4" alt="Dog running along the ocean shoreline."/>
    </div>
    <div className="col-lg-6 col-xl-6 col-md-6 col-xs-12 col-sm-12">
      <img src={dogwithcouple} className="img-fluid border border-secondary my-4" alt="An older couple and their pet dog."/>
    </div>
    <div className="col-lg-6 col-xl-6 col-md-6 col-xs-12">
      <h2 className=" display-6 text-center" style={{marginTop:'5rem', color:'#7986CB'}}> Your Paws-itively Perfect Pet Shop Experience </h2>
      <p className="text-center  mx-4 my-4">We're all about going the extra mile! Here, you'll find not only top-notch resources but also the kind of grade A customer service that makes you and your furry friend feel like family.</p>
      <hr></hr>
    </div>
    
    <div className="col-lg-6 col-xl-6 col-md-6 col-xs-12 col-sm-12">
  <h2 className=" display-6 text-center my-4" style={{color:'#7986CB'}}>Ready for Your Next Best Friend?</h2>
  <p className="text-center mx-4 my-4 ">Your journey to pet parenthood starts here! Whether you're looking for a playful kitten to brighten your days or a loyal companion to share your adventures, we have just the furry friend waiting to steal your heart. Don't wait any longer—swing by our adoption page now and start your unforgettable journey to finding your purrfect match!</p>
  <hr></hr>
  <div className="text-center">
    <a href="/pets" className="btn btn-lg btn-3d my-4 portfolio-button" style={{backgroundColor:'#42A5F5', color:'white'}}>See More</a>
  </div>
</div>
    <div className="col-md-6 col-lg-6 col-xl-6 col-xs-12 col-sm-12">
      <img src={kitten} className="img-fluid border border-secondary my-4" alt="Kitten being pet."/>
    </div>
    </div>
    </div>
  </div>
        </div>
        {/*Picture and Image Tiles*/}
      </div>
      
    
  );
};

export default Home;