/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
//import React, {useState} from 'react';
//import Buttons from './src/components/Buttons';
//import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/homescreen';
import Temperature from './src/screens/Temperature';
import Length from './src/screens/Length';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Unit Conversion',
            headerStyle: {
              backgroundColor: '#008b8b',
            },
            headerTitleStyle: {
              margin: 10,
              textAlign: 'center',
              fontWeight: 'bold',
              fontStyle: 'italic',
            },
          }}
        />
        <Stack.Screen
          name="Temperature"
          component={Temperature}
          options={{title: 'Temperature Conversion'}}
        />
        <Stack.Screen
          name="Length"
          component={Length}
          options={{title: 'Length Conversion'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
