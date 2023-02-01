import React from "react";
import { useContext } from "react";
import { GlobalContext } from "./Context/GlobalContext";
const inc = (arr) => {
  let income = 0;
  arr.forEach(({ amt }) => {
    if (amt > 0) income += amt;
  });
  return income;
};
const exp = (arr) => {
  let income = 0;
  arr.forEach(({ amt }) => {
    if (amt < 0) income += amt;
  });
  return Math.abs(income);
};
const IncomeTracker = () => {
  const { transactions } = useContext(GlobalContext);
  const income = inc(transactions).toFixed(2);
  const expense = exp(transactions).toFixed(2);
  console.log("inc", transactions);
  return (
    <div className="inc-exp-container">
      <div>
        <h2>INCOME</h2>
        <h2 className="money plus">${income}</h2>
      </div>
      <div>
        <div>
          <h2>EXPENSE</h2>
          <h2 className="money minus">${expense}</h2>
        </div>
      </div>
    </div>
  );
};

export default IncomeTracker;
