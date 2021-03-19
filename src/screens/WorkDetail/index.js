import React, { useContext } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Header from '../../components/Header';
import Works from '../../services/Works';
import Context from '../Context';

function WorkDetail({ navigation: { goBack }, route }) {
  const { noteId } = route.params;
  const [context, setContext] = useContext(Context);
  const work = context.filter((item) => item.id === noteId)[0];
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#c63f17" barStyle="light-content" />
      <Header title="Work Detail" onBack={() => goBack()}></Header>
      <View style={styles.item}>
        <Text style={styles.header}>Note:</Text>
        <Text style={styles.content}>{work.note}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.header}>Date:</Text>
        <Text style={styles.content}>{work.date}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.header}>Status:</Text>
        <Text style={styles.content}>{work.status}</Text>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebeaf2',
  },
  item: {
    height: 100,
    flexDirection: 'row',
    marginHorizontal: 16,
    alignItems: 'center',
    marginVertical: 8,
    paddingVertical: 15,
    backgroundColor: '#00b2cc',
    borderRadius: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  content: {
    width: 170,
    fontSize: 18,
    marginHorizontal: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
  },
});

export default WorkDetail;
