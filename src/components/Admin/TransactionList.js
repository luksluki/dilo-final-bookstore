import React from "react";

const TransactionList = props => {
  const transactions = props.transactions;

  return (
    <div>
      {transactions.map((transaction, index) => (
        <div className="row" key={index}>
          <div class="column">
            <table class="table">
              <thead>
                <tr>
                  <td>No.</td>
                  <td>User</td>
                  <td>Item</td>
                  <td>Date</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{index + 1}</td>
                  <td>{transaction.owner}</td>
                  <td>order</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
