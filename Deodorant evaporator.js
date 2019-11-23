function evaporator(content, evap_per_day, threshold) {
  let percentage = 100;
  let result = 0;
  while (percentage > threshold) {
    percentage = percentage - percentage * (evap_per_day / 100);
    result++;
  }
  return result;
}
