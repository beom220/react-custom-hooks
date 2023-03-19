const toIntFromBinary = (answers: boolean[]): number => {
  return answers.reduce(
    (prev, current, index) =>
      // eslint-disable-next-line no-bitwise
      prev | (Number(current) << index),
    0,
  );
};

export default toIntFromBinary;
