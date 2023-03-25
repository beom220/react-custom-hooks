## Array 

### getNextActiveIndex

``` typescript
const getNextActiveIndex = (currentIndex: number, maxIndex: number) => {
  return (currentIndex + 1) % maxIndex;
};
```

이 함수는 현재 인덱스와 최대 인덱스를 입력으로 받아서 다음 활성 인덱스를 계산하는 함수입니다.<br/> 
현재 인덱스에 1을 더하고 최대 인덱스로 나눈 나머지가 다음 활성 인덱스가 됩니다. <br/>
이를 통해 인덱스가 최대 인덱스에 도달하면 다시 첫 번째 인덱스로 돌아갑니다.

예를 들어, <br/>
<code>getNextActiveIndex(0, 3)</code>은 1을 반환하고, <br/>
<code>getNextActiveIndex(2, 5)</code>는 3을 반환합니다.

### updateActiveList

``` typescript
const updateActiveList = (prevActiveList: boolean[], index: number) => {
  return prevActiveList.map((value, i) => i === index);
};
```

이 함수는 이전 활성 목록과 인덱스를 입력으로 받아서 새로운 활성 목록을 반환하는 함수입니다. <br/>
이전 활성 목록에서 주어진 인덱스에 해당하는 항목만 <code>true</code> 이고 나머지는 <code>false</code> 인 새로운 목록을 반환합니다.

예를 들어,<br/> 
<code>updateActiveList([false, false, false], 1)</code>는 <br/>
<code>[false, true, false]<code/>를 반환합니다.

