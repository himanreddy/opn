import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { summaryDonations } from '../../../utils/helpers';
import { getCharities, getPayments } from '../../../services/api';
import { UPDATE_TOTAL_DONATE } from '../../../store/actionTypes';
import Card from '../../../components/Card';

export const style = {
  color: 'red',
  margin: '1em 0',
  fontWeight: 'bold',
  fontSize: '16px',
  textAlign: 'center',
};

const Home = (props) => {
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
    <div>
      <h1>Tamboon React</h1>
      <p>All donations: {donate}</p>
      <p style={style}>{message}</p>
      {cards}
    </div>
  );
}

export default connect((state) => state)(Home);
