import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const InputText = (props) => {
  return (
    <View>
      <TextInput
        {...props}
        placeholder={props.placeholder}
        value={props.value}
        style={styles.input}
      />
    </View>
  );
};

export default InputText;
const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
    padding: 20,
    marginTop: 20,
    backgroundColor: 'white',
  },
});
