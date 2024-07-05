var shortestPalindrome = function (input) {
  let i = 0;
  let n = input.length;
  for (let j = n - 1; j >= 0; j--) {
    if (input[i] === input[j]) i++;
  }
  if (i === n) return input;

  let sub = input.substring(i);
  console.log(sub);
  return reverseString(sub) + shortestPalindrome(input.substring(0, i)) + sub;
};
const reverseString = (string) => {
  return string.split("").reverse().join("");
};
console.log(shortestPalindrome("aacecaaa"));
