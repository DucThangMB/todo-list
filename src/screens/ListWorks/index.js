import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";
import Header from "../../components/Header";
import Notes from "../../services/Notes";

function ItemList({ Notes }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text} numberOfLines={3}>
          {Notes.note}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.delButton}
        onPress={() => Alert.alert("This function is under construction")}
      >
        <Text style={styles.delBtnText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

function ListWorks({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ebeaf2",
      }}
    >
      <StatusBar backgroundColor="#c63f17" barStyle="light-content" />
      <Header></Header>
      <FlatList
        data={Notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ItemList Notes={item}></ItemList>}
      ></FlatList>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => Alert.alert("This function is under construction")}
      >
        <Text style={styles.addBtnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    borderRadius: 7,
    overflow: "hidden",
  },
  textContainer: {
    marginLeft: 10,
    marginVertical: 10,
    flex: 1,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  delButton: {
    backgroundColor: "#1b84da",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    padding: 5,
  },
  delBtnText: {
    color: "#fff",
  },
  addButton: {
    position: "absolute",
    right: "10%",
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "coral",
  },
  addBtnText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
  },
});

export default ListWorks;
