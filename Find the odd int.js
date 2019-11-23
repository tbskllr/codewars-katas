function findOdd(A) {
  const counter = A.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 0;
    }
    acc[curr]++;
    return acc;
  }, {});
  console.log(counter);
  const counterArray = Object.values(counter);
  console.log(counterArray);
  const index = counterArray.findIndex(x => x % 2 == 1);
  const keysArray = Object.keys(counter);
  return parseInt(keysArray[index]);
}
