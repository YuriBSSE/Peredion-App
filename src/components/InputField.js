import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ErrorIcon from 'react-native-vector-icons/MaterialIcons';
import colors from '../assets/colors/colors';
  import * as deviceInfo from 'expo-device';






const InputField = ({
  maxL,
  placeHolder,
  icon,
  getValue,
  password,
  keyboardType,
  defaultValue,
  color,
  error,
  innerRef,
  returnKeyType,
  value,
  columns,
  onSubmitEditing,
  smallCaps=false,
  inputType = 'default',
  rightIcon = () => {
    return;
  },
  onPressRghtIcon = () => {
    return;
  },
  passedStyle,
  editable= true
}) => {
  return (
    <View style={{...styles.container,alignItems:columns?"flex-start":"center"}}>
      {icon ? <View style={{position: 'absolute', left: 5,marginHorizontal:responsiveWidth(1),marginTop:columns?responsiveFontSize(1):0}}>{icon()}</View> :null}
      {inputType !== 'password' ? (
        <>
          <TextInput
            // defaultValue={defaultValue ? defaultValue : null}
            maxLength={maxL}
            value={value}
            onSubmitEditing={()=>onSubmitEditing?onSubmitEditing():null}
            ref={innerRef?innerRef:null}
            returnKeyType={returnKeyType?returnKeyType:"default"}
            keyboardType={keyboardType === 'number' ? 'number-pad' : 'default'}
            secureTextEntry={password ? true : false}
            autoCapitalize={smallCaps?"none":null}
            onChangeText={v => getValue(v)}
            multiline={columns?true:false}
            numberOfLines={columns?columns:null}
            textAlignVertical={columns?"top":null}
            placeholder={placeHolder}
            placeholderTextColor={color}
            style={[{...styles.input, color: color, borderColor: color},passedStyle]}
            editable={editable}
          />
          {error ? (
            <View style={{position: 'absolute', right: 5,marginHorizontal:responsiveWidth(1)}}>
              <ErrorIcon name="error" color={colors.errorRed} size={responsiveFontSize(2)} />
            </View>
          ) : null}
        </>
      ) : (
        <>
          <TextInput
            // defaultValue={defaultValue ? defaultValue : null}
            value={value}
            returnKeyType={returnKeyType?returnKeyType:"default"}
            onSubmitEditing={()=>onSubmitEditing?onSubmitEditing():null}
            ref={innerRef?innerRef:null}
            keyboardType={keyboardType === 'number' ? 'number-pad' : 'default'}
            secureTextEntry={password ? true : false}
            autoCapitalize={smallCaps?"none":null}
            onChangeText={v => getValue(v)}
            placeholder={placeHolder}
            placeholderTextColor={color}
            style={{...styles.input, color: color, borderColor: color}}
          />
          {error ? (
            <View style={{position: 'absolute', right: 5,marginHorizontal:responsiveWidth(1)}}>
              <ErrorIcon name="error" color={colors.errorRed} size={responsiveFontSize(2)} />
            </View>
          ) : null}
          {value !== null && value.length > 0 && (
            <TouchableOpacity
              onPress={onPressRghtIcon}
              style={{position: 'absolute', right: 5,marginHorizontal:responsiveWidth(1)}}>
              {rightIcon()}
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
    borderWidth:1,
    borderColor:colors.silver,
    borderRadius:responsiveFontSize(0.75),
    backgroundColor:'white'
  },
  input: {
    flex: 1,
    // paddingTop: responsiveHeight(1.5),
    // paddingBottom: responsiveHeight(1.5),
    paddingVertical:responsiveHeight(Platform.OS=="ios"?(1.75):1),
    paddingRight: responsiveWidth(9),
    fontSize:responsiveFontSize(1.6),
    paddingLeft: responsiveWidth(10),
    // marginRight:responsiveWidth(10),
    // backgroundColor:"skyblue"
  },
  // input: {
  //   borderBottomWidth: 1,
  //   flex: 1,
  //   paddingTop: responsiveHeight(1.5),
  //   paddingRight: 10,
  //   paddingBottom: responsiveHeight(1.5),
  //   paddingLeft: responsiveWidth(8),
  // },
});

export default InputField;
