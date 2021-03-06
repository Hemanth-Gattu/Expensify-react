import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses  } from './components/expenses';
import { TransactionsList } from './components/Transactionlist';
import {  AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider >
      <Header />
      <div className="container">
        <Balance />
        < IncomeExpenses />
        <TransactionsList />
        < AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
