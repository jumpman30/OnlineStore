import { createSlice } from '@reduxjs/toolkit'
import CartItem from '../model/ CartItem';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {},
    totalAmount: 0,
  },
  reducers: {

    addToCart: (state, action) => {

        const addedProduct = action.payload;
        const prodPrice = addedProduct.price;
        const prodTitle = addedProduct.title;

        if(state.items[addedProduct.id]){

            const updatedItem = new CartItem(state.items[addedProduct.id].quantity + 1, prodPrice, prodTitle, state.items[addedProduct.id].sum + prodPrice);
            
                state.items = {...state.items, [addedProduct.id]: updatedItem}
                state.totalAmount = state.totalAmount + prodPrice
        }
        else{
            const cartItem = new CartItem(1,prodPrice,prodTitle,prodPrice);

                state.items = {...state.items, [addedProduct.id]: cartItem }
                state.totalAmount = state.totalAmount + prodPrice
            }
    },
    
    removeFromCart: (state, action) => {

        const currentQty = state.items[action.payload].quantity

        if(currentQty > 1){
            //reducing quantity
            state.items[action.payload].sum =  state.items[action.payload].sum -  state.items[action.payload].price;
            state.items[action.payload].quantity--
            state.totalAmount = state.totalAmount - state.items[action.payload].price

        }
        else{
            //deleting product 
            state.totalAmount = state.totalAmount - state.items[action.payload].price
             delete state.items[action.payload];
            
        }


    },

    clearCart : (state, action) => {

            state.items = {};
            state.totalAmount = 0;
         },
    
    clearProduct : (state, action) => {
        
        if(state.items[action.payload]){
            const itemTotal = state.items[action.payload].sum
            delete state.items[action.payload];
            state.totalAmount = state.totalAmount - itemTotal
        }
     }

    },

})

export const { addToCart, removeFromCart, clearCart, clearProduct } = cartSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCartItems = (state) => state.cart.items
export const selectCartAmount = (state) => state.cart.totalAmount
export const selectCart = (state) => state.cart


export default cartSlice.reducer
