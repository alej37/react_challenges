function occurrences(text, word) {
  let sum = 0;
  text.toLowerCase().split(' ').forEach((w) => {
    if (w === word) {
      sum += 1;
    }
  });
  return sum;
}

module.exports = occurrences;
