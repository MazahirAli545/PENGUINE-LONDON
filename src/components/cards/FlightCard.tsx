import React from 'react';
import { View, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { FLIGHT_ICON_SVG, FLIGHT_TAKE_OFF_LINE_SVG } from '@/assets/icons';
import { cardStyles } from '@/styles';
import type { FlightItem } from '@/types';

const FLIGHT_TAKE_OFF_LINE_FIXED = FLIGHT_TAKE_OFF_LINE_SVG.replace(
  'stroke-linecap',
  'strokeLinecap',
)
  .replace('stroke-dasharray', 'strokeDasharray')
  .replace('stroke-width', 'strokeWidth');

const PATH_WIDTH = 160;
const PATH_HEIGHT = 18;
const PLANE_WIDTH = 22;
const PLANE_HEIGHT = 11;

export interface FlightCardProps {
  item: FlightItem;
  /** Optional right-aligned label (e.g. "EMPTY LEG" on Trips screen). */
  rightLabel?: string;
}

export function FlightCard({ item, rightLabel }: FlightCardProps) {
  return (
    <View style={cardStyles.card}>
      <View style={cardStyles.cardRow}>
        <Text style={cardStyles.cardLabel}>FLIGHTS</Text>
        {rightLabel ? (
          <Text style={cardStyles.cardLabelWhite}>{rightLabel}</Text>
        ) : null}
      </View>
      <View style={cardStyles.cardYellowLine} />
      <View style={cardStyles.cardRowRoute}>
        <View style={cardStyles.cardRouteLeft}>
          <Text
            style={cardStyles.cardValue}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.originCode}
          </Text>
          <Text
            style={cardStyles.cardSub}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {item.originName}
          </Text>
        </View>
        <View style={cardStyles.cardRouteCenter}>
          <View style={cardStyles.cardFlightPathWrap}>
            <SvgXml
              xml={FLIGHT_TAKE_OFF_LINE_FIXED}
              width={PATH_WIDTH}
              height={PATH_HEIGHT}
              style={cardStyles.cardFlightLineSvg}
            />
            <View style={cardStyles.cardPlaneOverlay}>
              <View style={cardStyles.cardPlaneIconAbove}>
                <View style={cardStyles.cardPlaneIconBuffer}>
                  <SvgXml
                    xml={FLIGHT_ICON_SVG}
                    width={PLANE_WIDTH}
                    height={PLANE_HEIGHT}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={cardStyles.cardRouteRight}>
          <Text
            style={cardStyles.cardValueRight}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.destinationCode}
          </Text>
          <Text
            style={cardStyles.cardSubRight}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {item.destinationName}
          </Text>
        </View>
      </View>
      <View
        style={[
          cardStyles.cardRow,
          cardStyles.cardRowBottom,
          { marginTop: 16 },
        ]}
      >
        <View style={cardStyles.cardBottomLeft}>
          <Text style={cardStyles.cardMeta}>DATE & TIME</Text>
          <Text
            style={cardStyles.cardValueSmall}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.dateTime}
          </Text>
        </View>
        <View style={cardStyles.cardBottomRight}>
          <Text style={cardStyles.cardMetaRight}>TICKET PRICE</Text>
          <Text
            style={cardStyles.cardPriceRight}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.ticketPrice}
          </Text>
        </View>
      </View>
    </View>
  );
}
