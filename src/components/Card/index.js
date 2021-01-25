import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handlePay } from '../../services/api';
import { UPDATE_MESSAGE, UPDATE_TOTAL_DONATE } from '../../store/actionTypes';
import { convertUSDToTHB } from '../../utils/helpers';
import { useStyles } from './styles';

const Card = ({ charity, dispatch }) => {

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
    handlePay({
      charitiesId: charity.id,
      amount: convertUSDToTHB(state.selectedAmount),
      currency: charity.currency,
    }).then((res) => {
      dispatch({
        type: UPDATE_TOTAL_DONATE,
        amount: convertUSDToTHB(state.selectedAmount),
      });
      dispatch({
        type: UPDATE_MESSAGE,
        message: `Thank you for your donation of ${charity.currency} ${convertUSDToTHB(state.selectedAmount)}`,
      });
      setState({
        selectedAmount: 10,
        showOverlay: false,
      });
    })
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
          <p><strong>Select the amount to donate (USD)</strong></p>
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

export default connect((state) => state)(Card);