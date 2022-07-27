import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,FlatList
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  responsiveWidth,
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import Loader from "../../components/Loader";
import moment from "moment";
import axios from "axios";

const PromotionScreen = () => {
  const [data, onChangeData] = useState([]);
  const [loader, onChangeLoader] = useState(false);

  const apiHit = async () => {
    try {
      const res = await axios.get("https://11kuda.com/api.php?promotions=ture");
      // console.log(res.status, "DATA")
      if (res.status) {
        // let array = []
        // array.push(res.data.data)
        console.log(res.data, "DATA");
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
  return (
    <View style={{ flex: 1 }}>
     <FlatList
          data={data}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            flex: 1,
            justifyContent: "space-around",
          }}
          keyExtractor={(index, item) => index.toString()+ item.id}
          renderItem={({ item, index }) => (
            <LinearGradient key={item.id} colors={["#292929", "#141414"]} style={styles.largeBox}>
          <Image
            style={styles.largeBoxImage}
            resizeMode='contain'
            source={{uri: `https://11kuda.com/dashboard/${item.image}`}}
          />
          {console.log(item.image, "IMAGES")}
          <View style={styles.content}>
            <Text
              style={{
                color: "#D81254",
                fontSize: responsiveFontSize(1.3),
                fontWeight: "600",
              }}
            >
              NEW CUSTOMER OFFER
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: responsiveFontSize(1.8),
                fontWeight: "700",
              }}
            >
             {item.title}
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: responsiveFontSize(1.2),
                fontWeight: "400",
              }}
            >
              This Sports Promotion is available to qualifying customers until
              further notice. If we decide to withdraw this Sports Promotion,
              this will not impact any Qualifying Bets you have placed during
              the Promotional Period before such withdrawal.
            </Text>
            <TouchableOpacity
              style={{
                width: responsiveHeight(12),
                height: responsiveWidth(8),
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#D81254",
                top: 4,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: responsiveFontSize(1.4),
                  fontWeight: "700",
                }}
              >
                MORE INFO
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
          )}

        />
      {/* <View style={styles.main}>
        <LinearGradient colors={["#292929", "#141414"]} style={styles.largeBox}>
          <Image
            style={styles.largeBoxImage}
            source={require("./../../assets/pere/main.jpg")}
          />
          <View style={styles.content}>
            <Text
              style={{
                color: "#D81254",
                fontSize: responsiveFontSize(1.3),
                fontWeight: "600",
              }}
            >
              NEW CUSTOMER OFFER
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: responsiveFontSize(1.8),
                fontWeight: "700",
              }}
            >
              GET $20 IN FREE BETS WHEN YOU BET $5
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: responsiveFontSize(1.2),
                fontWeight: "400",
              }}
            >
              This Sports Promotion is available to qualifying customers until
              further notice. If we decide to withdraw this Sports Promotion,
              this will not impact any Qualifying Bets you have placed during
              the Promotional Period before such withdrawal.
            </Text>
            <TouchableOpacity
              style={{
                width: responsiveHeight(12),
                height: responsiveWidth(8),
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#D81254",
                top: 4,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: responsiveFontSize(1.4),
                  fontWeight: "700",
                }}
              >
                MORE INFO
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <LinearGradient colors={["#292929", "#141414"]} style={styles.smallBox}>
          <Image
            style={styles.smallBoxImage}
            source={require("./../../assets/pere/main1.jpg")}
          />
          <View style={styles.content}>
            <Text
              style={{
                color: "#D81254",
                fontSize: responsiveFontSize(1.3),
                fontWeight: "600",
              }}
            >
              NEW CUSTOMER OFFER
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: responsiveFontSize(1.8),
                fontWeight: "700",
              }}
            >
              GET A $50 WELCOME BONUS
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: responsiveFontSize(1.2),
                fontWeight: "400",
              }}
            >
              This is a Gaming Bonus. More details about how a Gaming Bonus
              operates can be found in our General Casino Bonus Terms &
              Conditions. These terms can be accessed.
            </Text>
            <TouchableOpacity
              style={{
                width: responsiveHeight(12),
                height: responsiveWidth(8),
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#D81254",
                top: 4,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: responsiveFontSize(1.4),
                  fontWeight: "700",
                }}
              >
                MORE INFO
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.main}>
        <LinearGradient
          colors={["#292929", "#141414"]}
          style={styles.middleBox}
        >
          <View
            style={{
              alignItems: "flex-start",
              flexDirection: "column",
              justifyContent: "space-around",
              padding: 10,
              width: responsiveWidth(55),
            }}
          >
            <Text
              style={{
                color: "#D81254",
                fontSize: responsiveFontSize(1.3),
                fontWeight: "600",
              }}
            >
              NEW CUSTOMER OFFER
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: responsiveFontSize(1.8),
                fontWeight: "700",
              }}
            >
              PREDICT 4 MATCH STATS AND WIN $50 CASH
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: responsiveFontSize(1.2),
                fontWeight: "400",
              }}
            >
              This is a Gaming Bonus. More details about how a Gaming Bonus
              operates can be found in our General Casino Bonus Terms &
              Conditions. These terms can be accessed.
            </Text>
            <TouchableOpacity
              style={{
                width: responsiveHeight(12),
                height: responsiveWidth(8),
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#D81254",
                top: 4,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: responsiveFontSize(1.4),
                  fontWeight: "700",
                }}
              >
                MORE INFO
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            resizeMode="cover"
            style={styles.mainImage}
            source={require("./../../assets/pere/main2.jpg")}
          />
        </LinearGradient>
      </View>
      <View style={styles.main}>
        <LinearGradient colors={["#292929", "#141414"]} style={styles.smallBox}>
          <Image
            style={styles.smallBoxImage}
            source={require("./../../assets/pere/main3.jpg")}
          />
          <View style={styles.content}>
            <Text
              style={{
                color: "#D81254",
                fontSize: responsiveFontSize(1.3),
                fontWeight: "600",
              }}
            >
              BEST ODD GUARANTEED
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: responsiveFontSize(1.8),
                fontWeight: "700",
              }}
            >
              GET PAID AT THE BIGGER PRICE
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: responsiveFontSize(1.2),
                fontWeight: "400",
              }}
            >
              This is a Gaming Bonus. More details about how a Gaming Bonus
              operates can be found in our General Casino Bonus Terms &
              Conditions. These terms can be accessed.
            </Text>
            <TouchableOpacity
              style={{
                width: responsiveHeight(12),
                height: responsiveWidth(8),
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#D81254",
                top: 4,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: responsiveFontSize(1.4),
                  fontWeight: "700",
                }}
              >
                MORE INFO
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <LinearGradient colors={["#292929", "#141414"]} style={styles.largeBox}>
          <Image
            style={styles.largeBoxImage}
            resizeMode="cover"
            source={require("./../../assets/pere/main5.jpg")}
          />
          <View style={styles.content}>
            <Text
              style={{
                color: "#D81254",
                fontSize: responsiveFontSize(1.3),
                fontWeight: "600",
              }}
            >
              NEW CUSTOMER OFFER
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: responsiveFontSize(1.8),
                fontWeight: "700",
              }}
            >
              GET $20 IN FREE BETS WHEN YOU BET $5
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: responsiveFontSize(1.2),
                fontWeight: "400",
              }}
            >
              This Sports Promotion is available to qualifying customers until
              further notice. If we decide to withdraw this Sports Promotion,
              this will not impact any Qualifying Bets you have placed during
              the Promotional Period before such withdrawal.
            </Text>
            <TouchableOpacity
              style={{
                width: responsiveHeight(12),
                height: responsiveWidth(8),
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#D81254",
                top: 4,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: responsiveFontSize(1.4),
                  fontWeight: "700",
                }}
              >
                MORE INFO
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View> */}
    </View>
  );
};

export default PromotionScreen;

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
    height: responsiveHeight(45),
    backgroundColor: "blue",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 8,
    margin: 5
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
