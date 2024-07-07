var numberOfAlternatingGroups = function (colors) {
  const arr = [colors[colors.length - 1], ...colors, colors[0]];
  let count = 0;
  let j = 1;
  let i = 0;

  while (j < arr.length - 1) {
    if (arr[i] !== arr[j] && arr[i] === arr[j + 1]) {
      count++;
      i++;
      j++;
    } else if (arr[i] === arr[j] || arr[j] === arr[j + 1]) {
      i++;
      j++;
    }
  }

  return count;
};
console.log(numberOfAlternatingGroups([0, 1, 0, 0, 1]));
