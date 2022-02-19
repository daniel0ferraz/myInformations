import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" translucent={false} />

        <View>
          <Text>Texto aq</Text>
        </View>
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
