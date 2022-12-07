import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import userReducer from './Reducers/UserReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const AppReducers = combineReducers({
  user: userReducer,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  keyPrefix: '',
};
const rootReducer = persistReducer(persistConfig, AppReducers);

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
export const persistor = persistStore(store);
