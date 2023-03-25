## useActiveList

```typescript
import { useState } from 'react';
import { updateActiveList } from '@/utils/array/array';

type ActivateIndexFunc = (index: number) => void;

const useActiveList = (init: boolean[]) => {
  const [activeList, setActiveList] = useState(init);

  const activateIndex: ActivateIndexFunc = index => {
    setActiveList(prevState => updateActiveList(prevState, index));
  };

  return [activeList, activateIndex];
};

export default useActiveList;

```

이 훅은 초기 활성 목록을 입력으로 받아서, 해당 목록을 상태로 관리하고, 인덱스를 활성화하는 함수를 반환합니다. 반환된 배열의 첫 번째 요소는 현재 활성 목록을 나타내는 boolean 배열이고, 두 번째 요소는 인덱스를 활성화하는 콜백 함수입니다.

위 코드에서는 init을 초기 값으로 전달하고, <code>useState<code/>를 사용하여 <code>activeList</code> 상태와 그 상태를 업데이트하는 setActiveList 함수를 생성합니다.


<code>activateIndex</code> 함수는 인덱스를 활성화하기 위해 <code>updateActiveList</code> 함수를 사용하여 <code>activeList</code>를 업데이트합니다.<br/> 
이 함수는 <code>useState</code>에서 생성한 <code>setActiveList<code/> 함수를 사용하여 <code>activeList</code> 상태를 업데이트합니다.