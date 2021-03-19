import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import Header from '../../components/Header';
import Works from '../../services/Works';
import Context from '../Context';

function AddNotes({ navigation: { goBack } }) {
  const [getText, setText] = useState('');
  const [context, setContext] = useContext(Context);

  const handleAddItem = () => {
    if (getText.trim() === '') {
      return Alert.alert('The note field is blank');
    }

    var date = new Date();
    setContext((state) => {
      return [
        ...state,
        ...[
          {
            id: date.toString(),
            note: getText,
            date:
              date.getFullYear() +
              '/' +
              (date.getMonth() + 1) +
              '/' +
              date.getDate(),
            status: 'Not done',
          },
        ],
      ];
    });
    setText('');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#c63f17" barStyle="light-content" />
        <Header title="New Note" onBack={() => goBack()}></Header>
        <View style={styles.wrapper}>
          <TextInput
            style={styles.inputBox}
            placeholder="New note"
            onChangeText={(text) => setText(text)}
            value={getText}
          ></TextInput>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setText('')}
            >
              <Text style={styles.cancelBtnText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
              <Text style={styles.addBtnText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}></View>
      </View>
    </TouchableWithoutFeedback>
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
    paddingTop: 100,
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
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  cancelButton: {
    width: 120,
    height: 50,
    backgroundColor: 'coral',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
    paddingVertical: 12,
  },
  cancelBtnText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
  addButton: {
    width: 120,
    height: 50,
    backgroundColor: 'coral',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
    paddingVertical: 12,
  },
  addBtnText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
  },
});

export default AddNotes;
