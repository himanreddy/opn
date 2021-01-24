import React, { useState } from 'react';
import { handlePay } from '../../services/api';
import { buttonStyle, cardStyle } from './styles';

const Card = ({ charity }) => {
  const [state, setState] = useState({
    selectedAmount: 10,
    showOverlay: false,
  });

  const payments = [10, 20, 50, 100, 500].map((amount, j) => (
    <label key={`label-${j}`}>
      <input
        type="radio"
        name="payment"
        onChange={() => {
          setState({ selectedAmount: amount });
        }}
        checked={state.selectedAmount === amount}
      />
      {amount}
    </label>
  ));

  const makePayment = () => {
    handlePay(
      charity.id,
      state.selectedAmount,
      charity.currency
    )
  }

  return (
    <div style={cardStyle}>
      <p>{charity.name}</p>
      {
        state.showOverlay ? <>
          {payments}
          <button
            style={buttonStyle}
            onClick={makePayment}
          >
            Pay
          </button>
        </>
        : null
      }
    </div>
  );

}

export default Card;