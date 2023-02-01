import React from "react";

const Transaction = ({ Transaction, dltTransaction }) => {
  const sign = Transaction.amt > 0 ? "+" : "-";
  return (
    <li className={`${sign === "+" ? "plus" : "minus"}`}>
      {Transaction.text}
      <span>
        {sign}${Math.abs(Transaction.amt).toFixed(2)}
      </span>
      <button
        className="delete-btn"
        onClick={() => dltTransaction(Transaction.id)}
      >
        X
      </button>
    </li>
  );
};

export default Transaction;
