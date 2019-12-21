// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = "") {
  const midpoint = Math.floor((n * 2 - 1) / 2);
  if (n === row) {
    return;
  }
  if (level.length === n * 2 - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  const add =
    midpoint - row <= level.length && midpoint + row >= level.length
      ? "#"
      : " ";
  pyramid(n, row, level + add);
}

module.exports = pyramid;

// const midpoint = Math.floor((2 * n - 1) / 2);
// for (let row = 0; row < n; row++) {
//   let level = "";
//   for (let line = 0; line < n * 2 - 1; line++) {
//     if (midpoint - row <= line && midpoint + row >= line) {
//       level += "#";
//     } else {
//       level += " ";
//     }
//   }
//   console.log(level);
// }
