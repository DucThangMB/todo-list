import React from "react";
import { TouchableHighlight, Image, StyleSheet } from "react-native";

export default function BackButton({ onBackCheck }) {
  if (onBackCheck === null) {
    return null;
  }

  return (
      <TouchableHighlight
        style={styles.button}
        activeOpacity={0.6}
        underlayColor="#ffa270"
        onPress={onBackCheck}
      >
        <Image
          source={require("../../images/arrow-left-bold.png")}
          style={styles.buttonIcon}
        ></Image>
      </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
      height: 450,
      justifyContent: "flex-end",
      alignItems: "center",
    },
    button: {
      position: "absolute",
      top: 12,
      left: 10,
      width: 70,
      height: 40,
      backgroundColor: "#ff5722",
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 10,
      paddingVertical: 12,
    },
    buttonIcon: {
      width: 30,
      height: 20,
    },
  });