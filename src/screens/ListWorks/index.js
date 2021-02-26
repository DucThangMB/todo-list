import React from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  StyleSheet,
} from "react-native";

function ListWorks({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ebeaf2",
      }}
    >
      <StatusBar backgroundColor="#c63f17" barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.content}>TO DO LIST</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.button}
          activeOpacity={0.6}
          underlayColor="#ffa270"
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>LOG OUT</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "coral",
  },
  content: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonContainer: {
    height: 450,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: "#ff7043",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff",
  },
});
export default ListWorks;
