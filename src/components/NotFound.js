import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
  import * as deviceInfo from 'expo-device';





export default function NotFound({text}) {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',marginVertical:responsiveFontSize(2),marginHorizontal:responsiveFontSize(2)}}>
      {/* <Image  resizeMode='contain' style={{width: 300, height:300}} source={require('./../assets/posts/nodata.png')} /> */}
      <Text style={{fontSize:responsiveFontSize(2)}}>{text?text:"Not Found"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})