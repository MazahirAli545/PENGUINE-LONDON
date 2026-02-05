import React from 'react';
import { View, Text } from 'react-native';
import { cardStyles } from '@/styles';

export interface QuoteCardProps {
  title: string;
  showDateAtTop?: boolean;
  dateAtTop?: string;
  children: React.ReactNode;
}

export function QuoteCard({
  title,
  showDateAtTop,
  dateAtTop = '12 DECEMBER, 2025',
  children,
}: QuoteCardProps) {
  return (
    <View style={cardStyles.card}>
      {showDateAtTop && (
        <Text style={cardStyles.cardDateInCard}>{dateAtTop}</Text>
      )}
      <View style={cardStyles.cardHeader}>
        <Text style={cardStyles.cardLabelWhite}>{title}</Text>
        <View style={cardStyles.cardHeaderIcon} />
      </View>
      <View style={cardStyles.cardYellowLine} />
      {children}
    </View>
  );
}
