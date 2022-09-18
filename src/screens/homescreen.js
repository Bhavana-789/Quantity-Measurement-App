import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.body}>
      <View style={styles.item}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate('Temperature')}>
          <Text style={styles.text}>Temperature</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate('Length')}>
          <Text style={styles.text}>Length</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.text}>Weight</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#778899',
  },
  item: {
    margin: 12,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#4682b4',
    fontSize: 30,
    fontStyle: 'italic',
    margin: 0,
  },
  button1: {
    backgroundColor: '#ffffff',
    padding: 10,
    width: 190,
    borderRadius: 5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
