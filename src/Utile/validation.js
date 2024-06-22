export const personalValidation = (form, setError) => {
  if (
    form.firstName != '' &&
    form.lastName != '' &&
    form.dateOfBirth != '' &&
    form.gender != '' &&
    form.schoolName != '' &&
    form.medium != '' &&
    form.class != '' &&
    form.registerBy != '' &&
    form.referralCode != ''
  )
    return true;

  let error = {};
  if (form.firstName == '')
    error.firstName = 'This Field is Required';
  if (form.lastName == '') error.lastName = 'This Field is Required';
  if (form.dateOfBirth == '')
    error.dateOfBirth = 'This Field is Required';
  if (form.gender == '') error.gender = 'This Field is Required';
  if (form.schoolName == '')
    error.schoolName = 'This Field is Required';
  if (form.medium == '') error.medium = 'This Field is Required';
  if (form.class == '') error.class = 'This Field is Required';
  if (form.registerBy == '')
    error.registerBy = 'This Field is Required';
  if (form.referralCode == '')
    error.referralCode = 'This Field is Required';
  setError(error);
  return false;
};

export const contactValidation = (form, setError) => {
  if (
    form.email != '' &&
    form.mobile != '' &&
    form.addressLineOne != '' &&
    form.addressLineTwo != '' &&
    form.state != ''
  )
    return true;

  let error = {};
  if (form.email == '') error.email = 'This Field is Required';
  if (form.mobile == '') error.mobile = 'This Field is Required';
  if (form.addressLineOne == '')
    error.addressLineOne = 'This Field is Required';
  if (form.addressLineTwo == '')
    error.addressLineTwo = 'This Field is Required';
  if (form.state == '') error.state = 'This Field is Required';
  setError(error);
  return false;
};
