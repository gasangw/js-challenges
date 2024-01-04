function sumUpTo(n) {
  if (n === 1) {
    return 1;
  }

  // Recursive case - when n is greater than 1, we return the sum of n and sumUpTo(n - 1)
  return n + sumUpTo(n - 1);
}

module.exports = sumUpTo;
