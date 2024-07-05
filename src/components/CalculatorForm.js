import React from 'react';

const CalculatorForm = ({
  handleSubmit,
  formatNumber,
  rent,
  setRent,
  amexStatement,
  setAmexStatement,
  nfmStatement,
  setNfmStatement,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="formControl">
        <label htmlFor="Rent">Rent:</label>
        <input
          required
          type="text"
          id="rent"
          name="rent"
          placeholder="Enter placeholder..."
          value={rent}
          onChange={(e) => setRent(formatNumber(e.target.value))}
        />
      </div>
      <div className="formControl">
        <label htmlFor="amexStatement">AMEX Statement:</label>
        <input
          required
          type="text"
          id="amexStatement"
          name="amexStatement"
          placeholder="Enter placeholder..."
          value={amexStatement}
          onChange={(e) => setAmexStatement(formatNumber(e.target.value))}
        />
      </div>
      <div className="formControl">
        <label htmlFor="nfmStatement">NFM Statement:</label>
        <input
          required
          type="text"
          id="nfmStatement"
          name="nfmStatement"
          placeholder="Enter placeholder..."
          value={nfmStatement}
          onChange={(e) => setNfmStatement(formatNumber(e.target.value))}
        />
      </div>
      <button className="btn">Calculate</button>
    </form>
  );
};

export default CalculatorForm;
