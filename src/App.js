import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeTracker from "./components/IncomeTracker";
import TransactionList from "./components/TransactionList";
import {
  GlobalContext,
  GlobalProvider,
} from "./components/Context/GlobalContext";
function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeTracker />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
