import usePhoneNumber from '@/hooks/usePhoneNumber';

const PhoneNumber = () => {
  const { phoneNumber, onChangePhoneNumber } = usePhoneNumber('01012341234');
  return (
    <>
      <h1>핸드폰 번호</h1>
      <div>
        <input type="text" value={phoneNumber} onChange={onChangePhoneNumber} />
      </div>
    </>
  );
};

export default PhoneNumber;
