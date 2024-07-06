const funnyString = (input) => {
  for (let i = 1; i <= input.length; i++) {
    console.log(input.charCodeAt(i - 1));
    if (
      i % 2 !== 0 &&
      input.charCodeAt(i - 1) >= 65 &&
      input.charCodeAt(i - 1) <= 90
    )
      return "NO";
    if (
      i % 2 === 0 &&
      input.charCodeAt(i - 1) >= 97 &&
      input.charCodeAt(i - 1) <= 122
    )
      return "No";
  }
  return "Yes";
};
console.log(funnyString("fUnNy"));
