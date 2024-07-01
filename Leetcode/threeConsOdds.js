var threeConsecutiveOdds = function (arr) {
  let j = 0;
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      j = i + 1;
      counter = 0;
    } else counter += 1;

    if (counter === 3) return true;
  }
  return false;
};
