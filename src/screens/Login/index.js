import React, { useState } from "react";
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
  Alert,
  SafeAreaView
} from "react-native";
import Users from "../../services/Users";

function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username.trim() === "") {
      return Alert.alert("Username field cannot be left blank");
    }

    if (password.trim() === "") {
      return Alert.alert("Password field cannot be left blank");
    }

    if (username !== Users.username || password !== Users.password) {
      return Alert.alert("Your username or password was incorrect");
    }

    return navigation.navigate("ListWorks");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#c63f17" barStyle="light-content" />
        <Image
          source={require("../../images/App-Icon.png")}
          style={styles.logo}
        ></Image>
        <TextInput
          style={styles.inputBox}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
        ></TextInput>
        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffa270",
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
