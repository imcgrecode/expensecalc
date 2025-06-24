import React, { useState, useEffect } from 'react';
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
    const rentAmount = parseFloat(rent.replace(/,/g, ''));
    const nfmStatementAmount = parseFloat(nfmStatement.replace(/,/g, ''));
    const amexStatementAmount = parseFloat(amexStatement.replace(/,/g, ''));
    const totalExpenses = rentAmount + nfmStatementAmount + amexStatementAmount;
    const fairShare = totalExpenses / 2;
    const youPaid = amexStatementAmount;
    const amountYouOweHer = fairShare - youPaid;
    const roundedTotalAmount = (
      Math.round(amountYouOweHer * 100) / 100
    ).toFixed(2);
    setTotal(roundedTotalAmount);
    setExpanded(true);
  }

  useEffect(() => {}, []);

  return (
    <div className={`box ${expanded ? 'expandedBox' : ''}`}>
      <Header heading="Expense Calculator" />
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
      <div
        className={`resultDivider ${expanded ? 'expandedResultDivider' : ''}`}
      ></div>
      <div
        className={`calculatorResult ${
          expanded ? 'expandedCalculatorResult' : ''
        }`}
      >
        <CalculatorResult total={total} />
      </div>
    </div>
  );
}

export default App;
