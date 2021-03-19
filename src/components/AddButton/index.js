import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function AddButton({ onAddCheck }) {
  if (onAddCheck === null) {
    return null;
  }

  return (
    <TouchableHighlight
      style={styles.button}
      activeOpacity={0.6}
      underlayColor="#ffa270"
      onPress={onAddCheck}
    >
      <MaterialIcons name="playlist-add" color="#fff" size={30} />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: '7%',
    right: 15,
    width: 50,
    height: 50,
    backgroundColor: 'coral',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 11,
  },
});
