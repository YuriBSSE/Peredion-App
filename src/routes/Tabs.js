import { StyleSheet, PermissionsAndroid, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/Peredion/DashboardScreen';
import EditScreen from '../screens/Peredion/EditProfile';
import PromotionScreen from '../screens/Peredion/PromotionScreen';
import ResultScreen from '../screens/Peredion/ResultScreen';

import ContactScreen from '../screens/Peredion/ContactScreen';
import { connect } from 'react-redux'
import AuthScreens from './AuthScreen'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs({authRed }) {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  useEffect(()=>{
    console.log(authRed, "REDUX")
    if(authRed?.email){
      setData(authRed)
    }else{
      setData(null)
    }
  },[authRed])
 
  useEffect(()=>{
    setLoading(true)
    AsyncStorage.getItem("data").then((res)=>{
      if(res){
        const userData =  JSON.parse(res)
        console.log(userData)
        setData(userData)
        setLoading(false)
      }
      setLoading(false)
    }).catch((err)=>{
      setLoading(false)
    })
  },[])

  if(loading){
    return <Loader/>
  }


  if (data) {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "rgb(7, 13, 46)",
          tabBarLabelStyle: {
            marginBottom: 5
          },
          unmountOnBlur: true
        }}
        
        initialRouteName="Dashboard"
        
      >
        <Tab.Screen
          name="Dashboard"
          
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="md-home-outline" size={22} color={color} />,
          }}
        >
          {(props) => <DashboardScreen {...props}  />}
        </Tab.Screen>
        <Tab.Screen
          name="Promotions"
          options={{
            tabBarIcon: (({ color }) => <AntDesign name='notification' size={22} color={color} />)
          }}
        >
          {(props) => <PromotionScreen {...props} />}
        </Tab.Screen>
        <Tab.Screen
          name="History"
          options={{
            tabBarIcon: (({ color }) => <MaterialCommunityIcons name='history' size={22} color={color} />)
          }}
        >
          {props => <ResultScreen {...props} />}
        </Tab.Screen>
        {/* <Tab.Screen
          name="Profile"
          component={EditScreen}
          options={{
            tabBarIcon: (({ color }) => <SimpleLineIcons name='user' size={22} color={color} />)
          }}
        /> */}
      </Tab.Navigator>
    )
  } 
  else {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {AuthScreens()}
      </Stack.Navigator>
    )
  }
}

function mapStateToProps({ authRed }) {
  return { authRed }
}


export default connect(mapStateToProps, null)(Tabs);
const styles = StyleSheet.create({})