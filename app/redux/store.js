import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import rootReducer from "./reducers"

const persistConfig = {
  key: 'root',
  storage,
  // Specify the reducers you want to persist
  whitelist: ['rootReducer'], // In this example, we persist the 'user' reducer
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: rootReducer
})
export const persistor = persistStore(store);