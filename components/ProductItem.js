import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button, FlatList, Touchable, ImageBackground, Image, TouchableOpacity
} from 'react-native';
import { useSelector} from 'react-redux';
import {selectProducts} from '../../store/productSlice';



const ProductItem = (props) =>{

        return (
            <TouchableOpacity onPress={props.onSelect}>
           <View style={styles.screen}>
               <View style={styles.imageContainer}>
               <Image
                    source={{uri: props.image}}
                    style={styles.bgImage}
                />
                </View>

                <View style={styles.details}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.price}>${props.price}</Text>
               </View>

                <View style={styles.actions}>
                   {props.children}
                </View>
            
            </View>
            </TouchableOpacity>
        )
    }


const styles = StyleSheet.create({
    screen: {
       shadowColor: 'black',
       shadowOpacity: 0.25,
       shadowOffset: {width: 0, height: 2},
       shadowRadius: 8,
       borderRadius: 20,
       backgroundColor: 'white',
       height: 300,
       margin: 20
    },
    details:{
        alignItems: 'center',
        height: '20%',
        padding: 10 
    }, 
    bgImage: {
        width: '100%',
        height: '100%'
    },
    imageContainer:{
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    title: {
        fontSize: 20,
        marginVertical: 4,
    },
    price: {
        fontSize: 16,
        color: 'black'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    }
});

export default ProductItem;