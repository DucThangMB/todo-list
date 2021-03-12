import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

export default function BackButton({ onBackCheck }) {
  if (onBackCheck === null) {
    return null;
  }

  return (
    <TouchableHighlight
      style={styles.button}
      activeOpacity={0.6}
      underlayColor="#ffa270"
      onPress={onBackCheck}
    >
      <Text style={styles.buttonText}>Back</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 450,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 70,
    height: 40,
    backgroundColor: 'coral',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
});
