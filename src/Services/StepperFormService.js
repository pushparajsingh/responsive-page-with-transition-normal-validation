export const stepperFormService = async (form) => {
  try {
    const response = await fetch(
      'http://learnachieveapi.dollopinfotech.com/user/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

export const otpSubmit = async (value) => {
  try {
    const response = await fetch(
      'http://learnachieveapi.dollopinfotech.com/user/verify-otp-registration',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW1wX2lkIjoiNjY2N2U5NGMxYTI5NDVhOTUxNjdiNGU0IiwiaWF0IjoxNzE4MDg1OTY0LCJleHAiOjE3MTgxNzIzNjR9.gQN0fnsp7FBPkL5_NN67NfhGdCcGiMKN9O2ftPh27EM`,
        body: JSON.stringify(value),
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};
