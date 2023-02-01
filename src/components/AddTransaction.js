import React from "react";
import { GlobalContext } from "./Context/GlobalContext";
import { useContext, useState } from "react";
const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);
  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction({
      id: Math.floor(Math.random() * 10000) + 1,
      text: text,
      amt: Number(amount),
    });
    setText("");
    setAmount("");
  };
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={submitHandler}>
        <label htmlFor="text">Text</label>
        <div className="form-control">
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <label htmlFor="amount">
          Amount <br />
          (negative-expense,positive-income)
        </label>
        <div className="form-control">
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn">
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
