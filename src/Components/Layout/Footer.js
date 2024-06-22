import React from 'react';
import Container from '@mui/material/Container';
import GirlPic from '../../Asserts/Images/girl-pic.png';
import LogoPic from '../../Asserts/Images/logo2.png';
import messageLogo from '../../Asserts/Images/message-logo.png';
import ContactLogo from '../../Asserts/Images/contact_Details.png';
import facebookLogo from '../../Asserts/Images/facebook.png';
import InstaLogo from '../../Asserts/Images/insta.png';
import Linkdin from '../../Asserts/Images/linkedin.png';
import XImage from '../../Asserts/Images/x-image.png';
import YoutubeImg from '../../Asserts/Images/youtube.png';

const Footer = () => {
  return (
    <div className="footer">
      <Container maxWidth="lg" style={{ display: 'flex' }}>
        <div className="footer-details">
          <div>
            <img src={LogoPic} />
          </div>
          <div className="footer-content">
            <div>
              <p>
                Learn and Achieve is dedicated to enhancing the
                educational experience of students across India.
              </p>
              <div className="referal-logo">
                <div>
                  <img
                    src={facebookLogo}
                    title="facebook"
                    width={'100%'}
                    height={'100%'}
                  />
                </div>
                <div>
                  <img
                    src={InstaLogo}
                    title="Instagram"
                    width={'100%'}
                    height={'100%'}
                  />
                </div>
                <div>
                  <img
                    src={Linkdin}
                    title="Linkdin"
                    width={'100%'}
                    height={'100%'}
                  />
                </div>
                <div>
                  <img
                    src={XImage}
                    title="Twitter"
                    width={'100%'}
                    height={'100%'}
                  />
                </div>
                <div>
                  <img
                    src={YoutubeImg}
                    title="YouTube"
                    width={'100%'}
                    height={'100%'}
                  />
                </div>
              </div>
            </div>
            <div className="footer-links">
              <div>
                <p className="footer-topic-heading">Quick Links</p>
                <ul>
                  <li>About Us</li>
                  <li> Our Services</li>
                  <li> Bharat SAT</li>
                  <li> Contact Rewards</li>
                  <li> Join as a Coordinator</li>
                  <li> FAQ’s</li>
                  <li> Terms & Conditions</li>
                  <li> Privacy Policy</li>
                </ul>
              </div>
              <div>
                <p className="footer-topic-heading">Get In Touch</p>
                <ul>
                  <li style={{ marginBottom: '20px' }}>
                    <img
                      src={messageLogo}
                      width={'20px'}
                      height={'20px'}
                    />
                    support@learnandachieve.in
                  </li>
                  <li>
                    <img
                      src={ContactLogo}
                      width={'20px'}
                      height={'20px'}
                    />
                    +91 9136955362
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="girl-pic">
          <img src={GirlPic} alt="Girl-Pic" title="Girl" />
        </div>
      </Container>
      <div className="footer-bottom">
        <hr width="86%" className="footer-line-color" />
        <p>
          COPYRIGHT © 2024 Learn and Achieve. ALL RIGHTS RESERVED. |
          POWERED BY: DIGIHOST
        </p>
      </div>
    </div>
  );
};

export default Footer;
