import { useState, ChangeEvent, useCallback } from 'react';

type UsePhoneNumberReturnType = {
  phoneNumber: string;
  onChangePhoneNumber: (event: ChangeEvent<HTMLInputElement>) => void;
};

const usePhoneNumber = (
  initialPhoneNumber: string,
): UsePhoneNumberReturnType => {
  const formatPhoneNumber = useCallback((input: string): string => {
    const phoneNumberWithoutHyphen = input.replace(/-/g, '');
    const phoneNumberLength = phoneNumberWithoutHyphen.length;

    if (phoneNumberLength < 4) {
      return phoneNumberWithoutHyphen;
    }
    if (phoneNumberLength < 7) {
      return `${phoneNumberWithoutHyphen.slice(
        0,
        3,
      )}-${phoneNumberWithoutHyphen.slice(3)}`;
    }
    if (phoneNumberLength < 11) {
      return `${phoneNumberWithoutHyphen.slice(
        0,
        3,
      )}-${phoneNumberWithoutHyphen.slice(
        3,
        6,
      )}-${phoneNumberWithoutHyphen.slice(6)}`;
    }
    return `${phoneNumberWithoutHyphen.slice(
      0,
      3,
    )}-${phoneNumberWithoutHyphen.slice(3, 7)}-${phoneNumberWithoutHyphen.slice(
      7,
      11,
    )}`;
  }, []);

  const [phoneNumber, setPhoneNumber] = useState<string>(() =>
    formatPhoneNumber(initialPhoneNumber),
  );

  const onChangePhoneNumber = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      const input = event.target.value;
      const formattedPhoneNumber = formatPhoneNumber(input);
      setPhoneNumber(formattedPhoneNumber);
    },
    [formatPhoneNumber],
  );

  return { phoneNumber, onChangePhoneNumber };
};

export default usePhoneNumber;
