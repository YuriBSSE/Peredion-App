import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import colors from '../../../assets/colors/colors';
import signup from '.';
import login from '../login';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Tab = createMaterialTopTabNavigator();

const AuthTabs = () => {
  //   const route = useRoute();
  const [authRouteName, setAuthRouteName] = useState('Welcome Back');

  return (
    <>
      <View style={styles.topLogoCont}>
        <Text style={styles.hd}>{authRouteName}</Text>

      </View>
 
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  hd: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    color: colors.themeblue,
  },
  topLogoCont: {
    paddingVertical: responsiveHeight(2),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: responsiveWidth(50),
    height: responsiveHeight(4),
    marginTop: responsiveHeight(1.5),
  },
});

export default AuthTabs;
