import './App.css';
import Header from './components/Header';
import Infos from './components/Infos';
import Inputs from './components/Inputs';
import Outputs from './components/Outputs';
import Transaction from './components/Transaction';
import { useEffect, useState } from 'react';

function App() {

  const [transactions, setTransactions] = useState([]);
  const [incomes, setIncomes] = useState(0);
  const [outcomes, setOutcomes] = useState(0);
  const [total, setTotal] = useState(incomes - outcomes);

  useEffect(() => {
    let savedData = localStorage.getItem('transactions');
    if(savedData){
      setTransactions(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    let totalIncomes = 0;
    let totalOutcomes = 0;

    transactions.forEach(transaction => {
      if(transaction.type === 'income'){
        totalIncomes += transaction.value;
      }else{
        totalOutcomes += transaction.value;
      }
    });

    setIncomes(totalIncomes);
    setOutcomes(totalOutcomes);
    localStorage.setItem('transactions', JSON.stringify(transactions));

  }, [transactions]);

  useEffect(() => {
      setTotal(incomes - outcomes);
  }, [incomes, outcomes]);

  function addTransaction(desc, value, type){
    let newTransaction = new Transaction(desc, value, type);
    setTransactions([newTransaction, ...transactions]);
  }

  function deleteTransaction(id) {
    let newTransactions = transactions.filter(transaction => transaction.id !== id);
    setTransactions(newTransactions);
  }

  return (
    <div className='App'>
      <Header />
      <Infos incomes={incomes} outcomes={outcomes} total={total} />
      <Inputs addTransaction={addTransaction} />
      <Outputs transactions={transactions} deleteTransaction={deleteTransaction} />
    </div>
  );
}

export default App;