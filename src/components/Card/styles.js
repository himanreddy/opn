import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  card: {
    position: 'relative',
    boxSizing: 'border-box',
    margin: '1.5rem 0px',
    borderRadius: '5px',
    // border: '1px solid #ccc',
    boxShadow: '0px 3px 10px 2px gainsboro',
    width: '48%',

    '@media (minWidth: 1024px)': {
      width: '100%',
    },
  },

  cardDesc: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0em 1em',
  },

  imageDiv: {
    height: '250px',
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    borderRadius: '5px 5px 0px 0px',
  },

  payments: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '1em',
  },

  button: {
    color: '#1d51ea',
    border: '1px solid currentColor',
    background: 'transparent',
    padding: '0.5em',
    borderRadius: '5px',
  },

  overlay: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    background: '#ffffffee',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    borderRadius: 'inherit',
  },

  closeOverlay: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
  },
  
});