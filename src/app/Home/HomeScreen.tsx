import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { homeScreenStyles } from '@/styles';
import { FlightCard, HotelCard, CarLimousineCard } from '@/components/cards';
import { defaultTripItems } from './defaultTripData';
import type { TripItem } from '@/types';

export interface HomeScreenProps {
  tripItems?: TripItem[];
}

export function HomeScreen({ tripItems = defaultTripItems }: HomeScreenProps) {
  const items = tripItems;

  const renderTripCard = (item: TripItem, index: number) => {
    switch (item.type) {
      case 'flight':
        return (
          <FlightCard
            key={`flight-${item.originCode}-${item.destinationCode}-${index}`}
            item={item}
          />
        );
      case 'hotel':
        return <HotelCard key={`hotel-${index}`} item={item} />;
      case 'car':
        return <CarLimousineCard key={`car-${index}`} item={item} />;
      default:
        return null;
    }
  };

  return (
    <ScrollView
      style={homeScreenStyles.scroll}
      contentContainerStyle={homeScreenStyles.scrollContent}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={homeScreenStyles.greeting}>Hello! James</Text>
      <View style={homeScreenStyles.sectionRow}>
        <Text style={homeScreenStyles.sectionTitle}>Upcoming Trip</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={homeScreenStyles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      {items.map((item, index) => renderTripCard(item, index))}
    </ScrollView>
  );
}
