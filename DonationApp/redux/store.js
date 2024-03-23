import {combineReducers, configureStore} from '@reduxjs/toolkit';
import User from './reducers/User';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

const rootReducer = combineReducers({
  user: User,
});

const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

// Creating a new persisted reducer with the configuration and root reducer
const persistedReducer = persistReducer(configuration, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export default store;
export const persistor = persistStore(store);
