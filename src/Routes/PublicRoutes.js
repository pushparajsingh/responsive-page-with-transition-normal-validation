import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import PersonalDetails from '../Pages/PersonalDetails';
import ContactDetails from '../Pages/ContactDetails';
import OtpVerification from '../Pages/OTPVerification';
import Layout from '../Components/Layout/Layout';
import {
  stepperFormService,
  otpSubmit,
} from '../Services/StepperFormService';
import { useNavigate } from 'react-router-dom';

const PublicRoutes = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: new Date(),
    gender: '',
    schoolName: '',
    class: '',
    medium: '',
    email: '',
    mobile: '',
    addressLineOne: '',
    addressLineTwo: '',
    state: '',
    registerBy: '',
    referralCode: '',
  });
  useEffect(() => {
    localStorage.clear();
    navigate('/');
  }, []);
  const submitAndNext = () => {
    localStorage.setItem(
      'stepperForm',
      JSON.stringify({ page: 'second' })
    );
    stepperFormService(form)
      .then((result) => {
        console.log('result', result);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const SubmitOtp = (otp) => {
    localStorage.setItem(
      'stepperForm',
      JSON.stringify({ page: 'third' })
    );
    otpSubmit({ otp })
      .then((result) => {
        console.log('result', result);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={<PersonalDetails setForm={setForm} form={form} />}
        />
        <Route
          path="/contact_details"
          element={
            <ContactDetails
              setForm={setForm}
              form={form}
              submitAndNext={submitAndNext}
            />
          }
        />
        <Route
          path="/otp_verification"
          element={
            <OtpVerification
              setForm={setForm}
              form={form}
              SubmitOtp={SubmitOtp}
            />
          }
        />
      </Routes>
    </Layout>
  );
};

export default PublicRoutes;
