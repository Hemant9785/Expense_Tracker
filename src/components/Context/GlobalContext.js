import React, { createContext, useReducer } from "react";

const initialState = {
  transactions: [
    { id: 1, text: "Cash", amt: 500 },
    { id: 2, text: "Petrol", amt: -200 },
    { id: 3, text: "Cash", amt: 500 },
    { id: 4, text: "Grocery", amt: -300 },
    { id: 5, text: "Mohit ko diye", amt: -500 },
    { id: 6, text: "Salary", amt: +200 },
  ],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Add_New":
      return {
        ...state,
        transactions: [action.payLoad, ...state.transactions],
      };
    case "dlt":
      return {
        ...state,
        transactions: state.transactions.filter((elem) => {
          return elem.id !== action.payLoad;
        }),
      };

    default:
      return state;
  }
  //   return state;
};
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addTransaction = (transaction) => {
    dispatch({
      type: "Add_New",
      payLoad: transaction,
    });
  };
  const dltTransaction = (id) => {
    dispatch({
      type: "dlt",
      payLoad: id,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        dltTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
