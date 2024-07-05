var longestPalindrome = function (s) {
  if (s.length <= 1) return s;
  let max = s[0];

  for (let i = 0; i < s.length; i++) {
    //odd length paligdrome  even length palingdrome
    let even = checkPalingdrome(s, i, i + 1);
    let odd = checkPalingdrome(s, i, i);
    console.log(even, "   ", odd);

    if (odd.length > max.length) max = odd;
    if (even.length > max.length) max = even;
  }

  return max;
};

const checkPalingdrome = (s, i, j) => {
  while (i >= 0 && j < s.length && s[i] === s[j]) {
    i--;
    j++;
  }
  console.log(i, j);
  return s.slice(i + 1, j);
};
console.log(longestPalindrome("babad"));
