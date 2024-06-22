import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import NextBtn from '../Asserts/Images/NextBtn.png';
import { useNavigate } from 'react-router-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { personalValidation } from '../Utile/validation';
import dayjs from 'dayjs';

const StudentRegister = ({ setForm, form }) => {
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleForm = (name, value) => {
    setForm((x) => {
      return { ...x, [name]: value };
    });
  };

  const SubmitData = () => {
    if (personalValidation(form, setError))
      navigate('/contact_details');
    localStorage.setItem(
      'stepperForm',
      JSON.stringify({ page: 'first' })
    );
  };
  return (
    <>
      <section>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <p className="Personal-Details-Heading">Personal Details</p>
          <div className="personal-form-group">
            <div className="text-field">
              <p>First Name</p>
              <TextField
                fullWidth
                id="standard-basic"
                placeholder="Enter Your first name"
                variant="standard"
                value={form.firstName}
                onChange={(e) => {
                  handleForm('firstName', e.target.value);
                }}
              />
              {error?.firstName && (
                <p className="errorShow">{error.firstName}</p>
              )}
            </div>
            <div className="text-field">
              <p>Middle Name</p>
              <TextField
                fullWidth
                id="standard-basic"
                placeholder="Enter your middle name"
                variant="standard"
                value={form.middleName}
                onChange={(e) => {
                  handleForm('middleName', e.target.value);
                }}
              />
            </div>
            <div className="text-field">
              <p>Last Name</p>
              <TextField
                fullWidth
                id="standard-basic"
                placeholder="Enter your last name"
                variant="standard"
                value={form.lastName}
                onChange={(e) => {
                  handleForm('lastName', e.target.value);
                }}
              />
              {error?.lastName && (
                <p className="errorShow">{error.lastName}</p>
              )}
            </div>
            <div className="text-field dateOfBirth">
              <p>Date Of Birth</p>
              <DatePicker
                value={dayjs(form.dateOfBirth)}
                onChange={(e) => {
                  handleForm('dateOfBirth', e);
                }}
              />
              {error?.dateOfBirth && (
                <p className="errorShow">{error.dateOfBirth}</p>
              )}
            </div>
            <div className="text-field">
              <p>Gender</p>
              <select
                className="select-box"
                defaultValue={form.gender}
                onChange={(e) => {
                  handleForm('gender', e.target.value);
                }}
              >
                <option disabled selected value="">
                  -- Select an gender --{' '}
                </option>
                <option value={'Male'}>Male</option>
                <option value={'Female'}>Female</option>
              </select>
              {error?.gender && (
                <p className="errorShow">{error.gender}</p>
              )}
            </div>
            <div className="text-field">
              <p>School Name</p>
              <TextField
                fullWidth
                id="standard-basic"
                placeholder="Enter your School Name"
                variant="standard"
                value={form.schoolName}
                onChange={(e) => {
                  handleForm('schoolName', e.target.value);
                }}
              />
              {error?.schoolName && (
                <p className="errorShow">{error.schoolName}</p>
              )}
            </div>
            <div className="text-field">
              <p>Medium</p>
              <select
                className="select-box"
                defaultValue={form.medium}
                onChange={(e) => {
                  handleForm('medium', e.target.value);
                }}
              >
                <option disabled selected value="">
                  -- Select an medium --{' '}
                </option>
                <option value={'English'}>English</option>
                <option value={'Hindi'}>Hindi</option>
                <option value={'Punjabi'}>Punjabi</option>
              </select>
              {error?.medium && (
                <p className="errorShow">{error.medium}</p>
              )}
            </div>
            <div className="text-field">
              <p>Class</p>
              <select
                className="select-box"
                defaultValue={form.class}
                onChange={(e) => {
                  handleForm('class', e.target.value);
                }}
              >
                <option disabled selected value="">
                  -- Select an class --{' '}
                </option>
                <option value={'1'}>1</option>
                <option value={'2'}>2</option>{' '}
                <option value={'3'}>3</option>{' '}
                <option value={'4'}>4</option>{' '}
                <option value={'5'}>5</option>{' '}
                <option value={'6'}>6</option>{' '}
                <option value={'7'}>7</option>{' '}
                <option value={'8'}>8</option>{' '}
                <option value={'9'}>9</option>{' '}
                <option value={'10'}>10</option>{' '}
                <option value={'11'}>11</option>
                <option value={'12'}>12</option>
              </select>
              {error?.class && (
                <p className="errorShow">{error.class}</p>
              )}
            </div>
            <div className="text-field">
              <p>Register By</p>
              <select
                className="select-box"
                defaultValue={form.registerBy}
                onChange={(e) => {
                  handleForm('registerBy', e.target.value);
                }}
              >
                <option disabled selected value="">
                  -- Select an register --{' '}
                </option>
                <option value="Mahesh Sir">Mahesh Sir</option>
                <option value="Gulshan Sir">Gulshan Sir</option>
              </select>
              {error?.registerBy && (
                <p className="errorShow">{error.registerBy}</p>
              )}
            </div>
            <div className="text-field">
              <p>Unique Code</p>
              <TextField
                fullWidth
                id="standard-basic"
                placeholder="Enter unique code"
                variant="standard"
                value={form.referralCode}
                onChange={(e) => {
                  handleForm('referralCode', e.target.value);
                }}
              />
              {error?.referralCode && (
                <p className="errorShow">{error.referralCode}</p>
              )}
            </div>
          </div>
          <div>
            <img
              src={NextBtn}
              alt="Next"
              className="submitBtn"
              title="Next Button"
              onClick={() => {
                SubmitData();
              }}
            />
          </div>
        </LocalizationProvider>
      </section>
    </>
  );
};

export default StudentRegister;
