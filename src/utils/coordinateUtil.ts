import { Coordinates } from 'src/models/subway';

export function calculateCoordinates(coordinates: Coordinates) {
  return {
    x: coordinates.x * 5,
    y: coordinates.y * 5,
  };
};
