import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import colors from '../assets/colors/colors';
  import * as deviceInfo from 'expo-device';





const Btn = ({text, call, color, loader, pS, pSText,disabled}) => {
  return (
    <TouchableOpacity
      disabled={loader || disabled ? true :disabled}
      onPress={call}
      style={[
        {
          ...styles.button,
          backgroundColor: color ? color : colors.themeblue,
        },
        pS,
        pSText,
      ]}>
      {loader ? (
        <ActivityIndicator
          size={responsiveFontSize(3)}
          color={colors.loaderWhite}
        />
      ) : (
        <Text
          style={[
            {color: colors.white, fontSize: responsiveFontSize(1.8)},
            pSText,
          ]}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: responsiveFontSize(0.75),
    height: responsiveHeight(5.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Btn;
