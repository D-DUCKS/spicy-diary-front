import types from './types';
import { LineInfo } from 'models/subway';

export function fetchStationsRequest(lineNo: string) {
  return {
    type: types.FETCH_STATIONS_REQUEST,
    lineNo: lineNo
  };
}

export function fetchStationsSuccess({ label, indicatorText, color, stations }: LineInfo) {
  return {
    type: types.FETCH_STATIONS_SUCCESS,
    label,
    indicatorText,
    color,
    stations
  };
}

export function fetchStationsFailure(error: any) {
  return {
    type: types.FETCH_STATIONS_FAILURE,
    error
  };
}
