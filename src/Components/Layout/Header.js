import React from 'react';
import Logo from '../../Asserts/Images/image 3.jpg';
import LoginBtn from '../../Asserts/Images/Frame 24.jpg';
import Container from '@mui/material/Container';
import Menu from '../../Asserts/Images/menu.png';

const Header = () => {
  return (
    <Container maxWidth="lg">
      <div className="header-page">
        <div>
          <img
            src={Logo}
            alt="Image"
            title="Logo Image"
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div>
          <ul className="menubar">
            <li>Home</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Bharat SAT</li>
            <li>Contact Us</li>
            <li>Bharat Sat Scholorship</li>
            <li>Join as a Coordinator</li>
          </ul>
        </div>
        <div>
          <img
            src={LoginBtn}
            alt="Image"
            title="Login Image"
            className="login-Logo"
            style={{ cursor: 'pointer' }}
          />
          <img
            src={Menu}
            alt="Image"
            title="Login Image"
            className="sideMenu-Logo"
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
    </Container>
  );
};

export default Header;
