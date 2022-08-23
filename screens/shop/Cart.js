import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button, FlatList, Touchable, TouchableOpacity
} from 'react-native';
import { useSelector, useDispatch} from 'react-redux';
import {selectCartItems, selectCartAmount, removeFromCart, clearCart } from '../../store/cartSlice';
import {addOrder, selectOrders} from '../../store/ordersSlice';
import CartItem from '../../components/CartItem';

const Cart = (props) =>{

    const cartStoreItems = useSelector(selectCartItems);
    const cartItems=[];
    const dispatch = useDispatch();
    const totalAmount = useSelector(selectCartAmount);

    for(const key in cartStoreItems){
        cartItems.push({
            productId: key,
            productTitle: cartStoreItems[key].title,
            productPrice: cartStoreItems[key].price,
            quantity: cartStoreItems[key].quantity,
            sum: cartStoreItems[key].sum
         })
    }

    const order = {items: cartItems, amount: totalAmount}   


    return(
        <View style={styles.screen}>

            <View style={styles.summary}>
                <Text>Total: ${useSelector(selectCartAmount).toFixed(2)}</Text>
                <Button title='Order Now'
                 disabled={cartItems.length === 0}
                 onPress= {() => {
                     dispatch(addOrder(order));
                     dispatch(clearCart())
                     }
                 }
                 />
            </View>

           
            
                <FlatList 
                data={cartItems}
                keyExtractor={item => item.productId}
                renderItem={
                    itemData => <CartItem 
                    quantity={itemData.item.quantity}
                    title={itemData.item.productTitle}
                    amount={itemData.item.sum}
                    onRemoveItem={() => dispatch(removeFromCart(itemData.item.productId))}
                    />
                }
                />

        </View>
    );



}

const styles = StyleSheet.create({
    screen: {
        margin: 20,

    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        borderRadius: 20,
        backgroundColor: 'white',

    }
});

export default Cart;