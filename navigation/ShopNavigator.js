import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductGeneral from '../screens/shop/ProductGeneral';
import ProductDetails from '../screens/shop/ProductDetails';
import Cart from '../screens/shop/Cart';
import Orders from '../screens/shop/Orders';
import Icon from 'react-native-vector-icons/Ionicons';
import UserProducts from '../screens/user/UserProducts';
import EditProduct from '../screens/user/EditProduct';
Icon.loadFont();



const Stack = createNativeStackNavigator();

function ShopNavigator() {
  return (

      <Stack.Navigator>
        <Stack.Screen name="Product Overview" component={ProductGeneral} />
        <Stack.Screen name="Product Details" component={ProductDetails} />
        <Stack.Screen name="Cart Screen" component={Cart} />

      </Stack.Navigator>
   
  );
}

const OrdersNav = createNativeStackNavigator();

function OrdersNavigator() {
  return (
    
      <OrdersNav.Navigator>
        <OrdersNav.Screen name="Orders Screen" component={Orders} />
      </OrdersNav.Navigator>
   
  );
}

const UserProductsNav = createNativeStackNavigator();

function UserProductNavigator() {
  return (
    
      <UserProductsNav.Navigator>
        <UserProductsNav.Screen name="User" component={UserProducts} />
        <UserProductsNav.Screen name="Edit" component={EditProduct} />

      </UserProductsNav.Navigator>
   
  );
}

const Tab = createBottomTabNavigator();


function TabNavigator() {
  return (
    <NavigationContainer>

    <Tab.Navigator>
      <Tab.Screen name='Home' component={ShopNavigator}
      options={{
        tabBarActiveTintColor: 'green',
        tabBarIcon: (tabInfo) => {
          return (
            <Icon name='planet-outline'
            size={25}
            />
          )
        },
      }
    }
      />
      <Tab.Screen name="Orders" component={OrdersNavigator}
      options={{
        tabBarActiveTintColor: 'green',
        tabBarIcon: (tabInfo) => {
          return (
            <Icon name='cash-outline'
            size={25}
            />
          )
        },
      }
    }
      />
       <Tab.Screen name="Admin" component={UserProductNavigator}
      options={{
        tabBarActiveTintColor: 'green',
        tabBarIcon: (tabInfo) => {
          return (
            <Icon name='person-outline'
            size={25}
            />
          )
        },
      }
    }
      />

    </Tab.Navigator>
    </NavigationContainer>

  );
}




export default TabNavigator;