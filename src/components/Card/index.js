import React, { useState } from 'react';
import { handlePay } from '../../services/api';
import { useStyles } from './styles';

const Card = ({ charity }) => {

  const classes = useStyles();

  const [state, setState] = useState({
    selectedAmount: 10,
    showOverlay: false,
  });

  const payments = [10, 20, 50, 100, 500].map((amount, j) => (
    <label key={`label-${j}`}>
      <input
        type="radio"
        name={`payment-${charity.id}`}
        checked={state.selectedAmount === amount}
        onChange={() => {
          setState({ ...state, selectedAmount: amount });
        }}
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
    <div className={classes.card}>
      <div className={classes.imageDiv}>
        <img className={classes.image} src={`/images/${charity.image}`}/>
      </div>
      <div className={classes.cardDesc}>
        <p>{charity.name}</p>
        <button className={classes.button} onClick={() => setState({showOverlay: !state.showOverlay})}>Donate</button>
      </div>
      {
        state.showOverlay ? <div className={classes.overlay}>
          <span className={classes.closeOverlay} onClick={() => setState({showOverlay: !state.showOverlay})}>X</span>
          <div className={classes.payments}>{payments}</div>
          <button className={classes.button} onClick={makePayment}>
            Pay
          </button>
        </div>
        : null
      }
    </div>
  );

}

export default Card;