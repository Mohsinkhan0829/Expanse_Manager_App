import { useContext } from 'react';
import{FaTrash} from 'react-icons/fa'
import TransactionContext from '../context/TransactionContext';

const ListItem =({transaction })=>{
  const {deleteTransaction}= useContext(TransactionContext)
    return(
        <li className="list-item">
        <span>
          <h3 className={
            transaction.Amount > 0 ? "income-transaction" : "expense-transaction"
          }>₹{transaction.Amount}</h3>
          <h4>{transaction.Text}</h4>
        </span>
        <button className="delbtn" onClick={()=>deleteTransaction(transaction.id)}>
          <FaTrash />
        </button>
      </li>
    )

}

export default ListItem;