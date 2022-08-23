import React, {useEffect} from 'react';
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
import {selectProducts} from '../../store/productSlice';
import ProductItem from '../../components/ProductItem';
import {addToCart} from '../../store/cartSlice';
import {setProducts} from '../../store/productSlice';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButtonHelper from '../../components/HeaderButtonHelper';


const ProductGeneral = (props) =>{

    const dispatch = useDispatch();
    const products = useSelector(selectProducts);

    useEffect(() => {
        dispatch(setProducts());
    }, [dispatch])


    props.navigation.setOptions({
        title: 'All Products',
        headerRight: () => (
            <HeaderButtons  HeaderButtonComponent={HeaderButtonHelper}>
                <Item title='Cart' iconName='cart-outline'
                color= 'black'  
                onPress={() => props.navigation.navigate("Cart Screen")}
                />
            </HeaderButtons>
           ),
      });


    const renderGridItem = ({item}) => {

        return (
            <ProductItem
            image={item.imageUrl}
            title={item.title}
            price={item.price}
            onSelect={() => props.navigation.navigate('Product Details',
            {
                id: item.id,
                title: item.title
            }
            )}
            >
                 <Button title='Details' onPress={() => props.navigation.navigate('Product Details',
            {
                id: item.id,
                title: item.title
            }
            )}/>
                <Button title='Add to Cart' onPress={() => dispatch(addToCart(item))}/>
                
            </ProductItem>
        )
    }



    return(
        <FlatList
         data={products} 
         renderItem={renderGridItem}
         />
    );



}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems:'center',
        flex:1,
    },
    gridItem: {
        flex:1,
        margin: 15,
        height: 150
    }
});

export default ProductGeneral;