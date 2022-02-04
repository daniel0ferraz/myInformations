import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 5,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  cardSubtitle: {
    color: '#999',
  },
});

export default function Cards(props) {
  return (
    <>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{props.Title}</Text>
        <Text style={styles.cardSubtitle}>{props.Subtitle}</Text>
      </View>
    </>
  );
}
