function comp(array1, array2) {
  if (!array1 || !array2) return false;
  if (array1 === null || array2 === null) return false;
  var sortedArr1 = array1.sort((a, b) => (a > b ? 1 : -1));
  var sortedArr2 = array2.sort((a, b) => (a > b ? 1 : -1));

  return (
    sortedArr1.length === sortedArr2.length &&
    sortedArr1.every((value, index) => value * value === sortedArr2[index])
  );
}
