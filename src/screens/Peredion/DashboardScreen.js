import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardFront from './DashboardFront';
import WithdrawaleScreen from './WithdrawaleScreen';
import WithdrawScreen from './WithdrawScreen';
import RacingScreen from './RacingScheduleScreen';
const Stack = createNativeStackNavigator();


const DashboardScreen = () => {
  return (
    <Stack.Navigator  screenOptions={{animation: 'fade'}}>
      <Stack.Screen
        options={{headerShown: false}}
        name="DashboardScreen"
        component={DashboardFront}
      />
       <Stack.Screen
        options={{headerShown: false}}
        name="RacingScreen"
        component={RacingScreen}
      />
       <Stack.Screen
        options={{headerShown: false}}
        name="Withdrawale"
        component={WithdrawaleScreen}
      />
          <Stack.Screen
        options={{headerShown: false}}
        name="Withdraw"
        component={WithdrawScreen}
      />
    </Stack.Navigator>
  );
};

export default DashboardScreen;
