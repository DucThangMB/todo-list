import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  Text,
  TextInput,
  Image,
  Keyboard,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

function Login({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#ffa270" }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#c63f17" barStyle="light-content" />
          <Image
            source={require("../../images/App-Icon.png")}
            style={styles.logo}
          ></Image>
          <TextInput style={styles.inputBox} placeholder="Username"></TextInput>
          <TextInput
            style={styles.inputBox}
            placeholder="Password"
            secureTextEntry={true}
          ></TextInput>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("ListWorks");
            }}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    borderRadius: 8,
    resizeMode: "contain",
  },
  inputBox: {
    width: 200,
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#fff",
    marginVertical: 10,
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
export default Login;
