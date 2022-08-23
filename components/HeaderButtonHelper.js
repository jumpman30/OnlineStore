import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button, FlatList, Touchable, TouchableOpacity,
  Platform,
  TouchableNativeFeedback
} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();


const HeaderButtonHelper = (props) => {

    return (
         <HeaderButton 
         {...props}
         IconComponent={Icon}
         iconSize={23}
         color='black'
        />
    )
    
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems:'center',
        flex:1,
    }
});

export default HeaderButtonHelper;