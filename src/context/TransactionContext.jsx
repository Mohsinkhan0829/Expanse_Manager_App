import { createContext, useState } from "react";

const TransactionContext = createContext();


export const TransactionProvider = ({children}) => {
    const [transactions, SetTransactions] = useState([
    ]);

  // delete transaction

  const deleteTransaction = (id) => {
    if (window.confirm("Are you sure?")) {
      SetTransactions(
        transactions.filter((transactions => transactions.id !== id))
      )
    }
  }
  // save transaction

  const saveTransaction = (Text, Amount) => {
    const newTransaction = {
      id: crypto.randomUUID(),
      Text:Text,
      Amount:+Amount
    }
    SetTransactions([newTransaction, ...transactions])
  }


    return (
        <TransactionContext.Provider value={{ transactions , deleteTransaction , saveTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}



export default TransactionContext;