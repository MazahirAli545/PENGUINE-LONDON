export interface FlightItem {
  type: 'flight';
  originCode: string;
  originName: string;
  destinationCode: string;
  destinationName: string;
  dateTime: string;
  ticketPrice: string;
}

export interface HotelItem {
  type: 'hotel';
  hotelName: string;
  ticketPrice: string;
  checkIn: string;
  checkOut: string;
  guests: string[];
  hotelPrice: string;
}

export interface CarLimousineItem {
  type: 'car';

  label?: string;
}

export type TripItem = FlightItem | HotelItem | CarLimousineItem;
