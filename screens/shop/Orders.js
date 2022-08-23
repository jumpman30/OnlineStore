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
import {selectOrders} from '../../store/ordersSlice';
import OrderItem from '../../components/OrderItem';
import { useGetUsersQuery } from '../../services/users';


const Orders = (props) =>{
    const orders = useSelector(selectOrders);
    const {data, error, isLoading, isSuccess} = useGetUsersQuery();

    if(isSuccess)
        console.log(data[0].name);

    return(

        <FlatList
        data={orders}
        renderItem={ itemData => <OrderItem amount={itemData.item.amount} date={itemData.item.stringDate}
        items={itemData.item.items}
        />}
        />

    )}

const styles = StyleSheet.create({
    screen: {
        margin: 20,

    },

});

export default Orders;