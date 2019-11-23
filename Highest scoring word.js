function high(x) {
  var arr = x.split(" ");
  var abc = "_abcdefghijklmnopqrstuvwxyz";

  var arr2 = arr.map(word => {
    let total = 0;
    for (let i = 0; i < word.length; i++) {
      console.log(abc.indexOf(word[i]));
      total = total + abc.indexOf(word[i]);
    }
    return total;
  });

  return arr[arr2.indexOf(Math.max(...arr2))];
}
