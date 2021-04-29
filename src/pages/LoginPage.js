import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// Firebase
import firebase from '../firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// Material UI
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function LoginPage(props) {
  const classes = useStyles();
  const theme = useTheme();

  const uiConfig = {
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };
  
  return (
    <div className={classes.root}>
      <Typography variant='h2' align='center'>
        Log in
      </Typography>
      <StyledFirebaseAuth 
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
      />
      <Button 
        variant='contained' 
        color='secondary'
        component={RouterLink}
        to='/'
      >
        Home
      </Button>

    </div>
  );
}