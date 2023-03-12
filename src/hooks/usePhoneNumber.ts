import { useState, ChangeEvent, useCallback } from 'react';

type FormatPhoneNumberFunction = (input: string) => string;
type SetFormattedPhoneNumberFunction = (formattedPhoneNumber: string) => void;
type OnChangePhoneNumberFunction = (
  event: ChangeEvent<HTMLInputElement>,
) => void;
type UsePhoneNumberReturnType = {
  phoneNumber: string;
  onChangePhoneNumber: OnChangePhoneNumberFunction;
};

const usePhoneNumber = (
  initialPhoneNumber: string,
): UsePhoneNumberReturnType => {
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);

  const formatPhoneNumber: FormatPhoneNumberFunction = useCallback(input => {
    const phoneNumberWithoutHyphen = input.replace(/-/g, '');
    const phoneNumberLength = phoneNumberWithoutHyphen.length;
    const firstThreeDigits = phoneNumberWithoutHyphen.slice(0, 3);

    if (phoneNumberLength < 4) {
      return phoneNumberWithoutHyphen;
    }
    if (phoneNumberLength < 7) {
      return `${firstThreeDigits}-${phoneNumberWithoutHyphen.slice(3)}`;
    }
    if (phoneNumberLength < 11) {
      const middleDigits = phoneNumberWithoutHyphen.slice(3, 6);
      const lastDigits = phoneNumberWithoutHyphen.slice(6);
      return `${firstThreeDigits}-${middleDigits}-${lastDigits}`;
    }
    const secondGroupDigits = phoneNumberWithoutHyphen.slice(3, 7);
    const thirdGroupDigits = phoneNumberWithoutHyphen.slice(7, 11);
    return `${firstThreeDigits}-${secondGroupDigits}-${thirdGroupDigits}`;
  }, []);

  const setFormattedPhoneNumber: SetFormattedPhoneNumberFunction = useCallback(
    formattedPhoneNumber => {
      setPhoneNumber(formattedPhoneNumber);
    },
    [],
  );

  const onChangePhoneNumber: OnChangePhoneNumberFunction = useCallback(
    event => {
      const input = event.target.value;
      const formattedPhoneNumber = formatPhoneNumber(input);
      setFormattedPhoneNumber(formattedPhoneNumber);
    },
    [formatPhoneNumber, setFormattedPhoneNumber],
  );

  return { phoneNumber, onChangePhoneNumber };
};

export default usePhoneNumber;
