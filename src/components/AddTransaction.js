import React from "react";

const AddTransaction = () => {
  return (
    <div>
      <h3>Add new transaction</h3>
      <form>
        <label htmlFor="text">Text</label>
        <div className="form-control">
          <input type="text" placeholder="Enter text..." />
        </div>
        <label htmlFor="amount">
          Amount <br />
          (negative-expense,positive-income)
        </label>
        <div className="form-control">
          <input type="number" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
