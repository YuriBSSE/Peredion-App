import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    StyleSheet,
    FlatList,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import {
    responsiveWidth,
    responsiveFontSize,
    responsiveHeight,
  } from 'react-native-responsive-dimensions';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  import { LinearGradient } from 'expo-linear-gradient';
  import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
  

  const WithdrawScreen = () => {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            width: responsiveWidth(100),
            height: responsiveHeight(10),
            marginTop: 10,
            alignSelf: 'center',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: 5,
              height: 5,
              backgroundColor: '#D81254',
              borderRadius: 100,
            }}
          />
          <Text
            style={{
              fontSize: responsiveFontSize(2.5),
              color: 'black',
              fontWeight: '700',
              right: 6,
            }}>
            WITHDRAW
          </Text>
          <View style={{width: 70, height: 3, backgroundColor: '#D81254'}} />

        </View>
 
      </View>
    );
  };
  
  export default WithdrawScreen;
  
  const styles = StyleSheet.create({
    text: {
      fontSize: responsiveFontSize(1.2),
      fontWeight: '700',
      color: 'white',
      width: responsiveWidth(14),
      textAlign: 'center',
    },
    text1: {
      fontSize: responsiveFontSize(1.2),
      fontWeight: '400',
      color: 'black',
      width: responsiveWidth(12),
      textAlign: 'center',
    },
    flatlistHeader: {
      width: responsiveWidth(100),
      height: responsiveHeight(10),
      backgroundColor: '#D81254',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
    },
    flatlist: {
      width: responsiveWidth(100),
      height: responsiveHeight(10),
      borderColor: '#D81254',
      borderWidth: 0.6,
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
    },
  });
  