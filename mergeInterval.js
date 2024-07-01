function main(input) {
  /**
   * Write JavaScript code from here
   */
  console.log(input);
}

let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  main(input.trim());
});
