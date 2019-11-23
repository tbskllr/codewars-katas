function findEvenIndex(arr) {
  if (arr.length === 1) return 0;
  if (arr[0] === arr.slice(0).reduce((a, b) => a + b)) {
    return 0;
  }
  var arr2 = arr.slice();
  arr2.pop();
  console.log(arr2);
  if (arr2.reduce((a, b) => a + b) === 0) return arr.length - 1;
  for (let i = 1; i < arr.length - 1; i++) {
    if (
      arr.slice(0, i).reduce((a, b) => a + b) ===
      arr.slice(i + 1).reduce((a, b) => a + b)
    ) {
      return i;
    }
  }
  return -1;
}
