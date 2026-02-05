import React from 'react';
import { View, Text } from 'react-native';
import { cardStyles } from '@/styles';
import type { CarLimousineItem } from '@/types';

export interface CarLimousineCardProps {
  item: CarLimousineItem;
}

export function CarLimousineCard({ item }: CarLimousineCardProps) {
  return (
    <View style={cardStyles.card}>
      <Text style={cardStyles.cardLabel}>CAR LIMOUSINE</Text>
      <View style={cardStyles.cardYellowLine} />
      <Text style={[cardStyles.cardValueSmall, { marginTop: 12 }]}>
        {item.label ?? 'Car limousine content coming soon'}
      </Text>
    </View>
  );
}
