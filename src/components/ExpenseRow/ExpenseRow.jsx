import "./ExpenseRow.css";

function ExpenseRow({ expense, onTogglePin, onUpdate }) {

  return (
    <div className="expense-row">


      <div className="expense-name">

        <span
          className="color-dot"
          style={{ background: expense.color }}
        />

        <input
          value={expense.name}
          onChange={(e) =>
            onUpdate(
              expense.id,
              "name",
              e.target.value
            )
          }
        />

      </div>



      <div className="expense-amount">

        <input
          type="number"
          value={expense.amount}
          onChange={(e) =>
            onUpdate(
              expense.id,
              "amount",
              e.target.value
            )
          }
        />


        <span
          className="pin"
          onClick={() =>
            onTogglePin(
              expense.id,
              "pinnedAmount"
            )
          }
          style={{
            color: expense.pinnedAmount
              ? "#E5484D"
              : "#bbb"
          }}
        >
          📌
        </span>

      </div>




      <div className="expense-date">

        <input
          type="date"
          value={expense.date}
          onChange={(e) =>
            onUpdate(
              expense.id,
              "date",
              e.target.value
            )
          }
        />


        <span
          className="pin"
          onClick={() =>
            onTogglePin(
              expense.id,
              "pinnedDate"
            )
          }
          style={{
            color: expense.pinnedDate
              ? "#E5484D"
              : "#bbb"
          }}
        >
          📌
        </span>

      </div>


    </div>
  );
}


export default ExpenseRow;