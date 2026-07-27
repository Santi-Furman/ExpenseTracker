import { useState } from "react";
import "./ExpenseTable.css";
import defaultExpenses from "../../data/defaultExpenses";
import ExpenseRow from "../ExpenseRow/ExpenseRow";

function ExpenseTable() {

  const [expenses, setExpenses] = useState(defaultExpenses);
  const [sortBy, setSortBy] = useState(null);

  function togglePin(id, field) {
    setExpenses((prev) =>
      prev.map((expense) =>
        expense.id === id
          ? {
              ...expense,
              [field]: !expense[field]
            }
          : expense
      )
    );
  }

  function togglePaid(id) {
    setExpenses((prev) =>
      prev.map((expense) =>
        expense.id === id
          ? {
              ...expense,
              paid: !expense.paid
            }
          : expense
      )
    );
  }

  function updateExpense(id, field, value) {
    setExpenses((prev) =>
      prev.map((expense) =>
        expense.id === id
          ? {
              ...expense,
              [field]: value
            }
          : expense
      )
    );
  }

  function sortExpenses(list) {

    if (sortBy === "amount") {
      return [...list].sort((a, b) => b.amount - a.amount);
    }

    if (sortBy === "date") {
      return [...list].sort((a, b) => a.date.localeCompare(b.date));
    }

    return list;
  }

  const pendingExpenses = sortExpenses(
    expenses.filter((expense) => !expense.paid)
  );

  const paidExpenses = sortExpenses(
    expenses.filter((expense) => expense.paid)
  );


  function addExpense() {

  const newExpense = {
    id: Date.now(),
    name: "",
    amount: 0,
    date: new Date().toISOString().split("T")[0],
    paid: false,
    color: "#6C63FF",
    pinnedAmount: false,
    pinnedDate: false,
  };

  setExpenses((prev) => [...prev, newExpense]);

  }
  return (
    <section className="expense-table">

      <h2>Gastos</h2>

      <div className="expense-header">
        <span></span>
        <span>Nombre</span>
        <span>Monto</span>
        <span>Fecha</span>
      </div>

      <div className="sort-buttons">
        <button onClick={() => setSortBy("date")}>
          Día
        </button>

        <button onClick={() => setSortBy("amount")}>
          Monto
        </button>
      </div>

      <h3 className="section-title">
        Pendientes
      </h3>

      {pendingExpenses.map((expense) => (
        <ExpenseRow
          key={expense.id}
          expense={expense}
          onTogglePin={togglePin}
          onTogglePaid={togglePaid}
          onUpdate={updateExpense}
        />
      ))}

      <h3 className="section-title paid-title">
        Pagados
      </h3>

      {paidExpenses.map((expense) => (
        <ExpenseRow
          key={expense.id}
          expense={expense}
          onTogglePin={togglePin}
          onTogglePaid={togglePaid}
          onUpdate={updateExpense}
        />
      ))}


      <button
        className="add-expense"
        onClick={addExpense}
      >
        + Agregar gasto
      </button>
    </section>

    
  );
}


export default ExpenseTable;