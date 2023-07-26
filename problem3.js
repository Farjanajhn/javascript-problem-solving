const givenArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];

const maxValue = givenArray.reduce((previous, current, i, arr) =>
  arr.filter((item) => item === previous).length >
  arr.filter((item) => item === current).length
    ? previous
    : current
);

console.log(maxValue);

