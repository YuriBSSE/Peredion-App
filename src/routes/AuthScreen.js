import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Login from '../screens/auth/login/index';
import SignUp from '../screens/auth/signup/index'

const Stack = createNativeStackNavigator();
export default function AuthScreens(navigation) {
  return (
    <>
      <Stack.Screen name="login">
        {props => {
          if (navigation) {
            return <Login {...props} navigation={navigation} />
          } else {
            return <Login {...props} />
          }
        }}
      </Stack.Screen>

      <Stack.Screen name="signup">
        {props => {
          if (navigation) {
            return <SignUp {...props} navigation={navigation} />
          } else {
            return <SignUp {...props} />
          }
        }}
      </Stack.Screen>
    </>
  );
}

const styles = StyleSheet.create({})