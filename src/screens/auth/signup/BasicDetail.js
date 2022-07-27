import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Platform,TouchableOpacity
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import InputField from '../../../components/InputField';
import colors from '../../../assets/colors/colors';
import MailIcon from 'react-native-vector-icons/Fontisto';
import PersonIcon from 'react-native-vector-icons/Ionicons';
import DobIcon from 'react-native-vector-icons/AntDesign';
import moment from 'moment';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Btn from '../../../components/Btn';
import {useNavigation} from '@react-navigation/native';
import Header from '../Header';
import DropDownComp from '../../../components/DropDownComp';
 



import DateTimePicker from 'react-native-modal-datetime-picker';



const BasicDetail = ({userData, getValue}) => {
  const emailRef = useRef();

  const [gender, setGender] = useState([
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Other', value: 'other'},
  ]);
  const [isOpenDrpdwn, setIsOpenDrpdwn] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const navigation = useNavigation();
  const [show, setShow] = useState(false);

  const onNext = () => {
    setIsSubmit(true);
    if (!userData.userName) {
      console.log('Name and gender is required');
    }  else {
      navigation.navigate('auth_country_detail');
    }
  };

  const onChange = selectedDate => {
    const currentDate = selectedDate;
    setShow(false);
    onChangeStartDate(currentDate);
  };
  return (
    <>
      <Header title="Getting Started" />
      <ScrollView
        contentContainerStyle={styles.containerScroll}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="always">
        <View style={styles.imgCont}>
          <View
            style={{backgroundColor: '#383838', borderRadius: 12, padding: 10}}>
            <Image
              style={styles.logo}
              resizeMode="contain"
              source={require('../../../assets/logo.png')}
            />
          </View>
        </View>
        <View style={styles.cont}>
          <View style={styles.inputCont}>
            {/* <Text style={styles.subHd}>Create An Account</Text> */}
            <InputField
              error={!userData.userName && isSubmit}
              getValue={v => getValue('userName', v)}
              value={userData.userName}
              returnKeyType="next"
              // onSubmitEditing={()=>emailRef.current.focus()}
              icon={() => {
                return (
                  <PersonIcon
                    name="person"
                    color={colors.themeblue}
                    size={responsiveFontSize(2.2)
}
                  />
                );
              }}
              password={false}
              placeHolder="First Name"
              color="grey"
            />
            <InputField
              error={!userData.userName && isSubmit}
              getValue={v => getValue('lastName', v)}
              value={userData.lastName}
              returnKeyType="next"
              // onSubmitEditing={()=>emailRef.current.focus()}
              icon={() => {
                return (
                  <PersonIcon
                    name="person"
                    color={colors.themeblue}
                    size={responsiveFontSize(2.2)
}
                  />
                );
              }}
              password={false}
              placeHolder="Last Name"
              color="grey"
            />
            <InputField
              // error={!userData.email && isSubmit}
              // error={!validateEmail(userData.email) && isSubmit}
              getValue={v => getValue('email', v)}
              // innerRef={emailRef}
              value={userData.email}
              icon={() => {
                return (
                  <MailIcon
                    name="email"
                    color={colors.themeblue}
                    size={responsiveFontSize(2.2)
}
                  />
                );
              }}
              smallCaps={true}
              password={false}
              placeHolder="Email"
              color="grey"
            />

            <View
              style={{
                height: responsiveHeight(6),
                width: responsiveWidth(90),
                // marginTop: responsiveHeight(5),
                marginVertical: 5,
                borderWidth: 1,
                borderColor: colors.silver,
                borderRadius: responsiveFontSize(0.75),
                backgroundColor: 'white',
              }}>
            
                <TouchableOpacity
          
                 onPress={() => setShow(true)}
                  style={{
                    // backgroundColor: 'red',
                    height: responsiveHeight(6),
                    width: responsiveWidth(90),
                    borderRadius: 6,
                    alignItems:'center',
                  }}>
                  <View style={{
                    height: responsiveHeight(6),
                    // backgroundColor:'red',
                    width: responsiveWidth(90),
                    alignItems:'center',
                    flexDirection:'row',
                    justifyContent:'flex-start',
                  }}>
                  <DobIcon
                  style={{left: 8}}
                    name="calendar"
                    color={colors.themeblue}
                    size={responsiveFontSize(2.2)
}
                  />
                  
                  <Text style={{left: 20}}>
                  Date of Birth ({ moment(userData.DOB).format('YYYY-MM-DD')})
                  </Text>
                  </View>
                  </TouchableOpacity>
        
            </View>

            {/* <DropDownComp
              items={gender}
              open={isOpenDrpdwn}
              value={userData.gender}
              // setItems={setGender}
              setOpen={setIsOpenDrpdwn}
              onSelectItem={data => getValue('gender', data.value)}
              // error={!userData.gender && isSubmit}
              listMode="SCROLLVIEW"
              placeholdertxt="Gender (Optional)"
              style={{marginTop: 5}}
            /> */}
          </View>
          <View
            style={{
              ...styles.btnCont,
              zIndex: isOpenDrpdwn && Platform.OS == 'ios' ? -5 : 1,
            }}>
            <Btn text="Next" call={() => onNext()} />
          </View>
        </View>
        <DateTimePicker
          testID="dateTimePic"
          value={userData.DOB}
          isVisible={show}
          mode="date"
          is24Hour={true}
          onConfirm={onChange}
          onCancel={() => setShow(false)}
        />
      </ScrollView>
     
    </>
  );
};

const styles = StyleSheet.create({
  containerScroll: {
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(70),
  },
  cont: {
    alignItems: 'center',
    top: responsiveFontSize(5),
  },
  btnCont: {
    width: responsiveWidth(90),
    marginTop: responsiveHeight(2),
    height: responsiveHeight(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputCont: {
    width: responsiveWidth(90),
    marginTop: responsiveHeight(5),
  },
  subHd: {
    fontSize: responsiveFontSize(1.8),
    color: 'black',
  },
  // dropCont: {
  //   width: responsiveWidth(90),
  // },
  imgCont: {
    width: responsiveWidth(100),
    height: responsiveHeight(20),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    // backgroundColor:"red"
  },
  logo: {
    width: responsiveWidth(60),
    height: responsiveHeight(15),
    alignSelf: 'center',
  },
});

export default BasicDetail
