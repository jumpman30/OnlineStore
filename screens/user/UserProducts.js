import React from 'react';
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
import ProductItem from '../../components/ProductItem';
import { selectUserProducts, deleteProduct } from '../../store/productSlice';
import { useSelector, useDispatch} from 'react-redux';
import {clearProduct} from '../../store/cartSlice';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButtonHelper from '../../components/HeaderButtonHelper';



const UserProducts = (props) =>{

    const userProducts = useSelector(selectUserProducts)
    const dispatch = useDispatch()

    props.navigation.setOptions({
        headerRight: () => (
            <HeaderButtons  HeaderButtonComponent={HeaderButtonHelper}>
                <Item title='Cart' iconName='add-circle-outline'
                color= 'black'  
                onPress={() => props.navigation.navigate("Edit", 
                {
                    product: undefined,
                }
                )}
                />
            </HeaderButtons>
           ),
      });

    return(

        <FlatList
        data={userProducts}
        keyExtractor={item => item.id}
        renderItem={itemData => <ProductItem
        image={itemData.item.imageUrl}
        title={itemData.item.title}
        price={itemData.item.price}
        onSelect={() => props.navigation.navigate('Product Details',
        {
            id: itemData.item.id,
            title: itemData.item.title
        }
        )}
        >
            <Button title='Edit' onPress={() => props.navigation.navigate('Edit', 
            {
                product: itemData.item
            
            })} />
            <Button title='Delete' onPress={() => {
                dispatch(deleteProduct(itemData.item.id));
                dispatch(clearProduct(itemData.item.id));

            }}/>

        </ProductItem>
    
    }
        />
           
        )
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

export default UserProducts;