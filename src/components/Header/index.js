import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import BackButton from '../BackButton';

export default function Header({ title = 'To Do List', onBack = null }) {
  return (
    <SafeAreaView backgroundColor="#c63f17">
      <View style={styles.container}>
        <BackButton onBackCheck={onBack}></BackButton>
        <Text style={styles.content}>{title}</Text>
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
