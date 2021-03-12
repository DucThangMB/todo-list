import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Header from '../../components/Header';
import Works from '../../services/Works';

function AddNotes({ navigation }) {
  const [getText, setText] = useState('');

  const addItem = () => {
    var date = new Date();
    Works.push({
      id: Math.floor(Math.random() * 1001),
      note: getText,
      date:
        date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate(),
      status: 'Not done',
    });
    setText('');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#c63f17" barStyle="light-content" />
      <Header
        title="New Note"
        onBack={() => navigation.navigate('WorkList')}
      ></Header>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.inputBox}
          placeholder="New note"
          onChangeText={(text) => setText(text)}
          value={getText}
        ></TextInput>
        <TouchableOpacity style={styles.addButton} onPress={addItem}>
          <Text style={styles.adBtnText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebeaf2',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: 250,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    marginVertical: 20,
  },
  addButton: {
    width: 250,
    height: 50,
    backgroundColor: 'coral',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 12,
  },
  adBtnText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default AddNotes;
