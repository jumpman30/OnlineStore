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
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();




const CartItem = (props) =>{

        return (
           
           <View style={styles.screen}>
               
               <Text>{props.quantity}</Text>
               <Text>{props.title}</Text>

               <View style={styles.itemData}>
                   <Text>${props.amount.toFixed(2)}</Text>
                   <TouchableOpacity onPress={props.onRemoveItem}>
                       <Icon name='trash-bin-outline' size={23} color='red'/>
                   </TouchableOpacity>
               </View>
            
            </View>
        )
    }


const styles = StyleSheet.create({
    screen: {
       padding: 10,
       backgroundColor: 'white',
       flexDirection: 'row',
       marginHorizontal: 20,
       justifyContent: 'space-between',
    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default CartItem;