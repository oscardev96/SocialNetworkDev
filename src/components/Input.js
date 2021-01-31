import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const InputText = (props) => {
  return (
    <TextInput
      {...props}
      placeholder={props.placeholder}
      value={props.value}
      style={styles.input}
    />
  );
};

export default InputText;
const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
    padding: 10,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
