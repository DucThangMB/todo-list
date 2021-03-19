import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  FlatList,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../../components/Header';
import Works from '../../services/Works';
import Context from '../Context';

function ItemList({ navigation, Note }) {
  const [context, setContext] = useContext(Context);
  const handleComplete = (data) => {
    setContext((list) =>
      context.map((item) =>
        item.id === data.id
          ? {
              id: item.id,
              note: item.note,
              date: item.date,
              status: item.status === 'Not done' ? 'Done' : 'Not done',
            }
          : item
      )
    );
  };

  return (
    <View style={styles.textContainer}>
      <TouchableOpacity
        onLongPress={() =>
          navigation.navigate('WorkDetail', { noteId: Note.id })
        }
        onPress={() => handleComplete(Note)}
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

function ActiveList({ navigation }) {
  const [context, setContext] = useContext(Context);

  const handleDelete = (data) => {
    const list = context.filter((item) => item.id !== data.id);
    setContext(list);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ebeaf2',
      }}
    >
      <StatusBar backgroundColor="#c63f17" barStyle="light-content" />
      <Header onAdd={() => navigation.navigate('AddNotes')}></Header>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={context.filter((item) => item.status === 'Not done')}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View
              style={{
                paddingTop: '14%',
              }}
            >
              <MaterialIcons
                name={item.status === 'Done' ? 'check-circle' : 'circle'}
                color="#1b84da"
                size={30}
              />
            </View>
            <ItemList navigation={navigation} Note={item}></ItemList>
            <TouchableOpacity
              style={styles.delButton}
              onPress={() => handleDelete(item)}
            >
              <MaterialIcons name="delete" color="#1b84da" size={30} />
            </TouchableOpacity>
          </View>
        )}
      ></FlatList>
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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    padding: 10,
  },
});

export default ActiveList;
