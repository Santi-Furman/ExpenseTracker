import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import MonthSelector from "./components/MonthSelector/MonthSelector";
import SummaryCards from "./components/SummaryCards/SummaryCards";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";

import defaultExpenses from "./data/defaultExpenses";
import useLocalStorage from "./hooks/useLocalStorage";

import { useState } from "react";
import { getMonthKey } from "./utils/monthUtils";


function App() {

  const [expensesByMonth, setExpensesByMonth] = useLocalStorage(
    "expenses",
    {
      "2026-07": defaultExpenses
    }
  );


  const [month, setMonth] = useState(
    new Date()
  );


  const monthKey = getMonthKey(month);


  const expenses = expensesByMonth[monthKey] || [];


  function changeMonth(amount) {

    setMonth(
      new Date(
        month.getFullYear(),
        month.getMonth() + amount,
        1
      )
    );

  }


  function setExpenses(update) {

  setExpensesByMonth((prev) => {

    const currentExpenses = prev[monthKey] || [];

    const newExpenses =
      typeof update === "function"
        ? update(currentExpenses)
        : update;


    return {
      ...prev,
      [monthKey]: newExpenses
    };

  });

}


  return (
    <Layout>

      <Header />

      <MonthSelector
        month={month}
        onChangeMonth={changeMonth}
      />


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