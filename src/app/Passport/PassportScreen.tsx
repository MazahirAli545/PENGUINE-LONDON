import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';
import { passportScreenStyles } from '@/styles';
import {
  BACK_BUTTON_SVG,
  CAMERA_ICON,
  CHEVRON_RIGHT_ICON,
} from '@/assets/icons';

const PASSPORT_TEXT_ICON = 'rgba(165, 168, 176, 1)';
const PASSPORT_ARROW = 'rgba(83, 84, 84, 1)';

const fixSvg = (xml: string) =>
  xml
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin')
    .replace(/fill-rule/g, 'fillRule')
    .replace(/clip-rule/g, 'clipRule');

const svgWithColor = (xml: string, colorHex: string) =>
  fixSvg(xml)
    .replace(/#fff\b/gi, colorHex)
    .replace(/#ffffff/gi, colorHex);

const BACK_FIXED = fixSvg(BACK_BUTTON_SVG);

function formatExpiryDate(d: Date): string {
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

export interface PassportScreenProps {
  onBack?: () => void;
  onUploadPassport?: () => void;
  onExpiryDatePress?: () => void;
}

export function PassportScreen({
  onBack,
  onUploadPassport,
  onExpiryDatePress,
}: PassportScreenProps) {
  useSafeAreaInsets();
  const [expiryDate, setExpiryDate] = useState(() => new Date(2029, 11, 20));
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleExpiryPress = () => {
    setShowDatePicker(true);
    onExpiryDatePress?.();
  };

  const handleDateChange = (event: { type: string }, selectedDate?: Date) => {
    if (Platform.OS === 'android') setShowDatePicker(false);
    if (event.type === 'set' && selectedDate) setExpiryDate(selectedDate);
  };

  return (
    <View style={passportScreenStyles.container}>
      <View style={[passportScreenStyles.header, { paddingTop: 12 }]}>
        <TouchableOpacity
          style={passportScreenStyles.backButton}
          onPress={onBack}
          activeOpacity={0.7}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <SvgXml xml={BACK_FIXED} width={40} height={40} />
        </TouchableOpacity>
        <Text style={passportScreenStyles.headerTitle}>My Passport</Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={passportScreenStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={passportScreenStyles.sectionTitle}>Details</Text>

        <TouchableOpacity
          style={passportScreenStyles.detailField}
          onPress={onUploadPassport}
          activeOpacity={0.7}
        >
          <SvgXml
            xml={svgWithColor(CAMERA_ICON, PASSPORT_TEXT_ICON)}
            width={24}
            height={24}
            style={passportScreenStyles.detailFieldIcon}
          />
          <Text style={passportScreenStyles.detailFieldPlaceholder}>
            Upload New Passport Image
          </Text>
          <SvgXml
            xml={svgWithColor(CHEVRON_RIGHT_ICON, PASSPORT_ARROW)}
            width={20}
            height={20}
            style={passportScreenStyles.detailFieldChevron}
          />
        </TouchableOpacity>

        <View style={passportScreenStyles.expiryRowContainer}>
          <Text style={passportScreenStyles.expiryLabelInRow}>Expiry Date</Text>
          <TouchableOpacity
            style={passportScreenStyles.expiryRow}
            onPress={handleExpiryPress}
            activeOpacity={0.7}
          >
            <Text style={passportScreenStyles.expiryDateText}>
              {formatExpiryDate(expiryDate)}
            </Text>
            <Image
              source={require('@/assets/icons/png/calendar.png')}
              style={passportScreenStyles.expiryCalendarIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {showDatePicker && (
          <>
            <DateTimePicker
              value={expiryDate}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={handleDateChange}
            />
            {Platform.OS === 'ios' && (
              <TouchableOpacity
                style={{ padding: 16, alignItems: 'flex-end' }}
                onPress={() => setShowDatePicker(false)}
              >
                <Text style={{ color: PASSPORT_TEXT_ICON, fontSize: 16 }}>
                  Done
                </Text>
              </TouchableOpacity>
            )}
          </>
        )}
      </ScrollView>
    </View>
  );
}
