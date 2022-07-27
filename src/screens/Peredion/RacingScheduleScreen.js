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
import Entypo from "react-native-vector-icons/Entypo";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import HistoryScreen from "./HistoryScreen";
import BettingHistoryScreen from "./BettingHistoryScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Loader from "../../components/Loader";
import moment from "moment";
const Tab = createMaterialTopTabNavigator();
const array = [
  {
    id: 1,
    RacingName: "Funds Transfers",
    Horse: 12,
    Bet: 100000,
    RacingDate: "Bank BCA",
    Status: "Pending",
    Action: "001 Days Ago",
  },
  {
    id: 2,
    RacingName: "Funds Transfers",
    Horse: 3,
    Bet: 100000,
    RacingDate: "Bank BCA",
    Status: "Pending",
    Action: "001 Days Ago",
  },
  {
    id: 3,
    RacingName: "Funds Transfers",
    Horse: 4,
    Bet: 0,
    RacingDate: "Bank BCA",
    Status: "Pending",
    Action: "001 Days Ago",
  },
  {
    id: 4,
    RacingName: "Funds Transfers",
    Horse: 152,
    Bet: 0,
    RacingDate: "Bank BCA",
    Status: "Pending",
    Action: "001 Days Ago",
  },
  {
    id: 5,
    RacingName: "Funds Transfers",
    Horse: 121,
    Bet: 0,
    RacingDate: "Bank BCA",
    Status: "Pending",
    Action: "001 Days Ago",
  },
  {
    id: 6,
    RacingName: "Funds Transfers",
    Horse: 1233,
    Bet: 0,
    RacingDate: "Bank BCA",
    Status: "Pending",
    Action: "001 Days Ago",
  },
  {
    id: 7,
    RacingName: "Funds Transfers",
    Horse: 12123,
    Bet: 0,
    RacingDate: "Bank BCA",
    Status: "Pending",
    Action: "001 Days Ago",
  },
];

const Single = () => {
  return <View style={{ flex: 1, backgroundColor: "red" }}></View>;
};
const Double = () => {
  return <View style={{ flex: 1, backgroundColor: "green" }}></View>;
};

const Triple = () => {
  return <View style={{ flex: 1, backgroundColor: "purple" }}></View>;
};

const OddEven = () => {
  return <View style={{ flex: 1, backgroundColor: "blue" }}></View>;
};

const BigSmall = () => {
  return <View style={{ flex: 1, backgroundColor: "yellow" }}></View>;
};

const RacingScreen = ({ navigation }) => {
  const [data, onChangeData] = useState([]);
  const [loader, onChangeLoader] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const apiHit = async () => {
    try {
      const res = await axios.get("https://11kuda.com/api.php?schedule=ture");
      // console.log(res.status, "DATA")
      if (res.status) {
        // let array = [];
        // array.push(res.data.data);
        console.log(res.data, "DATA")
        onChangeData(res.data.data);
        onChangeLoader(false);
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

  //   console.log(data, '============================================')
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: responsiveWidth(100),
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
          HORSE RACING SCHEDULE
        </Text>
        <View style={{ width: 70, height: 3, backgroundColor: "#D81254" }} />
      </View>
      <FlatList
        data={data}
        key={"#"}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <>
            <View style={styles.flatlist}>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                    width: 150,
                }}
              >
                <Text style={styles.text1}>{item.title}</Text>
                <Text style={styles.text1} numberOfLines={2}>
                  {moment(item.start_date).format("MMMM Do YYYY, h:mm:ss a")}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={{
                  borderWidth: 1,
                  width: 80,
                  height: 60,
                  borderRadius: 4,
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Text style={styles.text1}>Game Time</Text>
                  <Text style={styles.text1}>{item.duration}</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={{
                  borderWidth: 1,
                  width: 80,
                  height: 60,
                  borderRadius: 4,
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Text style={styles.text1}>Venue</Text>
                  <Text style={styles.text1}>{item.venue}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={{
                  borderWidth: 1,
                  width: 60,
                  height: 20,
                  borderRadius: 4,
                  justifyContent: "center",
                  backgroundColor: "#138496",
                }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text
                    style={[
                      styles.text1,
                      { color: "white", textAlign: "center" },
                    ]}
                  >
                    Bet Now
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </>
        )}
        //   ListHeaderComponent={
        //     <View style={styles.flatlistHeader}>
        //       <Text style={styles.text}>Method</Text>
        //       <Text style={styles.text}>Detail</Text>
        //       <Text style={styles.text}>Amount</Text>
        //       <Text style={styles.text}>Status</Text>
        //       <Text style={styles.text}>Created At</Text>
        //     </View>
        //   }
      />

      <Modal
        animationType="fade"
        transparent={true}
        statusBarTranslucent={true}
        style={{ flex: 1, justifyContent: "center", elevation: 5 }}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                backgroundColor: "#383838",
                width: "100%",
                height: 50,
                top: 0,
                position: "absolute",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "800",
                  color: "white",
                  left: 10,
                }}
              >
                PREDICT A GAME
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Entypo
                  name="cross"
                  color={"white"}
                  size={responsiveFontSize(3)}
                  style={{ right: 5 }}
                />
              </TouchableOpacity>
            </View>
            <ScrollView style={{ marginTop: 50 }}>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Text
                  style={{ fontSize: 17, fontWeight: "700", color: "#c40c49" }}
                >
                  CHELTENHAM
                </Text>
                <Text
                  style={{ fontSize: 17, fontWeight: "700", color: "black" }}
                >
                  EUROPEAN BLOODSTOCK
                </Text>
                <Text
                  style={{ fontSize: 15, fontWeight: "500", color: "black" }}
                >
                  JUL 21 2022 10:10:00 PM
                </Text>
              </View>
              {
                <View style={{backgroundColor:'red', width: 420}}>
                <Tab.Navigator screenOptions={{ 
                 
                }}
              >
                  <Tab.Screen
                  
                    name="Single"
                    component={Single}
                  />
                  <Tab.Screen
                    name="Double"
                    component={Double}
                  />
                   <Tab.Screen
                    name="Triple"
                    component={Triple}
                  />
                   <Tab.Screen
                    name="Odd/Even"
                    component={OddEven}
                  />
                   <Tab.Screen
                    name="Big/Small"
                    component={BigSmall}
                  />
                </Tab.Navigator>
                </View>
              }
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default RacingScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: responsiveFontSize(1.2),
    fontWeight: "700",
    color: "white",
    width: responsiveWidth(14),
    textAlign: "center",
  },
  text1: {
    fontSize: responsiveFontSize(1.3),
    fontWeight: "600",
    color: "black",

    // width: responsiveWidth(12),
    alignItems: "flex-start",
    //   textAlign: 'center',
  },
  flatlistHeader: {
    width: responsiveWidth(100),
    height: responsiveHeight(10),
    backgroundColor: "#D81254",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  flatlist: {
    width: responsiveWidth(100),
    height: responsiveHeight(10),
    borderColor: "#D81254",
    borderWidth: 0.6,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  centeredView: {
    backgroundColor: "rgba(0,0,0,0.7)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
  },
  modalView: {
    opacity: 1,
    width: responsiveScreenWidth(99),
    height: responsiveScreenHeight(55),
    // margin: 10,
    // justifyContent:'center',
    // alignContent:'center',
    backgroundColor: "white",
    // borderRadius: 20,
    // padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
