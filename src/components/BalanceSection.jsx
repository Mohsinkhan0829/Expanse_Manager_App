import React, { useContext } from "react";
import TransactionContext from "../context/TransactionContext";

const BalanceSection = () => {
    const {transactions} = useContext(TransactionContext)
    const income = transactions
        .filter(transaction => transaction.Amount > 0)
        .reduce((p, c) => p + c.Amount, 0);

    const expense = transactions
    .filter(transactions => transactions.Amount < 0)
    .reduce((p,c)=> p + c.Amount,0);
    return (
        <div id="current-status" className="main-section">
            <div id="income" className="balance">
                <span>
                    <p>Current Income</p>
                    <h1>₹{income}</h1>
                </span>
            </div>

            <div id="expense" className="balance">
                <span>
                    <p>Current Expense</p>
                    <h1>₹{expense}</h1>
                </span>
            </div>
        </div >
    )
}

export default BalanceSection;