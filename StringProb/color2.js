var numberOfAlternatingGroups = function (colors) {
  let n = colors.length;

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (
      colors[(i - 1) % n < 0 ? n - 1 : (i - 1) % n] !== colors[i % n] &&
      colors[i % n] !== colors[(i + 1) % n]
    )
      count++;
  }
  return count;
};
console.log(numberOfAlternatingGroups([0, 1, 0]));
