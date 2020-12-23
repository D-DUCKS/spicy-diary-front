import { type } from 'os';
import types from './types';

export function fetchStationsRequest(route: string) {
  return {
    type: types.FETCH_STATIONS_REQUEST,
    route: route
  }
}

export function fetchStationsSuccess({ attributes, stations }: any) {
  return {
    type: types.FETCH_STATIONS_SUCCESS,
    attributes,
    stations
  }
}

export function fetchStationsFailure(error: any) {
  return {
    type: types.FETCH_STATIONS_FAILURE,
    error
  }
}