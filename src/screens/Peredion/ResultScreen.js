import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
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
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HistoryScreen from './HistoryScreen';
import BettingHistoryScreen from './BettingHistoryScreen';
const Tab = createMaterialTopTabNavigator();



function  ResultScreen(){
    return (
      <Tab.Navigator>
        <Tab.Screen name="Deposit History" component={HistoryScreen} />
        <Tab.Screen name="Betting History" component={BettingHistoryScreen} />
      </Tab.Navigator>
    );
  }

export default ResultScreen;
