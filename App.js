import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" translucent={false} />

        <Image source={require('./src/assets/logo.png')} style={styles.logo} />

        <TextInput
          placeholder="Número de telefone, email ou nome de usuário"
          style={styles.input}
        />
        <TextInput placeholder="Senha" style={styles.input} />

        <View style={styles.forgotContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Acessar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.facebookContainer}>
        <FontAwesome5 name="facebook" size={25} color="#399fff" />
        <Text style={styles.facebookText}>Continuar como Daniel</Text>
      </TouchableOpacity>

      <View style={styles.divisor}>
        <View style={styles.divisorLine}></View>
        <View style={{ marginHorizontal: '3%', alignItems: 'center' }}></View>
        <View style={styles.divisorLine}></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    marginTop: Platform.OS === 'android' ? '13%' : '20%',
    marginBottom: Platform.OS === 'android' ? '13%' : '20%',
  },

  input: {
    width: '90%',
    height: 42,
    backgroundColor: '#f4f3f3',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0e0e0',
  },

  forgotContainer: {
    width: '90%',
    alignItems: 'flex-end',
  },
  forgotText: {
    color: '#399fff',
  },
  loginButton: {
    width: '90%',
    marginTop: '5%',
    backgroundColor: '#399fff',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  loginText: {
    color: '#fff',
    fontSize: 17,
  },

  facebookContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15%',
  },
  facebookText: {
    color: '#399fff',
    paddingLeft: 8,
    fontSize: 15,
  },

  divisor: {
    marginTop: '10%',
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divisorLine: {
    width: '45%',
    height: 2,
    backgroundColor: '#EFEDED',
    borderRadius: 5,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#EEF1F4',
//     // alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//     padding: 5,
//   },

//   title: {
//     color: '#2c2c2c',
//     fontSize: 25,
//     marginBottom: 15,
//     padding: 5,
//     fontWeight: '400',
//   },

//   form: {
//     flex: 0.4,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     justifyContent: 'center',
//   },

//   input: {
//     height: 50,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 8,
//     color: '#ccc',
//   },
// });
