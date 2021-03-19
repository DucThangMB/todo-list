import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import BackButton from '../BackButton';
import AddButton from '../AddButton';

export default function Header({ title = 'To Do List', onBack = null, onAdd = null }) {
  return (
    <SafeAreaView backgroundColor="#c63f17">
      <View style={styles.container}>
        <BackButton onBackCheck={onBack}></BackButton>
        <Text style={styles.content}>{title}</Text>
        <AddButton onAddCheck={onAdd}></AddButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'coral',
  },
  content: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
});
