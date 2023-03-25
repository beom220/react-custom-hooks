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
