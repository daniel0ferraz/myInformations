import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as S from './styles';

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
      <S.Cards>
        <S.CardTitle>{props.title}</S.CardTitle>
        <S.cardSubtitle>{props.subtitle}</S.cardSubtitle>
      </S.Cards>
    </>
  );
}
