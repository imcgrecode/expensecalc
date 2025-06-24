import React from 'react';

const CalculatorResult = ({ total }) => {
  if (total !== null) {
    if (total > 0) {
      return (
        <>
          <div className="resultContainer">
            <p className="resultDescription">Ian owes Lindsey:</p>
            <h2 className="resultTotal">${total}</h2>
          </div>
        </>
      );
    } else {
      const positiveTotal = Math.abs(total);
      return (
        <>
          <div className="resultContainer">
            <p className="resultDescription">Lindsey owes Ian:</p>
            <h2 className="resultTotal">${positiveTotal}</h2>
          </div>
        </>
      );
    }
  }
  return null;
};

export default CalculatorResult;
