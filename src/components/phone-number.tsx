import usePhoneNumber from '@/hooks/usePhoneNumber';
import isPhoneNumberValid from '@/utils/phone';

const PhoneNumber = () => {
  const { phoneNumber, onChangePhoneNumber } = usePhoneNumber('');

  return (
    <>
      <h1>핸드폰 번호</h1>
      <div>
        <input type="text" value={phoneNumber} onChange={onChangePhoneNumber} />
        <input
          type="button"
          value="검사"
          onClick={() => alert(isPhoneNumberValid(phoneNumber))}
        />
      </div>
    </>
  );
};

export default PhoneNumber;
