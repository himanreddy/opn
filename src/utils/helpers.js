export const summaryDonations = (donations) => donations.reduce((accumulator, value) => accumulator + value);

export const convertUSDToTHB = (amount) => amount * 29.98;
