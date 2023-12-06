import React from 'react'

const Cart = () => {
  return (
    <>
      <div className="title">Your Cart</div>
      <table className="table">
        <thead className="rowgroup">
          <tr>
            <th>Your Item</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Remove</th>
          </tr>
        </thead>
      </table>
    </>
  );
}

export default Cart