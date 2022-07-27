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
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Loader from "../../components/Loader";
import moment from "moment";
import AsyncStorage from '@react-native-async-storage/async-storage';

const array = [
  {
    id: 1,
    RacingName: "Trial 1",
    Horse: 12,
    Bet: 100000,
    RacingDate: "2022-05-23 15:00:00",
    Status: "Pending",
    Action: "Cancel Bet",
  },
  {
    id: 2,
    RacingName: "Trial 1",
    Horse: 3,
    Bet: 100000,
    RacingDate: "2022-05-23 15:00:00",
    Status: "Pending",
    Action: "Cancel Bet",
  },
  {
    id: 3,
    RacingName: "Trial 1",
    Horse: 4,
    Bet: 100000,
    RacingDate: "2022-05-23 15:00:00",
    Status: "Pending",
    Action: "Cancel Bet",
  },
  {
    id: 4,
    RacingName: "Trial 1",
    Horse: 152,
    Bet: 2000,
    RacingDate: "2022-05-23 15:00:00",
    Status: "Pending",
    Action: "Cancel Bet",
  },
  {
    id: 5,
    RacingName: "Trial 1",
    Horse: 121,
    Bet: 300000,
    RacingDate: "2022-05-23 15:00:00",
    Status: "Pending",
    Action: "Cancel Bet",
  },
  {
    id: 6,
    RacingName: "Trial 1",
    Horse: 1233,
    Bet: 500000,
    RacingDate: "2022-05-23 15:00:00",
    Status: "Pending",
    Action: "Cancel Bet",
  },
  {
    id: 7,
    RacingName: "Trial 1",
    Horse: 12123,
    Bet: 10000,
    RacingDate: "2022-05-23 15:00:00",
    Status: "Pending",
    Action: "Cancel Bet",
  },
];

