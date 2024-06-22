import React, { useState } from 'react';
import SubmitBtn from '../Asserts/Images/Frame 14.png';
import OTPInput from '../Components/otmComponent';

const StudentRegister = ({ SubmitOtp }) => {
  const [otp, setOtp] = useState();
  const handleForm = (value) => {
    setOtp(value);
  };
  const handleSubmitOtp = () => {
    document.getElementById('otp').style.backgroundColor =
      'rgb(246, 130, 31)';
    SubmitOtp(otp);
  };
  return (
    <>
      <section>
        <p className="Personal-Details-Heading">OTP Verification</p>
        <p>
          A One-Time Password has been sent to XXXXXXXX83 and
          leaXXXXXXXXXXX@gmail.com
        </p>
        <div className="Otp-verify">
          <p>
            <b>OTP</b>
          </p>
          <OTPInput handleForm={handleForm} />
          <div className="resed-otp">
            {/* <p>
              <b id='timer'>{'23:23'}</b>
            </p> */}
            <p>Resent OTP</p>
          </div>
        </div>
        <div className="nextBtn">
          <img
            src={SubmitBtn}
            alt="Submit"
            title="Submit Button"
            className="submitBtn"
            onClick={() => handleSubmitOtp()}
          />
        </div>
      </section>
    </>
  );
};

export default StudentRegister;
