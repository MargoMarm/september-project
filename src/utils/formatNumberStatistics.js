function formatNumber(number) {
  if (number >= 1e6) {
    return (number / 1e6).toFixed(1) + 'M';
  } else if (number >= 1e3) {
    return (number / 1e3).toFixed(1) + 'K';
  } else {
    return number.toString();
  }
}

export default formatNumber;
