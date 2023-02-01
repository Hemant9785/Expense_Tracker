import React from "react";
import { GlobalContext } from "./Context/GlobalContext";
import { useContext } from "react";
const Balance = () => {
  let bal = 0;
  const { transactions } = useContext(GlobalContext);
  transactions.forEach(({ amt }) => {
    bal += amt;
  });
  return (
    <div>
      <h3>YOUR BALANCE</h3>
      <h1>${bal.toFixed(2)}</h1>
    </div>
  );
};

export default Balance;
