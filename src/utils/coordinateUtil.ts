export function calculateCoordinates(coordinatesStr: string) {
  const splitedCoordinates = coordinatesStr.split(",");
  return {
    x: parseFloat(splitedCoordinates[0]) * 5,
    y: parseFloat(splitedCoordinates[1]) * 5,
  };
};
