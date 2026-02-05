import type { TripItem } from '@/types';

export const defaultTripItems: TripItem[] = [
  {
    type: 'flight',
    originCode: 'NYC',
    originName: 'New York',
    destinationCode: 'SFO',
    destinationName: 'San Francisco',
    dateTime: 'Feb 25, 11:30pm',
    ticketPrice: 'AED 15758.00',
  },
  {
    type: 'hotel',
    hotelName: 'Dorchester',
    ticketPrice: 'AED 15,758.00',
    checkIn: '12-12-2025',
    checkOut: '16-12-2025',
    guests: ['Ollie', 'Samantha', 'Kirsty', 'Ben'],
    hotelPrice: 'AED 35,758.00',
  },
  {
    type: 'flight',
    originCode: 'NYC',
    originName: 'New York',
    destinationCode: 'LHR',
    destinationName: 'London Heathrow',
    dateTime: 'Feb 25, 11:30pm',
    ticketPrice: 'AED 15758.00',
  },
  {
    type: 'car',
    label: 'Car limousine content coming soon',
  },
];
