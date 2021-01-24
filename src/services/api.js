import fetch from 'isomorphic-fetch';

const API_ENDPOINT = 'http://localhost:3001';

export const getCharities = () => {
  return fetch(`${API_ENDPOINT}/charities`)
  .then(function (resp) {
    return resp.json();
  });
}

export const getPayments = () => {
  return fetch(`${API_ENDPOINT}/payments`)
  .then(function (resp) {
    return resp.json();
  });
}

export const handlePay = () => {
  
}