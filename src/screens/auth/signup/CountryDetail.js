import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Btn from '../../../components/Btn';
import {useNavigation} from '@react-navigation/native';
import Header from '../Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import InputField from '../../../components/InputField';
 
import colors from '../../../assets/colors/colors';
import Loader from '../../../components/Loader';
import DropDownComp from '../../../components/DropDownComp';



const CountryDetail = ({
  userData,
  getValue,
  get_countries,
  countryStateCityRed,
  get_states,
  get_cities,
  setUserData,
}) => {
  const [isSubmit, setIsSubmit] = useState(false);
  // country
  const navigation = useNavigation();
  const [selectBank, setSelectBank] = useState([
    {label: 'Bank BCA', value: 'bank bca'},
    {label: 'Bank BNI', value: 'bank bni'},
    {label: 'Bank BRI', value: 'bank bri'},
    {label: 'Bank Mandiri', value: 'bank mandiri'},
  ]);
  const [selectEMoney, setSelectEMoney] = useState([
    {label: 'OVO', value: 'ovo'},
    {label: 'Go-Pay', value: 'go pay'},
    {label: 'DANA', value: 'dana'},
    {label: 'LinkAja', value: 'linkaja'},
  ]);
  const [isOpenDrpdwn, setIsOpenDrpdwn] = useState(false);
  const [isOpenDrpdwn1, setIsOpenDrpdwn1] = useState(false);
  // useEffect(() => {
  //   get_countries().then(() => {
  //     setIsCountryApiCall(false);
  //     getValue('selectedCountry', "US")
  //   });
  // }, []);

  // useEffect(() => {
  //   getValue('selectedCity', '');
  //   getValue('selectedState', '');
  //   if (userData.selectedCountry !== '') {
  //     setIsStateApiCall(true);
  //     get_states(userData.selectedCountry).then(() => {
  //       setIsStateApiCall(false);
  //     });
  //   }
  // }, [userData.selectedCountry]);

  // useEffect(() => {
  //   if (userData.selectedState !== '') {
  //     setIsCityApiCall(true);
  //     get_cities(userData.selectedCountry, userData.selectedState).then(() => {
  //       setIsCityApiCall(false);
  //     });
  //   }
  // }, [userData.selectedState]);

  const onNext = () => {
    setIsSubmit(true);
 
          navigation.navigate('auth_password_detail');
        

  };

  return (
    <>
      <Header title="Contact Details" />
      <ScrollView
        contentContainerStyle={styles.containerScroll}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always">
        {/* <View style={styles.imgCont}>
          <View
            style={{backgroundColor: '#383838', borderRadius: 12, padding: 10}}>
            <Image
              style={styles.logo}
              resizeMode="contain"
              source={require('../../../assets/logo.png')}
            />
          </View>
        </View> */}
        <View style={styles.cont}>
          <View style={styles.inputCont}>
            <InputField
              error={!userData.selectedCountry && isSubmit}
              getValue={v => getValue('selectedCountry', v)}
              value={userData.selectedCountry}
              returnKeyType="next"
              // onSubmitEditing={()=>emailRef.current.focus()}
              icon={() => {
                return (
                  <FontAwesome
                    name="map-o"
                    color={colors.themeblue}
                    size={responsiveFontSize(2.2)
}
                  />
                );
              }}
              password={false}
              placeHolder="Country"
              color="grey"
            />
            <InputField
              error={!userData.selectedState && isSubmit}
              getValue={v => getValue('selectedState', v)}
              value={userData.selectedState}
              returnKeyType="next"
              // onSubmitEditing={()=>emailRef.current.focus()}
              icon={() => {
                return (
                  <Entypo
                    name="address"
                    color={colors.themeblue}
                    size={responsiveFontSize(2.2)
}
                  />
                );
              }}
              password={false}
              placeHolder="Address"
              color="grey"
            />
            <InputField
              // error={!userData.email && isSubmit}
              error={!userData.selectedCity && isSubmit}
              getValue={v => getValue('selectedCity', v)}
              // innerRef={emailRef}
              value={userData.selectedCity}
              icon={() => {
                return (
                  <MaterialCommunityIcons
                    name="city"
                    color={colors.themeblue}
                    size={responsiveFontSize(2.2)
}
                  />
                );
              }}
              smallCaps={true}
              password={false}
              placeHolder="City"
              color="grey"
            />
               <InputField
              // error={!userData.email && isSubmit}
              error={!userData.phonenumber && isSubmit}
              getValue={v => getValue('phonenumber', v)}
              // innerRef={emailRef}
              value={userData.phonenumber}
              icon={() => {
                return (
                  <MaterialCommunityIcons
                    name="phone"
                    color={colors.themeblue}
                    size={responsiveFontSize(2.2)
}
                  />
                );
              }}
              keyboardType={'number'}
              smallCaps={true}
              password={false}
              placeHolder="Phone"
              color="grey"
            />
                 <DropDownComp
                    items={selectBank}
                    open={isOpenDrpdwn}
                    value={userData.selectBank}
                    // setItems={setGender}
                    setOpen={setIsOpenDrpdwn}
                    onSelectItem={data => getValue('selectBank', data.value)}
                    // error={!userData.gender && isSubmit}
                    listMode="SCROLLVIEW"
                    placeholdertxt="Select Bank"
                    style={{marginTop: 5, zIndex: 10}}
                  />
              <InputField
              // error={!userData.email && isSubmit}
              error={!userData.selectAccountNo && isSubmit}
              getValue={v => getValue('selectAccountNo', v)}
              // innerRef={emailRef}
              value={userData.selectAccountNo}
              icon={() => {
                return (
                  <MaterialCommunityIcons
                    name="card-account-details"
                    color={colors.themeblue}
                    size={responsiveFontSize(2.2)
}
                  />
                );
              }}
              keyboardType={'number'}
              smallCaps={true}
              password={false}
              placeHolder="Account Number"
              color="grey"
            />
             <DropDownComp
                    items={selectEMoney}
                    open={isOpenDrpdwn1}
                    value={userData.selectEMoney}
                    // setItems={setGender}
                    setOpen={setIsOpenDrpdwn1}
                    onSelectItem={data => getValue('selectEMoney', data.value)}
                    // error={!userData.gender && isSubmit}
                    listMode="SCROLLVIEW"
                    placeholdertxt="Select E-Money"
                    style={{marginTop: 5,zIndex: 1}}
                  />
              <InputField
              // error={!userData.email && isSubmit}
              error={!userData.accountENo && isSubmit}
              getValue={v => getValue('accountENo', v)}
              // innerRef={emailRef}
              value={userData.accountENo}
              icon={() => {
                return (
                  <MaterialCommunityIcons
                    name="card-account-details"
                    color={colors.themeblue}
                    size={responsiveFontSize(2.2)
}
                  />
                );
              }}
              keyboardType={'number'}
              smallCaps={true}
              password={false}
              placeHolder="Account E-Money Number"
              color="grey"
            />
          </View>
          <View style={styles.btnCont}>
            <Btn
              text="Previous"
              call={() => {
                // setUserData({
                //   ...userData,
                //   selectedCountry: '',
                //   selectedState: '',
                //   selectedCity: '',
                // });
                navigation.goBack();
              }}
              pS={{width: responsiveWidth(40)}}
            />
            <Btn
              text="Next"
              call={() => {
                onNext();
              }}
              pS={{width: responsiveWidth(40), backgroundColor: '#000000'}}
            />
         
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  containerScroll: {
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(90),
    // backgroundColor:"red"
  },
  cont: {
    alignItems: 'center',
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
    zIndex: 20
  },
  subHd: {
    fontSize: responsiveFontSize(1.9),
    color: 'black',
  },
  dropCont: {
    width: responsiveWidth(90),
    marginTop: responsiveHeight(1),
  },
  imgCont: {
    width: responsiveWidth(100),
    height: responsiveHeight(20),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },
  logo: {
    width: responsiveWidth(50),
    height: responsiveHeight(4),
    alignSelf: 'center',
  },
});

const mapStateToProps = ({}) => {
  return {};
};

export default CountryDetail;
