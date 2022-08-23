import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import productReducer from './productSlice';
import { setupListeners } from '@reduxjs/toolkit/query'
import cartReducer from './cartSlice';
import ordersSlice from './ordersSlice';
import {usersApi} from '../services/users';



export default store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,  
    products: productReducer,
    cart: cartReducer,
    orders: ordersSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(usersApi.middleware),
});

setupListeners(store.dispatch)

