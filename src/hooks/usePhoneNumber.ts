import { useState, ChangeEvent } from 'react';

type UsePhoneNumberReturnType = [
  phoneNumber: string,
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
];

const formatPhoneNumber = (input: string): string => {
  const phoneNumberWithoutHyphen = input.replace(/-/g, '');
  const phoneNumberLength = phoneNumberWithoutHyphen.length;

  let formattedPhoneNumber = '';
  if (phoneNumberLength < 4) {
    formattedPhoneNumber = phoneNumberWithoutHyphen;
  } else if (phoneNumberLength < 7) {
    formattedPhoneNumber = `${phoneNumberWithoutHyphen.slice(
      0,
      3,
    )}-${phoneNumberWithoutHyphen.slice(3)}`;
  } else if (phoneNumberLength < 11) {
    formattedPhoneNumber = `${phoneNumberWithoutHyphen.slice(
      0,
      3,
    )}-${phoneNumberWithoutHyphen.slice(3, 6)}-${phoneNumberWithoutHyphen.slice(
      6,
    )}`;
  } else {
    formattedPhoneNumber = `${phoneNumberWithoutHyphen.slice(
      0,
      3,
    )}-${phoneNumberWithoutHyphen.slice(3, 7)}-${phoneNumberWithoutHyphen.slice(
      7,
      11,
    )}`;
  }

  return formattedPhoneNumber;
};

const usePhoneNumber = (): UsePhoneNumberReturnType => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const input = event.target.value;
    const formattedPhoneNumber = formatPhoneNumber(input);
    setPhoneNumber(formattedPhoneNumber);
  };

  return [phoneNumber, handleChange];
};

export default usePhoneNumber;
