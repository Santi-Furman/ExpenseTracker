import { useState } from "react";

import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import SummaryCards from "./components/SummaryCards/SummaryCards";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";

import defaultExpenses from "./data/defaultExpenses";

function App() {

  const [expenses, setExpenses] = useState(defaultExpenses);

  return (
    <Layout>

      <Header />

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