import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import CalculatorForm from './components/CalculatorForm';
import CalculatorResult from './components/CalculatorResult';
import formatNumber from './utils/formatNumber';

function App() {
  const [rent, setRent] = useState('');
  const [amexStatement, setAmexStatement] = useState('');
  const [nfmStatement, setNfmStatement] = useState('');
  const [total, setTotal] = useState(null);
  const [expanded, setExpanded] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const rentAmount = parseFloat(rent.replace(/,/g, '')) / 2 + 75;
    const amexStatementAmount = parseFloat(amexStatement.replace(/,/g, '')) / 2;
    const nfmStatementAmount = parseFloat(nfmStatement.replace(/,/g, '')) / 2;
    const totalAmount = rentAmount - amexStatementAmount + nfmStatementAmount;
    const roundedTotalAmount = Math.round(totalAmount * 100) / 100;
    setTotal(roundedTotalAmount);
    setExpanded(true);
  }

  return (
    <div className={`box ${expanded ? 'expanded' : ''}`}>
      <Header heading="Expense Tracker" />
      <CalculatorForm
        handleSubmit={handleSubmit}
        formatNumber={formatNumber}
        rent={rent}
        setRent={setRent}
        amexStatement={amexStatement}
        setAmexStatement={setAmexStatement}
        nfmStatement={nfmStatement}
        setNfmStatement={setNfmStatement}
      />
      <CalculatorResult total={total} />
    </div>
  );
}

export default App;
