var numberOfAlternatingGroups = function (colors, k) {
  let count = 0;
  for (let i = 0; i < colors.length; i++) {
    if (isAlternate(colors, k, i)) count++;
  }
  return count;
};
const isAlternate = (colors, k, start) => {
  let n = colors.length;
  for (let i = 0; i < k - 1; i++) {
    if (colors[(i + start) % n] === colors[(i + start + 1) % n]) return false;
  }
  return true;
};

console.log(numberOfAlternatingGroups([0, 1, 0, 1, 0], 3));
// console.log(checkALternate([1, 0, 1, 0, 1]));
//time limit excede
