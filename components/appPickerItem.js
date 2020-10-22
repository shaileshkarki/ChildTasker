import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";

import Text from "./appText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
let widthStyle = ""
function PickerItem({ item, onPress, numColumns }) {
  widthStyle = (100 / numColumns).toFixed(0)
  console.log("width style = ", widthStyle)
  return (

    <TouchableOpacity style={styles.container} onPress={onPress}>

      <MaterialCommunityIcons
        name={"account"}
        size={40}
        color={defaultStyles.colors.medium}
        style={styles.icon}
      />

      <Text style={styles.text}>{item.label}</Text>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({

  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",


  },
  text: {
    padding: 20,
    width: 125,
    alignSelf: "center"


  },
});

export default PickerItem;
