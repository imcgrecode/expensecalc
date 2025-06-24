import React from 'react';
import useFocus from '../hooks/useFocus';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';

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
  const rentInput = useFocus();
  const amexStatementInput = useFocus();
  const nfmStatementInput = useFocus();

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <div className="formControl">
        <TextField
          id="rent"
          name="rent"
          type="text"
          label="Rent (Lindsey)"
          placeholder="Rent"
          value={rent}
          onChange={(e) => setRent(formatNumber(e.target.value))}
          InputProps={{
            startAdornment: rentInput.isFocused && (
              <InputAdornment position="start">$</InputAdornment>
            ),
          }}
          InputLabelProps={{
            required: rentInput.isFocused ? true : false,
          }}
          onFocus={rentInput.handleFocus}
          onBlur={() => rentInput.handleBlur(rent)}
          required
          className="textField"
        />
      </div>
      <div className="formControl">
        <TextField
          id="amexStatement"
          name="amexStatement"
          type="text"
          label="AMEX Statement (Ian)"
          placeholder="AMEX Statement"
          value={amexStatement}
          onChange={(e) => setAmexStatement(formatNumber(e.target.value))}
          InputProps={{
            startAdornment: amexStatementInput.isFocused && (
              <InputAdornment position="start">$</InputAdornment>
            ),
          }}
          InputLabelProps={{
            required: amexStatementInput.isFocused ? true : false,
          }}
          onFocus={amexStatementInput.handleFocus}
          onBlur={() => amexStatementInput.handleBlur(amexStatement)}
          required
          className="textField"
        />
      </div>
      <div className="formControl">
        <TextField
          id="nfmStatement"
          name="nfmStatement"
          type="text"
          label="NFM Statement (Lindsey)"
          placeholder="NFM Statement"
          value={nfmStatement}
          onChange={(e) => setNfmStatement(formatNumber(e.target.value))}
          InputProps={{
            startAdornment: nfmStatementInput.isFocused && (
              <InputAdornment position="start">$</InputAdornment>
            ),
          }}
          InputLabelProps={{
            required: nfmStatementInput.isFocused ? true : false,
          }}
          onFocus={nfmStatementInput.handleFocus}
          onBlur={() => nfmStatementInput.handleBlur(nfmStatement)}
          required
          className="textField"
        />
      </div>
      <Button
        type="submit"
        variant="contained"
        sx={{ width: '40%' }}
        size="large"
        className="button"
      >
        Calculate
      </Button>
    </form>
  );
};

export default CalculatorForm;
