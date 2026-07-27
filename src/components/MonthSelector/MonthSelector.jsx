import "./MonthSelector.css";


function MonthSelector({ month, onChangeMonth }) {


  const monthName = month.toLocaleDateString(
    "es-ES",
    {
      month: "long",
      year: "numeric",
    }
  );


  return (

    <div className="month-selector">


      <button onClick={() => onChangeMonth(-1)}>
        ‹
      </button>


      <h2>
        {monthName}
      </h2>


      <button onClick={() => onChangeMonth(1)}>
        ›
      </button>


    </div>

  );

}


export default MonthSelector;