import "./SummaryCards.css";

function SummaryCards({ expenses }) {

  const total = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const paid = expenses
    .filter((expense) => expense.paid)
    .reduce((sum, expense) => sum + expense.amount, 0);

  const pending = total - paid;

  const cards = [
    {
      title: "Total",
      value: total,
    },
    {
      title: "Pagado",
      value: paid,
    },
    {
      title: "Pendiente",
      value: pending,
    },
  ];

  return (
    <section className="summary-cards">

      {cards.map((card) => (

        <div
          key={card.title}
          className="summary-card"
        >
          <p>{card.title}</p>

          <h2>
            ${card.value.toLocaleString()}
          </h2>
        </div>

      ))}

    </section>
  );

}

export default SummaryCards;