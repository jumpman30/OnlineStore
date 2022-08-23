import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button, FlatList, Touchable, TouchableOpacity, Image
} from 'react-native';
import { useSelector, useDispatch} from 'react-redux';
import {selectProducts} from '../../store/productSlice';
import PRODUCTS from '../../data/dummyData';
import ProductItem from '../../components/ProductItem';
import {addToCart} from '../../store/cartSlice';




const ProductDetails = (props) =>{



    props.navigation.setOptions({
        title: props.route.params.title
    
      });

    const availableProducts = useSelector(selectProducts);
    const product = availableProducts.find(prod => prod.id === props.route.params.id );
    const dispatch = useDispatch();



    return(
        <ScrollView>
            <Image 
                source={{uri: product.imageUrl}}
                style={styles.bgImage}
            />
            <Button title='Add to Cart' onPress={() => dispatch(addToCart(product))}></Button>
            <Text>${product.price}</Text>
            <Text>{product.description}</Text>
        </ScrollView>
    );



}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems:'center',
        flex:1,
    },
    bgImage: {
        width: '100%',
        height: 300,
    }
});

export default ProductDetails;