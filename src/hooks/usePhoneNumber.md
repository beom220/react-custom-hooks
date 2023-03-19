## usePhoneNumber

``` typescript
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
```

이 Custom Hook은 input 요소의 <code>onChange</code> 이벤트 핸들러로 사용됩니다.<br/>

<code>formatPhoneNumber</code> 함수는 전화번호 입력값을 정해진 형식에 맞게 변환해주는 함수입니다. <br/>
이 함수는 input을 인자로 받아와 전화번호 입력값을 정해진 형식에 맞게 변환한 후 반환합니다. <br/>


<code>setFormattedPhoneNumber</code> 함수는 setPhoneNumber 함수를 래핑한 함수로, <br/>
입력된 전화번호를 정해진 형식에 맞게 변환하여 setPhoneNumber 함수를 호출합니다. <br/>
이 함수는 formattedPhoneNumber을 인자로 받아와 setPhoneNumber 함수를 호출합니다. <br/>

<code>onChangePhoneNumber</code> 함수는 input 요소의 onChange 이벤트 핸들러로 사용됩니다. <br/>
입력된 전화번호를 formatPhoneNumber 함수를 이용하여 정해진 형식에 맞게 변환하고, <br/>
변환된 값을 setFormattedPhoneNumber 함수를 이용하여 phoneNumber 상태값으로 설정합니다. <br/>
이 함수는 event를 인자로 받아와 event.target.value를 이용하여 입력된 전화번호를 추출합니다.

