import React from "react";
import "./Cart.css";
const Cart = () => {
  return (
    <>
    
      <div className="title">Your Cart</div>
      <div className="tablecontent">
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
          <tfoot className="columngroup">
            <tr>
              <td>Promocode</td>
              <td>Delivery Charges</td>
              <td>Total</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Cart;
