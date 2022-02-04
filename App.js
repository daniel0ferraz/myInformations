import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Cards from './components/Cards/index';
import Nav from './components/Nav/index';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" translucent={false} />

        {/* <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Usuário" />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            keyboardType="numeric"
          />
        </View> */}
        <Cards Title="Usuário" Subtitle="Daniel Ferraz Coelho" />
        <Cards Title="E-mail" Subtitle="Daniel0ferraz@outlook.com" />
        <Cards Title="Telefone:" Subtitle="(21) 99954-0152" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEF1F4',
    // alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 5,
  },

  title: {
    color: '#2c2c2c',
    fontSize: 25,
    marginBottom: 15,
    padding: 5,
    fontWeight: '400',
  },

  form: {
    flex: 0.4,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
  },

  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    color: '#ccc',
  },
});
