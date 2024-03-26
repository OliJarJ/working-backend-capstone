// components/Footer.js

import { Link } from 'react-router-dom';
import '../App.css';


const Footer = () => {

  return (
<footer className="footer" style={{marginTop:'3rem'}}>
      <div className="container-fluid" style={{backgroundColor:'#360568ff', display:'flex', marginBottom:'0', justifyContent:'center', position: 'absolute'}}>
        <Link to="/">
          <h1 className="text-white mx-3" style={{fontSize: 'medium', paddingTop: '2rem', paddingBottom:'2rem'}}>Careers</h1>
        </Link>
        <Link to="/">
          <h1 className="text-white mx-3" style={{fontSize: 'medium', paddingTop: '2rem', paddingBottom:'2rem'}}>Vet Locations</h1>
        </Link>
        <Link to="/">
          <h1 className="text-white mx-3" style={{fontSize: 'medium', paddingTop: '2rem', paddingBottom:'2rem'}}>Resources</h1>
        </Link>
        <Link to="/">
          <h1 className="text-white mx-3" style={{fontSize: 'medium', paddingTop: '2rem', paddingBottom:'2rem'}}>FAQs</h1>
        </Link>
      </div>
      
    </footer>
  )
}
export default Footer

