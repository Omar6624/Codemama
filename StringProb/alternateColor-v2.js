var numberOfAlternatingGroups = function (colors, k) {
  let num = 1;
  let count = 0;
  colors.push(...colors.slice(0, k - 1));

  for (let i = 1; i < colors.length; i++) {
    if (colors[i] !== colors[i - 1]) num++;
    else num = 1;
    if (num >= k) count++;
  }
  return count;
};
console.log(numberOfAlternatingGroups([0, 1, 0, 1, 0], 3));
