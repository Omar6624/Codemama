const maxF = (input) => {
  let max = 0;
  let maxChar = input[0];
  const map = {};
  for (let i = 0; i < input.length; i++) {
    if (input[i] in map) map[input[i]]++;
    else map[input[i]] = 1;

    if (map[input[i]] > max) {
      max = map[input[i]];
      maxChar = input[i];
    } else if (
      map[input[i]] === max &&
      input.charCodeAt(i) < input.charCodeAt(input.indexOf(maxChar))
    ) {
      max = map[input[i]];
      maxChar = input[i];
    }
  }
  return [maxChar, max];
};

console.log(maxF("cdaabb"));
