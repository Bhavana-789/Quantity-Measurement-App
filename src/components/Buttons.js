import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

const CustomButton = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    alignItems: 'center',
    width: 100,
    height: 50,
    padding: 10,
    backgroundColor: '#00bfff',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 5,
  },
});

export default CustomButton;