const BettingHistoryScreen = () => {
  const [data, onChangeData] = useState([]);
  const [loader, onChangeLoader] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const apiHit = async () => {
    try {
      const userData = await AsyncStorage.getItem("data")
        if(userData){
          const parseData =  JSON.parse(userData)

      const res = await axios.get(
        `https://11kuda.com/api.php?betting_history=${parseData.id}`
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
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: responsiveWidth(90),
          height: responsiveHeight(10),
          marginTop: 10,
          alignSelf: "center",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: 5,
            height: 5,
            backgroundColor: "#D81254",
            borderRadius: 100,
          }}
        />
        <Text
          style={{
            fontSize: responsiveFontSize(2.5),
            color: "black",
            fontWeight: "700",
            right: 6,
          }}
        >
          Betting History
        </Text>
        <View style={{ width: 100, height: 3, backgroundColor: "#D81254" }} />
      </View>
      <FlatList
        data={data}
        key={"#"}
        numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            flex: 1,
            justifyContent: "space-around",
          }}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <LinearGradient key={item.id} colors={["#e8e8e8", "#D81254"]} style={[styles.largeBox,{marginVertical: 10}]}>
          {console.log(item.image, "IMAGES")}
          <View style={styles.content}>
            <Text
              style={{
                color: "black",
                fontSize: responsiveFontSize(2),
                fontWeight: "600",
                left: 10
              }}
            >
            Game Title:
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: responsiveFontSize(1.4),
                fontWeight: "400",
                left: 10
              }}
            >
             {item.title}
            </Text> 
            <View style={{alignItems:'center', flexDirection:'row',    left: 10}}>
            <Text
              style={{
                color: "black",
                fontSize: responsiveFontSize(2),
                fontWeight: "600",
              }}
            >
            Bet Horse:
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: responsiveFontSize(1.4),
                fontWeight: "400",
              }}
            >
           {"  "} {item.type}
            </Text> 
            </View>
            <View style={{alignItems:'center', flexDirection:'row',    left: 10}}>
            <Text
              style={{
                color: "black",
                fontSize: responsiveFontSize(2),
                fontWeight: "600",
              }}
            >
            Amount:
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: responsiveFontSize(1.4),
                fontWeight: "400",
              }}
            >
           {"  "} {item.amount}
            </Text> 
            </View>
            <View style={{ flexDirection:'column', justifyContent:'space-between', alignItems:"flex-start", alignSelf:'center',  width: responsiveWidth(48),    left: 10}}>
             <View style={{alignItems:'flex-start', justifyContent:'space-around', flexDirection:'column'}}>
                <Text style={{fontSize:14, fontWeight:'700', color:'white'}}>State Date</Text>
                <Text style={{fontSize:12, fontWeight:'400', color:'white',}}>{item.start_date}</Text>
              </View>
              <View style={{alignItems:'flex-start', justifyContent:'space-around', flexDirection:'column'}}>
                <Text style={{fontSize:14, fontWeight:'700', color:'white'}}>Bet Date</Text>
                <Text style={{fontSize:12, fontWeight:'400', color:'white', }}>{item.created_at}</Text>
              </View>
             </View>
             {
              item.status == 'pending' ?
            <TouchableOpacity
              style={{
                width: responsiveHeight(12),
                height: responsiveWidth(8),
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                top: 4,
                borderRadius: 5, left: 10
              }}
            >
          
              <Text
                style={{
                  color: "black",
                  fontSize: responsiveFontSize(1.4),
                  fontWeight: "700",
                }}
              >
                Pending...
              </Text>
          
            </TouchableOpacity>:null
            }
          </View>
        </LinearGradient>
          // <View style={styles.flatlist}>
          // {/* <View style={{alignItems:"center",justifyContent:'flex-start', width: 70}}> */}
          //   <Text style={[styles.text1,{textAlign:'left'}]} numberOfLines={3}>{item.title}</Text>
          // {/* </View> */}
          //   <Text style={styles.text1}>{item.start_date}</Text>
          //   <Text style={styles.text1}>{item.Bet}</Text>
          //   <Text style={styles.text1}>{item.RacingDate}</Text>
          //   <Text style={styles.text1}>{item.Status}</Text>
          //   <TouchableOpacity
          //     style={{
          //       backgroundColor: "#138496",
          //       borderRadius: 8,
          //     }}
          //   >
          //     <Text
          //       style={{
          //         fontSize: responsiveFontSize(1.2),
          //         fontWeight: "400",
          //         color: "white",
          //         padding: 5,
          //         textAlign: "center",
          //       }}
          //     >
          //       {item.Action}
          //     </Text>
          //   </TouchableOpacity>
          // </View>
        )}
        // ListHeaderComponent={
        //   <View style={styles.flatlistHeader}>
        //     <Text style={styles.text}>Game Title</Text>
        //     <Text style={styles.text}>Bet Horse</Text>
        //     <Text style={styles.text}>State Date</Text>
        //     <Text style={styles.text}>Amount</Text>
        //     <Text style={styles.text}>Bet Date</Text>
        //     <Text style={styles.text}>Status</Text>
        //   </View>
        // }
      />
    </View>
  );
};

export default BettingHistoryScreen;

const styles = StyleSheet.create({
  content: {
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 10,

  },
  largeBoxImage: {
    width: responsiveWidth(48),
    height: responsiveHeight(20),
    borderRadius: 8,
  },
  smallBoxImage: {
    width: responsiveWidth(41),
    height: responsiveHeight(20),
    borderRadius: 8,
  },
  main: {
    width: responsiveWidth(100),
    height: responsiveHeight(46),

    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  mainImage: {
    width: responsiveWidth(38),
    height: responsiveHeight(45),
    borderRadius: 8,
  },
  largeBox: {
    width: responsiveWidth(48),
    height: responsiveHeight(30),
    backgroundColor: "blue",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 8,
    padding: 5, 
    
  },
  smallBox: {
    width: responsiveWidth(41),
    height: responsiveHeight(45),
    backgroundColor: "blue",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 8,
  },
  middleBox: {
    width: responsiveWidth(98),
    height: responsiveHeight(45),
    backgroundColor: "blue",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 8,
  },
});