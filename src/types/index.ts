export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;

export type { FlightItem, HotelItem, CarLimousineItem, TripItem } from './trip';

export interface BaseResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
