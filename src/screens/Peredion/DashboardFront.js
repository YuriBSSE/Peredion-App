import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import {
  responsiveWidth,
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../assets/colors/colors';
import { useDispatch } from 'react-redux';

function DashboardFront({navigation}) {

  const [loader, onChangeLoader] = useState(false)
  const dispatch = useDispatch();

  const logout =  async () => {
    onChangeLoader(true)
    dispatch({ type: 'clearAuth' });
    await AsyncStorage.clear();
    onChangeLoader(false)
  }

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.image}>
            <Image
              style={styles.imagesinner}
              source={require('./../../assets/avatar.jpg')}
            />
          </View>

          <View style={styles.topContainer}>
            <TouchableOpacity style={styles.topButtons}>
              <Ionicons
                name="ios-create-outline"
                color={'white'}
                size={responsiveFontSize(2)}
                style={{right: 5}}
              />
              <Text style={{color: 'white'}}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={logout} style={styles.topButtons}>
            { loader ?
              <ActivityIndicator
              size={responsiveFontSize(3)}
              color={colors.loaderWhite}
            />:
            <>
            <Ionicons
                name="exit-outline"
                color={'white'}
                size={responsiveFontSize(2)}
                style={{right: 5}}
              />
              <Text style={{color: 'white'}}>Logout</Text>
            </>
            }
             
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomButtonContainer}>
          <View style={styles.bottomInnerContainer}>
            <TouchableOpacity style={styles.bottomButton}>
              <Text style={{color: 'white'}}>Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('RacingScreen')}  style={styles.bottomButton}>
              <Text style={{color: 'white'}}>Make Bets</Text>
            </TouchableOpacity>
         
          </View>
          <View style={styles.bottomInnerContainer}>
    
            <TouchableOpacity onPress={()=> navigation.navigate('Withdrawale')} style={styles.bottomButton}>
              <Text style={{color: 'white'}}>Withdrawals</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={()=> navigation.navigate('RacingScreen')} style={styles.bottomButton}>
              <Text style={{color: 'white'}}>Racing Schedule</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
      <View style={{
        width: responsiveWidth(90),
        height: responsiveHeight(10),
       marginTop: 10,alignSelf:'center',
        justifyContent:'space-around', alignItems:'center', flexDirection:'row'
      }}>
      <View style={{width:5,height: 5, backgroundColor:'#D81254', borderRadius: 100}} />
      <Text style={{fontSize:responsiveFontSize(3),color:'black', fontWeight:'700', right: 6}}>USER STATISTICS</Text>
      <View style={{width:100,height: 3, backgroundColor:'#D81254'}} />
      </View>
      <View
        style={{
          height: responsiveHeight(48),
          width: responsiveWidth(100),
          marginTop: 10,
          alignSelf: 'center',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: responsiveWidth(100),
          }}>
          <View style={styles.box}>
            <View style={styles.boxCircle}>
              <FontAwesome
                name="money"
                color={'#D81254'}
                size={responsiveFontSize(3)}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  fontWeight: '900',
                  color: '#D81254',
                }}>
                $993,988,040
              </Text>
              <Text
                style={{
                  fontSize: responsiveFontSize(1.2),
                  fontWeight: '400',
                  color: 'black',
                }}>
                AVAILABLE BALANCE
              </Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.boxCircle}>
              <MaterialIcons
                name="monetization-on"
                color={'#D81254'}
                size={responsiveFontSize(3)}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  fontWeight: '900',
                  color: '#D81254',
                }}>
                $1,000,000,000
              </Text>
              <Text
                style={{
                  fontSize: responsiveFontSize(1.2),
                  fontWeight: '400',
                  color: 'black',
                }}>
                DEPOSITS TOTAL
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View style={styles.box}>
            <View style={styles.boxCircle}>
              <SimpleLineIcons
                name="credit-card"
                color={'#D81254'}
                size={responsiveFontSize(3)}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  fontWeight: '900',
                  color: '#D81254',
                }}>
                $00.00
              </Text>
              <Text
                style={{
                  fontSize: responsiveFontSize(1.2),
                  fontWeight: '400',
                  color: 'black',
                }}>
                TOTAL PAYOUT
              </Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.boxCircle}>
              <FontAwesome
                name="hourglass-1"
                color={'#D81254'}
                size={responsiveFontSize(3)}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  fontWeight: '900',
                  color: '#D81254',
                }}>
                $00.00
              </Text>
              <Text
                style={{
                  fontSize: responsiveFontSize(1.2),
                  fontWeight: '400',
                  color: 'black',
                }}>
                PENDING AMOUNT
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  boxCircle: {
    width: responsiveWidth(15),
    height: responsiveWidth(15),
    borderColor: '#D81254',
    borderRadius: 100,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: responsiveHeight(20),
    width: responsiveWidth(40),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
  },
  container: {
    height: responsiveHeight(32),
    width: responsiveWidth(100),
    backgroundColor: '#383838',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginVertical: 10,
  },
  image: {
    height: responsiveHeight(16),
    width: responsiveHeight(16),
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'white',
  },
  imagesinner: {
    height: responsiveHeight(15.5),
    width: responsiveHeight(15.5),
    borderRadius: 100,
    backgroundColor: 'white',
  },
  topContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: responsiveHeight(11),
  },
  topButtons: {
    height: responsiveHeight(5),
    width: 120,
    borderWidth: 2,
    borderColor: '#E6165B',
    backgroundColor: '#E6165B',
    borderRadius: 18,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  bottomButtonContainer: {
    // height: responsiveHeight(15),
    width: responsiveWidth(100),
    // backgroundColor:'red',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'space-around'
  },
  bottomInnerContainer: {
    width: responsiveWidth(100),
    // height: responsiveHeight(8),
    margin: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomButton: {
    height: responsiveHeight(5),
    width: 180,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 18,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default DashboardFront;
