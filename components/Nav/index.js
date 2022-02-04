import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerNav: {
    flexDirection: 'row',
    height: 80,
    padding: 5,
    marginTop: 30,
  },

  menuNav: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'flex-start',

    padding: 5,
  },
  titleNav: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 30,
  },

  // menuNav2: {
  //   flex: 1,
  //   backgroundColor: '#ddd53d',
  //   borderRadius: 8,
  // },
});

export default function Nav() {
  return (
    <>
      <View style={styles.containerNav}>
        <View style={styles.menuNav}>
          <Text style={styles.titleNav}>Meu App</Text>
        </View>
      </View>
    </>
  );
}
