import React from "react";

const IncomeTracker = () => {
  return (
    <div className="inc-exp-container">
      <div>
        <h2>INCOME</h2>
        <h2 className="money plus">$500.00</h2>
      </div>
      <div>
        <div>
          <h2>EXPENSE</h2>
          <h2 className="money minus">$240.00</h2>
        </div>
      </div>
    </div>
  );
};

export default IncomeTracker;
