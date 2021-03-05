import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Notes from "../../services/Notes";

function AddNotes({ navigation }) {
  const [getText, setText] = useState("");
  const [getList, setList] = useState(Notes);

  const addItem = () => {
    getList.push({ id: Math.random().toString(), note: getText });
    setText("");
    return navigation.navigate("ListWorks");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        placeholder="New note"
        onChangeText={text => setText(text)}
      ></TextInput>
      <TouchableOpacity style={styles.addButton} onPress={addItem}>
        <Text style={styles.adBtnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {},
  addButton: {},
  adBtnText: {},
});

export default AddNotes;
