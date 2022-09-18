/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import Buttons from '../components/Buttons';
import TextValue from '../components/TextValue';
import CustomButton from '../components/Buttons';

const Temperature = ({navigation}) => {
  const [temp, setTemp] = useState('C');
  const [input, setInput] = useState('');
  const [tempData, setTempData] = useState({});

  const cToF = celsius => (celsius * 9) / 5 + 32;

  const fToC = fahrenheit => ((fahrenheit - 32) * 5) / 9;

  const tempConverter = () => {
    let data = {};
    switch (temp) {
      case 'C':
        {
          data.C = input;
          data.F = cToF(input);
        }
        break;
      case 'F':
        {
          data.F = input;
          data.C = fToC(input);
        }
        break;
      default:
        data = {};
    }
    setTempData(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TextValue
          onChangeText={text => {
            setInput(text);
          }}
          val={input}
        />
        <Picker
          selectedValue={temp}
          onValueChange={(itemValue, itemIndex) => setTemp(itemValue)}
          style={styles.picker}>
          <Picker.Item label="C" value="C" />
          <Picker.Item label="F" value="F" />
        </Picker>
        <CustomButton
          onPress={() => {
            tempConverter();
          }}
          text="Convert"
        />
      </View>
      {input && Object.keys(tempData).length > 0 && (
        <View style>
          <Text style={styles.output}>{tempData.C} C</Text>
          <Text style={styles.output}>{tempData.F} F</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
    padding: 20,
    marginTop: 10,
  },
  paragraph: {
    marginTop: 10,
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 50,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  picker: {
    width: 100,
    padding: 8,
  },
  output: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Temperature;
