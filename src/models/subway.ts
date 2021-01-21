export interface Station {
  stationId?: string;
  coordinates?: Coordinates;
  moveTo?: Coordinates;
  stationName?: string;
  subName?: string;
  labelPosition?: 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW';
  nodeType?: 'INDICATOR';
}

export interface Coordinates {
  x: number;
  y: number;
}

export interface LineInfo {
  label: string;
  indicatorText: string;
  color: string;
  stations: Station[];
}
