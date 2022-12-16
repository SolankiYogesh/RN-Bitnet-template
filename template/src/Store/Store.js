import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers} from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import userReducer from './Reducers/UserReducer';
import  { createLogger } from 'redux-logger';
import EmployeeReducer from './Reducers/EmployeeReducer';
import createSagaMiddleware from 'redux-saga';
import {configureStore} from '@reduxjs/toolkit'
import employeeSaga from './SagaActions/EmployeeSaga';

const AppReducers = combineReducers({
  user: userReducer,
  employee:EmployeeReducer
});
const saga = createSagaMiddleware()
const middleware = [saga,createLogger()]
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  keyPrefix: '',
};
const rootReducer = persistReducer(persistConfig, AppReducers);

// export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
export const store = configureStore({
  reducer:rootReducer,
  middleware:middleware,
})

  saga.run(employeeSaga)
export const persistor = persistStore(store);
