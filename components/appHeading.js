// This modules caters for a typicl React Native Heading in our app
// We can pass the title and colour props into the buton
import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

// import our standard library of colours
import colors from "../config/colours.js";
import AuthContext from "./auth/context.js";

const AppButton = ({ title, color = "defaultHeadingColour" }) => {
  const { user } = useContext(AuthContext);
  return (
    <View style={[styles.button, { backgroundColor: colors[color] }]}>
      <Text style={styles.text}>{title}</Text>
      {user && <Text>{user.username}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    // horizontally and vertically centre the text
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    // make button stretch to fill 90% its container
    width: "90%",
    margin: 20,
  },
  text: {
    color: colors.white,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default AppButton;
