import "./MonthSelector.css";
import { useState } from "react";

function MonthSelector() {

  const [date, setDate] = useState(new Date());

  function previousMonth() {
    setDate(
      new Date(
        date.getFullYear(),
        date.getMonth() - 1,
        1
      )
    );
  }

  function nextMonth() {
    setDate(
      new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        1
      )
    );
  }

  const month = date.toLocaleDateString("es-ES", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="month-selector">

      <button onClick={previousMonth}>
        ‹
      </button>

      <h2>{month}</h2>

      <button onClick={nextMonth}>
        ›
      </button>

    </div>
  );
}

export default MonthSelector;