import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Modal,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Loader from "../../components/Loader";
import moment from "moment";
import AsyncStorage from '@react-native-async-storage/async-storage';

const array = [
  {
    id: 1,
    RacingName: 'Funds Transfers',
    Horse: 12,
    Bet: 100000,
    RacingDate: 'Bank BCA',
    Status: 'Pending',
    Action: '001 Days Ago',
  },
  {
    id: 2,
    RacingName: 'Funds Transfers',
    Horse: 3,
    Bet: 100000,
    RacingDate: 'Bank BCA',
    Status: 'Pending',
    Action: '001 Days Ago',
  },
  {
    id: 3,
    RacingName: 'Funds Transfers',
    Horse: 4,
    Bet: 0,
    RacingDate: 'Bank BCA',
    Status: 'Pending',
    Action: '001 Days Ago',
  },
  {
    id: 4,
    RacingName: 'Funds Transfers',
    Horse: 152,
    Bet: 0,
    RacingDate: 'Bank BCA',
    Status: 'Pending',
    Action: '001 Days Ago',
  },
  {
    id: 5,
    RacingName: 'Funds Transfers',
    Horse: 121,
    Bet: 0,
    RacingDate: 'Bank BCA',
    Status: 'Pending',
    Action: '001 Days Ago',
  },
  {
    id: 6,
    RacingName: 'Funds Transfers',
    Horse: 1233,
    Bet: 0,
    RacingDate: 'Bank BCA',
    Status: 'Pending',
    Action: '001 Days Ago',
  },
  {
    id: 7,
    RacingName: 'Funds Transfers',
    Horse: 12123,
    Bet: 0,
    RacingDate: 'Bank BCA',
    Status: 'Pending',
    Action: '001 Days Ago',
  },
];

const WithdrawaleScreen = ({navigation }) => {

  const [data, onChangeData] = useState([]);
  const [loader, onChangeLoader] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const apiHit = async () => {
    try {
      const userData = await AsyncStorage.getItem("data")
        if(userData){
          const parseData =  JSON.parse(userData)

      const res = await axios.get(
        `https://11kuda.com/api.php?withdrawal=${parseData.id}`
      );

      if (res.status) {
        // let array = [];
        // array.push(res.data.data);
        console.log(res.data, "DATA");
        onChangeData(res.data.data);
        onChangeLoader(false);
      }
    }
    } catch (err) {
      console.log(err, "ERROR");
      onChangeLoader(false);
    }
  
  };

  useEffect(() => {
    onChangeLoader(true);
    apiHit();
  }, []);

  if (loader) {
    return <Loader />;
  }


  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(10),
          marginTop: 10,
          alignSelf: 'center',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: 5,
            height: 5,
            backgroundColor: '#D81254',
            borderRadius: 100,
          }}
        />
        <Text
          style={{
            fontSize: responsiveFontSize(2.5),
            color: 'black',
            fontWeight: '700',
            right: 6,
          }}>
          WITHDRAWALS
        </Text>
        <View style={{width: 70, height: 3, backgroundColor: '#D81254'}} />
        <TouchableOpacity
          onPress={()=> navigation.navigate('Withdraw')}
          style={{
            width: responsiveWidth(30),
            height: responsiveHeight(8),
            backgroundColor: '#87CEEB',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
          }}>
          <Text style={{fontSize: responsiveFontSize(1.4)}}>
            Request Withdraw
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        key={'#'}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <View style={styles.flatlist}>
            <Text style={styles.text1}>{item.method}</Text>
            <Text style={styles.text1}>{item.details}</Text>
            <Text style={styles.text1}>{item.amount}</Text>
            <Text style={styles.text1}>{item.status}</Text>
            <Text style={styles.text1}>{item.created_at}</Text>
          </View>
        )}
        ListHeaderComponent={
          <View style={styles.flatlistHeader}>
            <Text style={styles.text}>Method</Text>
            <Text style={styles.text}>Detail</Text>
            <Text style={styles.text}>Amount</Text>
            <Text style={styles.text}>Status</Text>
            <Text style={styles.text}>Created At</Text>
          </View>
        }
      />
    </View>
  );
};

export default WithdrawaleScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: responsiveFontSize(1.2),
    fontWeight: '700',
    color: 'white',
    width: responsiveWidth(14),
    textAlign: 'center',
  },
  text1: {
    fontSize: responsiveFontSize(1.2),
    fontWeight: '400',
    color: 'black',
    width: responsiveWidth(14),
    textAlign:'left'
  },
  flatlistHeader: {
    width: responsiveWidth(100),
    height: responsiveHeight(10),
    backgroundColor: '#D81254',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  flatlist: {
    width: responsiveWidth(100),
    height: responsiveHeight(10),
    borderColor: '#D81254',
    borderWidth: 0.6,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
