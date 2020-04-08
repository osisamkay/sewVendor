import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const Inputs = ({placeholder, color}) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        // errorStyle={{color: 'red'}}
        // errorMessage="ENTER A VALID ERROR HERE"
        style={color === 'green' ? styles.inputsTwo : styles.inputs}
        placeholderTextColor={color === 'green' ? '#3D7782' : '#fff'}
      />
    </View>
  );
};

export default Inputs;

const styles = StyleSheet.create({
  inputs: {
    width: widthPercentageToDP('68%'),
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
    paddingBottom: 1,
    fontFamily: 'GT Walsheim Pro Regular Regular',
  },
  inputsTwo: {
    width: widthPercentageToDP('68%'),
    borderBottomWidth: 1,
    borderBottomColor: '#3D7782',
    color: '#3D7782',
    fontSize: 14,
    textAlign: 'center',
    paddingBottom: 1,
    fontFamily: 'GT Walsheim Pro Regular Regular',
  },
});
