const getNextActiveIndex = (currentIndex: number, maxIndex: number) => {
  return (currentIndex + 1) % maxIndex;
};

const updateActiveList = (prevActiveList: boolean[], index: number) => {
  return prevActiveList.map((value, i) => i === index);
};

export { getNextActiveIndex, updateActiveList };
