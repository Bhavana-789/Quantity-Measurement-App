import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const TextValue = ({onChangeText, val}) => {
  return (
    <View style={StyleSheet.body}>
      <TextInput
        style={styles.input}
        placeholder="Enter any value"
        keyboardType="numeric"
        MaxLength={10}
        onChangeText={onChangeText}
        value={val}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    magin: 10,
  },
  input: {
    width: 150,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default TextValue;
