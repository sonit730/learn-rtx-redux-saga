import cityApi from 'api/cityApi';
import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import { LoginPage } from 'features/auth/pages/LoginPage';
import { Counter } from 'features/counter/Counter';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button } from '@mui/material';
import './App.css';
import { useDispatch } from 'react-redux';
import { authActions } from 'features/auth/authSlice';
function App() {
  //   useEffect(()=>{
  //     cityApi.getAll()
  //     .then((response)=>console.log(response))
  //   })
  const dispatch = useDispatch();
  const handleClickLogout = () => {
    dispatch(authActions.logout());
  };
  return (
    <>
      <Button
        style={{ float: 'right' }}
        variant="contained"
        color="secondary"
        onClick={handleClickLogout}
      >
        Logout
      </Button>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>

        <PrivateRoute path="/admin">
          <AdminLayout />
        </PrivateRoute>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
