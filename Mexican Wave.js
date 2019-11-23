function wave(str) {
  const waveArray = [];

  for (let i = 0; i < str.length; i++) {
    const arr = str.split("");
    if (arr[i] === " ") {
      continue;
    }
    arr[i] = arr[i].toUpperCase();

    waveArray.push(arr.join(""));
  }
  console.log(waveArray);
  return waveArray;
}
