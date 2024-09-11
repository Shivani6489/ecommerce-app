import React from 'react';

const Checkout = () => {
  return (
    <div>
      <h1>Checkout</h1>
      <form>
        <label>Name:</label>
        <input type="text" />
        <label>Address:</label>
        <input type="text" />
        <label>City:</label>
        <input type="text" />
        <label>State:</label>
        <input type="text" />
        <label>ZIP Code:</label>
        <input type="text" />
        <label>Payment Method:</label>
        <select>
          <option>Credit Card</option>
          <option>PayPal</option>
        </select>
        <button type="submit">Complete Purchase</button>
      </form>
    </div>
  );
};

export default Checkout;
