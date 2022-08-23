import React, {useState, useEffect, useReducer} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button, FlatList, Touchable, TouchableOpacity, TextInput
} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButtonHelper from '../../components/HeaderButtonHelper';
import {createProduct, updateProduct, addProduct, setProducts} from '../../store/productSlice'
import { useDispatch } from 'react-redux';
const FORM_UPDATE = 'UPDATE'



function reducer(state, action) {


    switch (action.type) {

      case FORM_UPDATE:
        const updatedValues ={...state.inputValues,
        [action.input]: action.value
        }
        return {inputValues: updatedValues}

      default:
        throw new Error();
    }
  }


const EditProduct = (props) =>{



      const dispatch = useDispatch()
      const userProd = props.route.params.product;
      const [state, dispatchState] = useReducer(reducer, {
          
        inputValues: {
         
         title: userProd ? userProd.title : '',
         imageUrl: userProd ? userProd.imageUrl : '',
         description: userProd ? userProd.description : '',
         price: userProd ? userProd.price : '',
         id: userProd ? userProd.id : null,

      }})




      const submitHandler =  () => {

        //console.log(state.inputValues)

            if(userProd){
                dispatch(updateProduct(state.inputValues))
                alert('Product edited')
            }
            
            else{
                dispatch(addProduct(state.inputValues))
                alert('Product created')
                
            }
      };




    props.navigation.setOptions({
        headerRight: () => (
            <HeaderButtons  HeaderButtonComponent={HeaderButtonHelper}>
                <Item title='Cart' iconName='caret-forward-outline'
                color= 'black'  
                onPress={submitHandler}
                />
            </HeaderButtons>
           ),
      });

    return(

        <ScrollView>

        <View style={styles.container}>

           <View style={styles.form}>
               <Text>Title</Text>
               <TextInput value={state.inputValues.title} onChangeText={(text) => dispatchState({type: FORM_UPDATE, value: text, input: 'title'})}
               autoCapitalize='sentences'

               />
           </View>

           <View style={styles.form}>
               <Text>Image</Text>
               <TextInput value={state.inputValues.imageUrl} onChangeText={(text) => dispatchState({type: FORM_UPDATE, value: text, input: 'imageUrl'})}/>
           </View>

            { userProd ? null :
           <View style={styles.form}>
               <Text>Price</Text>
               <TextInput value={state.inputValues.price} onChangeText={(text) => dispatchState({type: FORM_UPDATE, value: text, input: 'price'})}
               keyboardType='decimal-pad'
               />
           </View>
            }   

           <View style={styles.form}>
               <Text>Description</Text>
               <TextInput value={state.inputValues.description} onChangeText={(text) => dispatchState({type: FORM_UPDATE, value: text, input: 'description'})}/>
           </View>

        </View>

           </ScrollView>
        )
    }



const styles = StyleSheet.create({
    container: {
        margin: 20,

    },
    form: {
        width: '100%',
        padding: 10,

    }
});

export default EditProduct;