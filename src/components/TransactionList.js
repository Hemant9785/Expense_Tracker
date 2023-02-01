import React, { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "./Context/GlobalContext";
const TransactionList = () => {
  const { transactions, dltTransaction } = useContext(GlobalContext);
  return (
    <div className="List">
      <h3>History</h3>
      <ul className="list">
        {transactions.map((tran) => {
          return (
            <Transaction
              key={Transaction.id}
              dltTransaction={dltTransaction}
              Transaction={tran}
            ></Transaction>
          );
        })}
      </ul>
    </div>
  );
};

export default TransactionList;
