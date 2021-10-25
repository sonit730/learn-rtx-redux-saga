import { Paper, Typography, Box, Button } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import * as React from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import './LoginPage.css';
import { authActions } from '../authSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'flow nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },

  box: {
    padding: theme.spacing(3),
  },
}));

export function LoginPage() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const isLogging = useAppSelector((state) => state.auth.logging);
  const handleClickLogin = () => {
    dispatch(
      authActions.login({
        user: '',
        password: '',
      })
    );
  };
  return (
    <div className={classes.root}>
      <Paper className={classes.box} elevation={3}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>
        <Box style={{ position: 'relative' }} mt={4}>
          {!isLogging ? (
            <Button fullWidth variant="contained" color="primary" onClick={handleClickLogin}>
              Fake Login
            </Button>
          ) : (
            <div className="lds-facebook">
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </Box>
      </Paper>
    </div>
  );
}
