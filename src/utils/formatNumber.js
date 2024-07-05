const formatNumber = (value) => {
  const cleanedValue = value.replace(/[^\d]/g, '');

  let integerPart = cleanedValue.slice(0, -2);
  let decimalPart = cleanedValue.slice(-2);

  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  let formattedValue = integerPart;
  if (decimalPart) {
    formattedValue += '.' + decimalPart;
  }

  return formattedValue;
};

export default formatNumber;
