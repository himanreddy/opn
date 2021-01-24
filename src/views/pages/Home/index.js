import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { summaryDonations } from '../../../utils/helpers';
import { getCharities, getPayments } from '../../../services/api';
import { UPDATE_TOTAL_DONATE } from '../../../store/actionTypes';
import Card from '../../../components/Card';
import { useStyles } from './styles';

const Home = (props) => {
  const classes = useStyles();
  const donate = props.donate;
  const message = props.message;

  const [state, setState] = useState({
    charities: [],
  });

  useEffect(() => {
    getCharities().then(function (data) {
      setState({ charities: data });
    });
  
    getPayments().then(function (data) {
      props.dispatch({
        type: UPDATE_TOTAL_DONATE,
        amount: summaryDonations(data.map((item) => item.amount)),
      });
    });
  }, [setState]);

  const cards = state.charities.map((item, i) => (
    <Card key={`card-${i}`} charity={item}></Card>
  ));

  return (
    <div className={classes.homePage}>
      <h1 style={{textAlign: 'center'}}>Tamboon React</h1>
      <p style={{textAlign: 'center'}}>All donations: {donate}</p>
      <p className={classes.message}>{message}</p>
      <div className={classes.cardRow}>
        {cards}
      </div>
    </div>
  );
}

export default connect((state) => state)(Home);
