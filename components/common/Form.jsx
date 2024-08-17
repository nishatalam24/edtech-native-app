import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Cookies from "universal-cookie";
const Form = ({ placeholder, value, onChangeText, secureTextEntry }) => (






  <View style={styles.formContainer}>
    <Text style={styles.label}>{placeholder}</Text>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      // secureTextEntry={secureTextEntry}
    />
  </View>
);

const styles = StyleSheet.create({
  formContainer: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
});

export default Form;
