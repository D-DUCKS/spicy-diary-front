import React from "react";
import get from "lodash/get";
import { Attributes, Station } from "src/models/subway";
import { calculateCoordinates } from "src/utils/coordinateUtil";

interface Props {
  attributes: Attributes;
  stations: Station[];
}

const getLineDirection = (currentStation: any, targetStation: any) => {
  const coordinates = calculateCoordinates(
    get(currentStation, "move_to", currentStation.coordinates!)
  );

  const targetCoordinates = calculateCoordinates(targetStation.coordinates);

  let lineDirection = "L";
  if (coordinates.y === targetCoordinates.y) {
    lineDirection = "H";
  } else if (coordinates.x === targetCoordinates.x) {
    lineDirection = "V";
  }

  return lineDirection;
};

const Edge: React.FC<Props> = ({ attributes, stations }) => {
  return (
    <g
      className="line"
      fill="none"
      stroke={attributes && attributes.data_color}
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      {stations &&
        stations.map((station: Station, index: number) => {
          if (index > stations.length - 2) {
            return;
          }

          const nextStation = stations[index + 1];
          if (!nextStation.coordinates) {
            return;
          }
          let lineDirection = getLineDirection(station, nextStation);
          const coordinates = calculateCoordinates(
            get(station, "move_to", station.coordinates!)
          );
          const nextCordinates = calculateCoordinates(nextStation.coordinates);

          let destination = [nextCordinates.x, nextCordinates.y].join(" ");
          if (lineDirection === "H") {
            destination = nextCordinates.x.toString();
          } else if (lineDirection === "V") {
            destination = nextCordinates.y.toString();
          }

          return (
            <path
              key={index}
              className="path"
              d={`M ${coordinates.x} ${coordinates.y} ${lineDirection} ${destination}`}
            ></path>
          );
        })}
    </g>
  );
};

export default Edge;
