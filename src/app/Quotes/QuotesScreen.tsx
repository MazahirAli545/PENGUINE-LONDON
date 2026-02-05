import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';
import {
  BACK_BUTTON_SVG,
  FLIGHT_ICON_SVG,
  FLIGHT_TAKE_OFF_LINE_SVG,
  GALLERY_ICON_SVG,
} from '@/assets/icons';
import { LOGO_WHITE_SVG } from '@/assets/images/svg/logoWhiteSvg';
import { colors, quotesScreenStyles, cardStyles } from '@/styles';
import { QuoteCard } from '@/components/cards';

const BACK_FIXED = BACK_BUTTON_SVG.replace('fill-rule', 'fillRule').replace(
  'clip-rule',
  'clipRule',
);
const GALLERY_FIXED = GALLERY_ICON_SVG.replace('clip-path', 'clipPath');
const LOGO_FIXED = LOGO_WHITE_SVG.replace(
  /\s*clip-path="url\(#clip0_[^"]+\)"/g,
  '',
)
  .replace(/clip-path/gi, 'clipPath')
  .replace(/clip-rule/gi, 'clipRule');

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

export interface QuotesScreenProps {
  onBack?: () => void;
}

export function QuotesScreen({ onBack }: QuotesScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={quotesScreenStyles.container}>
      <View style={[quotesScreenStyles.header, { paddingTop: 12 }]}>
        <TouchableOpacity
          style={quotesScreenStyles.headerBack}
          onPress={() => onBack?.()}
          activeOpacity={0.7}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <SvgXml xml={BACK_FIXED} width={40} height={40} />
        </TouchableOpacity>
        <View style={quotesScreenStyles.headerTitleWrap}>
          <Text style={quotesScreenStyles.headerTitle}>Quotes</Text>
        </View>
        <View style={quotesScreenStyles.headerRight}>
          <SvgXml xml={GALLERY_FIXED} width={24} height={24} />
        </View>
      </View>

      <View style={quotesScreenStyles.logoSection}>
        <SvgXml
          xml={LOGO_FIXED}
          width={200}
          height={48}
          style={{ marginBottom: 4 }}
        />
        <Text style={quotesScreenStyles.logoSubtitle}>
          THE BESPOKE TRAVEL COMPANY.
        </Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={[
          quotesScreenStyles.scrollContent,
          { paddingTop: 0, paddingBottom: 120 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <QuoteCard title="FLIGHTS" showDateAtTop>
          <View style={[cardStyles.cardRowRoute, cardStyles.cardRowMargin]}>
            <View style={cardStyles.cardRouteLeft}>
              <Text style={cardStyles.cardValueLarge}>NYC</Text>
              <Text style={cardStyles.cardSub}>New York</Text>
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
              <Text style={cardStyles.cardValueLargeRight}>SFO</Text>
              <Text style={cardStyles.cardSubRight}>San Francisco</Text>
            </View>
          </View>
          <View style={[cardStyles.cardRow, cardStyles.cardRowMargin]}>
            <View>
              <Text style={cardStyles.cardMeta}>DATE & TIME</Text>
              <Text style={cardStyles.cardValueQuotes}>Feb 25, 11:30pm</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={cardStyles.cardMetaRight}>TICKET PRICE</Text>
              <Text style={cardStyles.cardPriceRight}>AED 15758.00</Text>
            </View>
          </View>
        </QuoteCard>

        <QuoteCard title="HOTEL">
          <View style={cardStyles.cardRow}>
            <View>
              <Text style={cardStyles.cardMeta}>HOTEL NAME</Text>
              <Text style={cardStyles.cardValueQuotes}>Dorchester</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={cardStyles.cardMetaRight}>TICKET PRICE</Text>
              <Text style={cardStyles.cardPriceRight}>AED 15,758.00</Text>
            </View>
          </View>
          <View style={[cardStyles.cardRow, cardStyles.cardRowMargin]}>
            <View>
              <Text style={cardStyles.cardMeta}>CHECK-IN</Text>
              <Text style={cardStyles.cardValueQuotes}>12-12-2025</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={cardStyles.cardMetaRight}>CHECK-OUT</Text>
              <Text style={cardStyles.cardValueRightQuotes}>16-12-2025</Text>
            </View>
          </View>
          <View style={[cardStyles.cardRow, cardStyles.cardRowMargin]}>
            <View>
              <Text style={cardStyles.cardMeta}>GUESTS</Text>
              <Text style={cardStyles.cardValueQuotes}>
                Ollie, Samantha, Kirsty, Ben
              </Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={cardStyles.cardMetaRight}>HOTEL PRICE</Text>
              <Text style={cardStyles.cardPriceRight}>AED 35,758.00</Text>
            </View>
          </View>
        </QuoteCard>

        <QuoteCard title="GROUND TRANSPORT">
          <View style={cardStyles.cardRow}>
            <View>
              <Text style={cardStyles.cardMeta}>RENTAL COMPANY</Text>
              <Text style={cardStyles.cardValueQuotes}>Cars Prestige</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={cardStyles.cardMetaRight}>CAR MODEL</Text>
              <Text style={cardStyles.cardValueRightQuotes}>Mercedes S500</Text>
            </View>
          </View>
          <View style={[cardStyles.cardRow, cardStyles.cardRowMargin]}>
            <View>
              <Text style={cardStyles.cardMeta}>RENTAL DATES</Text>
              <Text style={cardStyles.cardValueQuotes}>12-12-2025</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={cardStyles.cardMetaRight}>RETURN DATE</Text>
              <Text style={cardStyles.cardValueRightQuotes}>16-12-2025</Text>
            </View>
          </View>
          <View style={[cardStyles.cardRow, cardStyles.cardRowMargin]}>
            <View />
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={cardStyles.cardMetaRight}>RENTAL COST</Text>
              <Text style={cardStyles.cardPriceRight}>AED 5,758.00</Text>
            </View>
          </View>
        </QuoteCard>

        <QuoteCard title="OTHER">
          <View style={cardStyles.cardRow}>
            <View>
              <Text style={cardStyles.cardMeta}>DATES</Text>
              <Text style={cardStyles.cardValueQuotes}>16-12-2025</Text>
            </View>
          </View>
          <View style={[cardStyles.cardRow, cardStyles.cardRowMargin]}>
            <View style={{ flex: 1 }}>
              <Text style={cardStyles.cardMeta}>DESCRIPTION</Text>
              <Text
                style={[
                  cardStyles.cardValueQuotes,
                  { color: colors.onboardingBackAccent2, fontSize: 12 },
                ]}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </View>
          </View>
          <View style={[cardStyles.cardRow, cardStyles.cardRowMargin]}>
            <View />
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={cardStyles.cardMetaRight}>COST</Text>
              <Text style={cardStyles.cardPriceRight}>AED 5,758.00</Text>
            </View>
          </View>
        </QuoteCard>

        <View style={quotesScreenStyles.totalRow}>
          <Text style={quotesScreenStyles.totalLabel}>TOTAL</Text>
          <Text style={quotesScreenStyles.totalValue}>AED 45,758.00</Text>
        </View>

        <View style={quotesScreenStyles.buttonsRow}>
          <TouchableOpacity
            style={quotesScreenStyles.buttonAccept}
            activeOpacity={0.7}
            onPress={() => {}}
          >
            <Text style={quotesScreenStyles.buttonAcceptText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={quotesScreenStyles.buttonReject}
            activeOpacity={0.7}
            onPress={() => {}}
          >
            <Text style={quotesScreenStyles.buttonRejectText}>Reject</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
