import React, {useState, useEffect} from 'react';
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
import CartItem from './CartItem';

Icon.loadFont();




const OrderItem = (props) =>{

    const [showDetails, setShowDetails] = useState(false);

        return (
           
           <View style={styles.screen}>
               
               <View style={styles.summary}>

                   <Text>
                        {props.amount}
                   </Text>

                    <Text>
                        {props.date}
                    </Text>

               </View>

                <Button title="Details" 
                onPress={ () => {
                    setShowDetails(prevState => !prevState)
                }}
                />
                {showDetails && <View>
                    {props.items.map(item => <CartItem quantity={item.quantity} title={item.productTitle} 
                    amount={item.sum} 
                    onRemoveItem={() => {}}
                    key={item.productId}
                    />)}    
                </View>}
            </View>
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
       margin: 20,
       padding: 10,
       alignItems: 'center',
    },

    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15
    }
});

export default OrderItem;