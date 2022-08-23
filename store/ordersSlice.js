import { createSlice } from '@reduxjs/toolkit'
import Order from '../model/Order';

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
   orders: []
  },
  reducers: {

    addOrder: (state, action) => {
       
        const order = new Order(new Date().toString(), action.payload.items, action.payload.amount, new Date());
        state.orders.push(order);

    },

    }

})

export const { addOrder } = ordersSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectOrders = (state) => state.orders.orders
//export const selectCartAmount = (state) => state.cart.totalAmount

export default ordersSlice.reducer
