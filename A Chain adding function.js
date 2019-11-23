function add(n) {
  const sum = m => add(n + m);
  sum.valueOf = () => n;
  return sum;
}
