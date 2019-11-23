function printerError(s) {
  console.log(s);
  const regex = new RegExp("[n-z]", "gi");
  const matches = s.match(regex);
  const errors = !matches ? "0" : matches.length;
  const total = s.length;
  const prEr = `${errors}/${total}`;
  return prEr;
}
