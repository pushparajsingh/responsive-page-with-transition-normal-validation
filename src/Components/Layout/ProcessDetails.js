import React from 'react';
import PersonalDetails from '../../Asserts/Images/personal_Details.png';
import ContactDetails from '../../Asserts/Images/contact_Details.png';
import OtpVerification from '../../Asserts/Images/otp_verify.png';
import Container from '@mui/material/Container';
import { useLocation } from 'react-router-dom';

const ProcessDetails = () => {
  const { pathname } = useLocation();
  const progresStage =
    JSON.parse(localStorage.getItem('stepperForm'))?.page ?? '';
  return (
    <Container maxWidth="lg">
      <div className="process">
        <hr
          color="orange"
          style={{
            width: `calc(${
              progresStage == 'first'
                ? 52
                : progresStage == 'second'
                ? 100
                : ''
            }% - 65px)`,
          }}
        />
        <div
          className="process-details"
          style={{
            backgroundColor:
              progresStage == 'first' ||
              progresStage == 'second' ||
              progresStage == 'third'
                ? '#f6821f'
                : '#bebbbb',
          }}
        >
          <img src={PersonalDetails} alt="Personal Details" />
          <p style={{ fontWeight: pathname == '/' ? 'bold' : '' }}>
            Personal Details
          </p>
        </div>
        <div
          className="process-details"
          style={{
            backgroundColor:
              progresStage == 'third' || progresStage == 'second'
                ? '#f6821f'
                : '#bebbbb',
          }}
        >
          <img src={ContactDetails} alt="Contact Details" />
          <p
            style={{
              fontWeight:
                pathname == '/contact_details' ? 'bold' : '',
            }}
          >
            Contact Details
          </p>
        </div>
        <div
          className="process-details"
          style={{
            backgroundColor:
              progresStage == 'third' ? '#f6821f' : '#bebbbb',
          }}
          id="otp"
        >
          <img src={OtpVerification} alt="OTP Verification" />
          <p
            style={{
              fontWeight:
                pathname == '/otp_verification' ? 'bold' : '',
            }}
          >
            OTP Verification
          </p>
        </div>
      </div>
      <hr />
    </Container>
  );
};

export default ProcessDetails;
