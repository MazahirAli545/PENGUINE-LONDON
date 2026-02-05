import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { tripsScreenStyles } from '@/styles';
import { FlightCard, HotelCard } from '@/components/cards';
import { defaultTripItems } from '@/app/Home';
import type { FlightItem, HotelItem } from '@/types';

type TripSegment = 'upcoming' | 'past';

const upcomingItems = defaultTripItems.filter(
  (item): item is FlightItem | HotelItem =>
    item.type === 'flight' || item.type === 'hotel',
);
const firstFlight = upcomingItems.find(
  (i): i is FlightItem => i.type === 'flight',
);
const hotelItem = upcomingItems.find((i): i is HotelItem => i.type === 'hotel');
const flights = upcomingItems.filter(
  (i): i is FlightItem => i.type === 'flight',
);
const secondFlight = flights[1];

export function TripsScreen() {
  const [segment, setSegment] = useState<TripSegment>('upcoming');

  return (
    <View style={tripsScreenStyles.container}>
      <View style={tripsScreenStyles.segmentRow}>
        <TouchableOpacity
          style={[
            tripsScreenStyles.segmentTab,
            segment === 'upcoming'
              ? tripsScreenStyles.segmentTabActive
              : tripsScreenStyles.segmentTabInactive,
          ]}
          onPress={() => setSegment('upcoming')}
          activeOpacity={0.8}
        >
          <Text
            style={
              segment === 'upcoming'
                ? tripsScreenStyles.segmentTabTextActive
                : tripsScreenStyles.segmentTabText
            }
          >
            Upcoming Trip
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tripsScreenStyles.segmentTab,
            segment === 'past'
              ? tripsScreenStyles.segmentTabActive
              : tripsScreenStyles.segmentTabInactive,
          ]}
          onPress={() => setSegment('past')}
          activeOpacity={0.8}
        >
          <Text
            style={
              segment === 'past'
                ? tripsScreenStyles.segmentTabTextActive
                : tripsScreenStyles.segmentTabText
            }
          >
            Past Trip
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={tripsScreenStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {segment === 'upcoming' && (
          <>
            {firstFlight && (
              <FlightCard item={firstFlight} rightLabel="EMPTY LEG" />
            )}
            {hotelItem && <HotelCard item={hotelItem} />}
            {secondFlight && <FlightCard item={secondFlight} />}
          </>
        )}
        {segment === 'past' && hotelItem && <HotelCard item={hotelItem} />}
      </ScrollView>
    </View>
  );
}
