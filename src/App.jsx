import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import MonthSelector from "./components/MonthSelector/MonthSelector";
import SummaryCards from "./components/SummaryCards/SummaryCards";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";

import defaultExpenses from "./data/defaultExpenses";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {

  const [expenses, setExpenses] = useLocalStorage(
    "expenses",
    defaultExpenses
  );

  return (
    <Layout>

      <Header />

      <MonthSelector />

      <SummaryCards
        expenses={expenses}
      />

      <ExpenseTable
        expenses={expenses}
        setExpenses={setExpenses}
      />

    </Layout>
  );
}

export default App;