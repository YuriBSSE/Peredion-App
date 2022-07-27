import { LOG_IN } from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://12rider.com/api.php?email=${email}&password=${password}`
    );

    if (res.status == 200) {
      console.log(res.data?.user[0]?.user);
      await AsyncStorage.setItem(
        "data",
        JSON.stringify(res.data?.user[0]?.user)
      );
      dispatch({
        type: LOG_IN,
        payload: res.data?.user[0]?.user
      })
      Toast.show({
        type: "success",
        text1: "Login Successfully",
      });
    }
  } catch (err) {
    console.log(err);
    Toast.show({
      type: "error",
      text1: "Something Wrong",
    });
  }
};
