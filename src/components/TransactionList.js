import React from "react";
import Transaction from "./Transaction";
const TransactionList = () => {
  return (
    <div className="List">
      <h3>History</h3>
      <ul className="list">
        <li className="minus">
          Cash <span>-$400</span>
          <button className="delete-btn">X</button>
        </li>
      </ul>
    </div>
  );
};

export default TransactionList;
