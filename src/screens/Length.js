/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextValue from '../components/TextValue';
import {Picker} from '@react-native-picker/picker';
import CustomButton from '../components/Buttons';
import {TextInput} from 'react-native-gesture-handler';

const Length = ({navigation}) => {
  const [fromvalue, setFromvalue] = useState('Meter');
  const [toValue, setToValue] = useState('centimeter');
  const [fromInput, setFromInput] = useState('');
  const [toInput, setToInput] = useState('');

  const lengthConvertor = () => {
    let data = {};
    console.log({fromvalue, toValue, fromInput, toInput});
    if (fromvalue === 'Meter') {
      if (toValue === 'Meter') {
        data = fromInput;
        setToInput(data);
      } else if (toValue === 'Centimeter') {
        data = fromInput * 100;
        setToInput(data);
      } else if (toValue === 'Kilometer') {
        /*else if (toValue === 'Inch') {
        data = fromInput * 39.37;
        setToInput(data);
      }*/
        data = fromInput / 1000;
        setToInput(data);
      }
    } else if (fromvalue === 'Centimeter') {
      if (toValue === 'Centimeter') {
        data = fromInput;
        setToInput(data);
      } else if (toValue === 'Meter') {
        data = fromInput / 100;
        setToInput(data);
      } else if (toValue === 'Kilometer') {
        data = fromInput / 100000;
        setToInput(data);
      }
    } else if (fromvalue === 'Kilometer') {
      if (toValue === 'Kilometer') {
        data = fromInput;
        setToInput(data);
      } else if (toValue === 'Meter') {
        data = fromInput * 1000;
        setToInput(data);
      } else if (toValue === 'Centimeter') {
        data = fromInput * 100000;
        setToInput(data);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'left'}}>
            From
          </Text>
        </View>
        <View>
          <TextValue onChangeText={setFromInput} val={fromInput} />
          <Picker
            selectedValue={fromvalue}
            onValueChange={(itemValue, itemIndex) => setFromvalue(itemValue)}
            style={styles.picker}>
            <Picker.Item label="m" value="Meter" />
            <Picker.Item label="cm" value="Centimeter" />
            <Picker.Item label="km" value="Kilometer" />
          </Picker>
        </View>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'left'}}>
            To
          </Text>
        </View>
        <View>
          <View style={styles.box}>
            <Text>{toInput}</Text>
          </View>
          <Picker
            selectedValue={toValue}
            onValueChange={(itemValue, itemIndex) => setToValue(itemValue)}
            style={styles.picker}>
            <Picker.Item label="m" value="Meter" />
            <Picker.Item label="cm" value="Centimeter" />
            <Picker.Item label="km" value="Kilometer" />
          </Picker>
        </View>
        <View>
          <CustomButton
            onPress={() => {
              lengthConvertor();
            }}
            text="Convert"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignContent: 'center',
    flexDirection: 'column',
    marginLeft: 50,
    top: 20,
  },
  box: {
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    width: 150,
    textAlign: 'center',
    height: 50,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  main: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  picker: {
    width: 100,
    padding: 8,
  },
  inputbox: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
    textAlign: 'center',
  },
});

export default Length;
