import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import NextBtn from '../Asserts/Images/NextBtn.png';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';
import { contactValidation } from '../Utile/validation';

const StudentRegister = ({ setForm, form, submitAndNext }) => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const handleForm = (name, value) => {
    setForm((x) => {
      return { ...x, [name]: value };
    });
  };
  const submitForm = () => {
    if (contactValidation(form, setError)) {
      navigate('/otp_verification');
      submitAndNext();
    }
  };

  return (
    <>
      <section>
        <p className="Personal-Details-Heading">Contact Details</p>
        <div className="personal-form-group">
          <div className="text-field">
            <p>Email</p>
            <TextField
              fullWidth
              id="standard-basic"
              placeholder="Enter your email"
              variant="standard"
              value={form.email}
              onChange={(e) => {
                handleForm('email', e.target.value);
              }}
            />
            {error?.email && (
              <p className="errorShow">{error.email}</p>
            )}
          </div>
          <div className="text-field">
            <p>Mobile</p>
            <TextField
              fullWidth
              id="standard-basic"
              placeholder="Enter your mobile"
              variant="standard"
              value={form.mobile}
              onChange={(e) => {
                handleForm('mobile', e.target.value);
              }}
            />
            {error?.mobile && (
              <p className="errorShow">{error.mobile}</p>
            )}
          </div>
          <div className="text-field">
            <p>Address Line-1</p>
            <TextField
              fullWidth
              id="standard-basic"
              placeholder="Enter your address line-1"
              variant="standard"
              value={form.addressLineOne}
              onChange={(e) => {
                handleForm('addressLineOne', e.target.value);
              }}
            />
            {error?.addressLineOne && (
              <p className="errorShow">{error.addressLineOne}</p>
            )}
          </div>
          <div className="text-field">
            <p>Address Line-2</p>
            <TextField
              fullWidth
              id="standard-basic"
              placeholder="Enter your address line-2"
              variant="standard"
              value={form.addressLineTwo}
              onChange={(e) => {
                handleForm('addressLineTwo', e.target.value);
              }}
            />
            {error?.addressLineTwo && (
              <p className="errorShow">{error.addressLineTwo}</p>
            )}
          </div>
          <div className="text-field">
            <p>State</p>
            <TextField
              fullWidth
              id="standard-basic"
              placeholder="Select state"
              variant="standard"
              value={form.state}
              onChange={(e) => {
                handleForm('state', e.target.value);
              }}
            />
            {error?.state && (
              <p className="errorShow">{error.state}</p>
            )}
          </div>
          <div className="text-field"></div>
          <div className="text-field">
            <p>
              <Checkbox {...label} defaultChecked />I agree to these
              Terms and Conditions.
            </p>
          </div>
        </div>

        <div>
          <img
            src={NextBtn}
            alt="Submit"
            title="Submit Button"
            className="submitBtn"
            onClick={() => {
              submitForm();
            }}
          />
        </div>
      </section>
    </>
  );
};

export default StudentRegister;
