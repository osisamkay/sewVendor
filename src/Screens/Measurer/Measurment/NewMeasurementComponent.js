import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

const NewMeasurementComponent = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TextInput name={title} style={styles.input} />
    </View>
  );
};

export default NewMeasurementComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: widthPercentageToDP('70%'),
  },
  input: {
    width: widthPercentageToDP('10%'),
    height: widthPercentageToDP('10%'),
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    marginTop: 10,
    borderColor: '#000',
    fontSize: heightPercentageToDP('2.1875%'),
  },
  text: {
    fontSize: heightPercentageToDP('2.1875%'),
    fontFamily: 'GT Walsheim Pro Regular Regular',
    color: '#000',
  },
});
