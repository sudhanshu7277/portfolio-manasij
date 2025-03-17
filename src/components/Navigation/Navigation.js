import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Navigation.css';

const Navigation = () => {
  // State to handle mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [bgColor, setBgColor] = useState(generateRandomColor());
  function generateRandomColor() {
      const colors = ['#c4e1ff', '#ffe2c4', '#ffc5c4', '#c4feff', '#c5c4ff', '#e3c4ff', '#c4ffc5', '#ffc5c4', '#ffc4e1'
  , '#ffc4fe', '#ffe3c4'];
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    }

    useEffect(() => {
      const intervalId = setInterval(() => {
        setBgColor(generateRandomColor());
      }, 300000);
  
      return () => clearInterval(intervalId);
    }, []);

  const handleNavigation = (path) => {
    navigate(path);  // Navigate to the specified path
    setIsMenuOpen(false);  // Close the mobile menu on link click
  };

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar" style={{ backgroundColor: bgColor, marginBottom: '5rem' }}>
      <div className="logo">
        <h1>Manasi Jain</h1>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><button className="navigation" onClick={() => handleNavigation('/')}>Home</button></li>
        <li><button className="navigation" onClick={() => handleNavigation('/about')}>About</button></li>
        <li><button className="navigation" onClick={() => handleNavigation('/services')}>Services</button></li>
        <li><button className="navigation" onClick={() => handleNavigation('/contact')}>Contact</button></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navigation;












// import React, { useState, useEffect } from 'react';
// import { Container, Nav, Navbar} from "react-bootstrap";
// import {Link} from "react-router-dom";
// // import './Navbar.css';

// const Navigation = () => {
//     const [bgColor, setBgColor] = useState(generateRandomColor());
//     function generateRandomColor() {
//         const colors = ['#c4e1ff', '#ffe2c4', '#ffc5c4', '#c4feff', '#c5c4ff', '#e3c4ff', '#c4ffc5', '#ffc5c4', '#ffc4e1'
//     , '#ffc4fe', '#ffe3c4'];
//         const randomIndex = Math.floor(Math.random() * colors.length);
//         return colors[randomIndex];
//       }

//       useEffect(() => {
//         const intervalId = setInterval(() => {
//           setBgColor(generateRandomColor());
//         }, 300000);
    
//         return () => clearInterval(intervalId);
//       }, []);
//   return (
//     <Navbar expand="lg" className="navbar-custom" style={{ backgroundColor: bgColor, marginBottom: '5rem' }}>
//             <Container>
//                     {/* <Navbar.Brand as={Link} to="/">
//                             <div className="brand">
//                                 My Portfolio
//                             </div>
//                     </Navbar.Brand> */}
//                     <Navbar.Toggle aria-controls="basic-navbar-nav"/>
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <Nav className="ms-auto">
//                             <Nav.Link as={Link} to="/home">Home</Nav.Link>
//                             <Nav.Link as={Link} to="/about">About</Nav.Link>
//                             <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
//                             <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
//                         </Nav>
//                     </Navbar.Collapse>
//             </Container>
//     </Navbar>
// )};

// export default Navigation;