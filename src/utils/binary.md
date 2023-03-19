## toIntFromBinary

``` typescript
const toIntFromBinary = (answers: boolean[]): number => {
  return answers.reduce(
    (prev, current, index) => 
      prev | (Number(current) << index),
    0,
  );
};

export default toIntFromBinary;
```

이 함수는 <code>reduce</code> 메서드를 사용하여 주어진 배열의 모든 요소를 처리합니다. <br/>
<code>boolean</code> 값은 0 또는 1의 값을 갖습니다. <br/>
이 값을 이진수의 자릿수에 해당하는 비트로 변환하여 32비트 정수로 만들고, <br/>
<code>|</code> 연산자를 사용하여 이전 비트를 유지하면서 현재 비트와 합쳐줍니다.