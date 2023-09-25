import React, { useContext, useState } from "react";
import TransactionContext from "../context/TransactionContext";

const MainSection =()=>{
const {transactions, saveTransaction } = useContext(TransactionContext);


  const balance= transactions.reduce((p,c)=>{
    return p + c.Amount;
  },0)

  const [Text, setText] = useState("");
  const [ Amount,setAmount] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault(),
    saveTransaction(Text , Amount)
    setText("");
    setAmount("");
  }

    return(
        <div className="main-section">

        <div id="current-bal" className="balance"> 
          <span>
            <p>Current Balance</p>
            <h1>₹{balance}</h1>
          </span>
          <i className="fa-solid fa-wallet"></i>
        </div>

        <form className="transaction-form" onSubmit={handleSubmit} >
          <input type="text" placeholder="Enter Your Transaction" 
          value={Text} 
          onChange={(e)=> setText(e.target.value)} />
          <input type="number" placeholder="Enter Amount" 
          value={Amount} 
          onChange={(e)=> setAmount(e.target.value)} />
          <button>Save Transaction<i className="fa-solid fa-floppy-disk"></i></button>
        </form>

      </div>

    )
}

export default MainSection;