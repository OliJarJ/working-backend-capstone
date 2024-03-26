import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOtter, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768); // Adjust breakpoint as needed
    };

    handleResize(); // Check screen size initially
    window.addEventListener('resize', handleResize); // Add event listener for screen resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on component unmount
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="fixednav" className="container-fluid navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#360568ff'}}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          <FontAwesomeIcon icon={faOtter} className="text-white" style={{ fontSize: '2rem' }} />
          <span className="text-white fw-bold ms-2">O & A Pet Destination</span>
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-label="Toggle navigation">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-white" style={{ fontSize: '1.5rem' }} />
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <NavItem to="/" text="Home" closeMenu={() => setIsMenuOpen(false)} />
            <NavItem to="/aboutus" text="About Us" closeMenu={() => setIsMenuOpen(false)} />
            <NavItem to="/pets" text="Animal Adoption" closeMenu={() => setIsMenuOpen(false)} />
            <NavItem to="/products" text="Shop" closeMenu={() => setIsMenuOpen(false)} />
            <NavItem to="/contact" text="Contact" closeMenu={() => setIsMenuOpen(false)} />
          </ul>
    </div>
    </div>
   
    </nav>
  );
};

const NavItem = ({ to, text, closeMenu }) => {
  return (
    <li className="nav-item">
      <Link to={to} className="nav-link text-white" onClick={closeMenu}>{text}</Link>
    </li>
  );
};

export default Navbar;