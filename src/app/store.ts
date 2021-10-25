import { configureStore, ThunkAction, Action,combineReducers } from '@reduxjs/toolkit';
import {connectRouter, routerMiddleware} from 'connected-react-router'
import counterReducer from '../features/counter/counterSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import authReducer from 'features/auth/authSlice';
import { history } from 'utils';

//connect-react-router
const rootReducer = combineReducers({
  router:connectRouter(history),
  counter: counterReducer,
  auth: authReducer
})

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware,routerMiddleware(history))
});

sagaMiddleware.run(rootSaga) // Run Effect

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
