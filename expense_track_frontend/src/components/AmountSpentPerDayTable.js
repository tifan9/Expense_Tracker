import React from 'react'

const AmountSpentPerDayTable = ({ expenses }) => {
    // Calculate amount spent per day
  const amountPerDay = {};
  expenses.forEach((expense) => {
    const date = expense.date; // Assuming date is in the format 'YYYY-MM-DD'
    amountPerDay[date] = (amountPerDay[date] || 0) + parseFloat(expense.amount);
  });

  // Convert the calculated data into an array and sort by date
  const sortedRows = Object.keys(amountPerDay)
    .sort((a, b) => new Date(a) - new Date(b))
    .map((date) => (
      <tr key={date}>
        <td>{date}</td>
        <td>{amountPerDay[date]}</td>
      </tr>
    ));
  return (
    <div>
      <h2>Amount Spent Per Day</h2>
      <table className="table border shadow table-hover">
        <thead>
          <tr>
            <th>Date</th>
            <th>Total Amount Spent</th>
          </tr>
        </thead>
        <tbody>{sortedRows}</tbody>
      </table>
    </div>
  )
}

export default AmountSpentPerDayTable
