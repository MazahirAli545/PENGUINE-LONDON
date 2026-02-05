import React from 'react';
import { View, Text } from 'react-native';
import { cardStyles } from '@/styles';
import type { HotelItem } from '@/types';

export interface HotelCardProps {
  item: HotelItem;
}

export function HotelCard({ item }: HotelCardProps) {
  const guestsText = item.guests.join(', ');
  return (
    <View style={cardStyles.card}>
      <Text style={cardStyles.cardLabel}>HOTEL</Text>
      <View style={cardStyles.cardYellowLine} />
      <View style={cardStyles.cardRow}>
        <View>
          <Text style={cardStyles.cardMeta}>HOTEL NAME</Text>
          <Text style={cardStyles.cardValueSmall}>{item.hotelName}</Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={cardStyles.cardMetaRight}>TICKET PRICE</Text>
          <Text style={cardStyles.cardPriceRight}>{item.ticketPrice}</Text>
        </View>
      </View>
      <View style={[cardStyles.cardRow, { marginTop: 12 }]}>
        <View>
          <Text style={cardStyles.cardMeta}>CHECK-IN</Text>
          <Text style={cardStyles.cardValueSmall}>{item.checkIn}</Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={cardStyles.cardMetaRight}>CHECK-OUT</Text>
          <Text style={cardStyles.cardValueSmallRight}>{item.checkOut}</Text>
        </View>
      </View>
      <View style={[cardStyles.cardRow, { marginTop: 12 }]}>
        <View>
          <Text style={cardStyles.cardMeta}>GUESTS</Text>
          <Text style={cardStyles.cardValueSmall}>{guestsText}</Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={cardStyles.cardMetaRight}>HOTEL PRICE</Text>
          <Text style={cardStyles.cardPriceRight}>{item.hotelPrice}</Text>
        </View>
      </View>
    </View>
  );
}
