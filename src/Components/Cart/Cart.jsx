import React from "react";
import "./Cart.css";
import productdata from "../Product-detail/ProductData";

const Cart = ({ cartItems, onClearCart, onShopMore, onCheckout }) => {
  const calculateTotal = () => {
    let total = 0;
    Object.keys(cartItems).forEach((productId) => {
      total +=
        cartItems[productId] *
        productdata.find((p) => p.id === productId).price;
    });
    return total;
  };

  const calculatePromocode = () => {
    return "N/A";
  };

  const calculateDeliveryCharges = () => {
    return "Ksh.0";
  };

  const total = calculateTotal();
  const promocode = calculatePromocode();
  const deliveryCharges = calculateDeliveryCharges();

  return (
    <>
      <div className="title">
        <h2>Your Cart</h2>
      </div>
      <div className="cart-content">
        <table className="table" role="table">
          <thead>
            <tr className="header-row">
              <th className="header-cell">Your Item</th>
              <th className="header-cell">Name</th>
              <th className="header-cell">Quantity</th>
              <th className="header-cell">Amount</th>
              <th className="header-cell">Remove</th>
            </tr>
          </thead>
          <tbody className="content">
            {Object.keys(cartItems).map((productId) => (
              <tr key={productId} className="row">
                <td className="cell">Product Image</td>
                <td className="cell">{productId}</td>
                <td className="cell">{cartItems[productId]}</td>
                <td className="cell">Amount</td>
                <td className="cell">
                  <button className="remove-btn">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="footer-row">
              <td className="footer-cell total">Promocode</td>
              <td className="footer-cell"></td>
              <td className="footer-cell"></td>
              <td className="footer-cell total">{promocode}</td>
            </tr>
            <tr className="footer-row">
              <td className="footer-cell total">Delivery Charges</td>
              <td className="footer-cell"></td>
              <td className="footer-cell"></td>
              <td className="footer-cell total">{deliveryCharges}</td>
            </tr>
            <tr className="footer-row">
              <td className="footer-cell total">Total</td>
              <td className="footer-cell"></td>
              <td className="footer-cell"></td>
              <td className="footer-cell total">{`Ksh. ${total}`}</td>
            </tr>
          </tfoot>
        </table>
        <div className="action-card">
          <button className="action-btn" onClick={onClearCart}>Clear Cart</button>
          <button className="action-btn" onClick={onShopMore}>Shop More</button>
          <button className="action-btn" onClick={onCheckout}>Check out</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
