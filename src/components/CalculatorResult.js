import React from 'react';

const CalculatorResult = ({ total }) => {
  if (total !== null) {
    if (isNaN(total)) {
      return (
        <>
          <p>Not enough information to calculate</p>
        </>
      );
    }
    if (total > 0) {
      return (
        <>
          <p>Ian owes Lindsey:</p>
          <div>${total}</div>
        </>
      );
    } else {
      const positiveTotal = Math.abs(total);
      return (
        <>
          <p>Lindsey owes Ian:</p>
          <div>${positiveTotal}</div>
        </>
      );
    }
  }
  return null;
};

export default CalculatorResult;
