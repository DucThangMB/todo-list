import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  FlatList,
} from 'react-native';
import useFocusEffect from '@react-navigation/native';
import Header from '../../components/Header';
import Works from '../../services/Works';

function ItemList({ navigation, Note }) {
  return (
    <View style={styles.textContainer}>
      <TouchableOpacity
        onLongPress={() =>
          navigation.navigate('WorkDetail', { noteId: Note.id })
        }
      >
        <Text style={styles.text} numberOfLines={1}>
          {Note.date}
        </Text>
        <Text style={styles.text} numberOfLines={3}>
          {Note.note}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function WorkList({ navigation }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleDelete = ({ item }) => {
    var index = Works.indexOf(item);
    Works.splice(index, 1);
    setSelectedIndex(Math.floor(Math.random() * 11));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ebeaf2',
      }}
    >
      <StatusBar backgroundColor="#c63f17" barStyle="light-content" />
      <Header></Header>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Works}
        extraData={selectedIndex}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <ItemList navigation={navigation} Note={item}></ItemList>
            <TouchableOpacity
              style={styles.delButton}
              onPress={() => handleDelete(item)}
            >
              <Text style={styles.delBtnText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      ></FlatList>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddNotes')}
      >
        <Text style={styles.addBtnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 7,
    overflow: 'hidden',
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
    backgroundColor: '#1b84da',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    padding: 5,
  },
  delBtnText: {
    color: '#fff',
  },
  addButton: {
    position: 'absolute',
    right: '10%',
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'coral',
  },
  addBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  },
});

export default WorkList;
