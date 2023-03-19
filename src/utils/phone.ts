const isPhoneNumberValid = (phoneNumber: string): boolean => {
  const phoneNumberWithoutHyphen = phoneNumber.replace(/\D/g, '');
  const regex = /^(010)(\d{8})$|^01([1|6|7|8|9])(\d{7,8})$/;
  return regex.test(phoneNumberWithoutHyphen);
};

export default isPhoneNumberValid;
