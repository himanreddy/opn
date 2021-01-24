import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({

  homePage: {
    maxWidth: '1024px',
    margin: '0 auto',
    fontFamily: 'Nunito',
    color: '#62708d',
  },
  
  message: {
    color: 'red',
    margin: '1em 0',
    fontWeight: 'bold',
    fontSize: '16px',
    textAlign: 'center',
  },
  
  cardRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '0px 16px',
    justifyContent: 'space-between',
  },

})