import React from 'react';
import get from 'lodash/get';
import { Station, Coordinates } from 'src/models/subway';
import { calculateCoordinates } from 'src/utils/coordinateUtil';

interface dictionary {
  [key: string]: any;
}

const LABEL_TEXT_POSITION: dictionary = {
  S: { dx: 0, dy: 13 },
  E: { dx: 20, dy: 3 },
  SE: { dx: 13, dy: 11 },
  N: { dx: 0, dy: -9 },
  NW: { dx: -13, dy: -3 },
  SW: { dx: -10, dy: 11 },
  W: { dx: -18, dy: 3 },
  NE: { dx: 15, dy: -3 }
};

interface Props {
  color: string;
  indicatorText: string;
  stations: Station[];
}

const Node: React.FC<Props> = ({ color, indicatorText, stations }) => {
  const getFormmatedLabel = (coordinates: Coordinates, station: Station) => {
    const labelPosition = get(station, 'labelPosition', 'S');
    const labelTextPosition = LABEL_TEXT_POSITION[labelPosition];
    if (!hasLineBreak(station.stationName!)) {
      return (
        <tspan
          x={coordinates.x}
          dx={labelTextPosition.dx}
          dy={labelTextPosition.dy}
        >
          {station.stationName}
        </tspan>
      );
    } else {
      const labelStrList = station.stationName!.split('\n');
      const labels: any = [];
      let textPositionY = labelTextPosition.dy;
      labelStrList.map((str: string, index: number) => {
        labels.push(
          <tspan
            x={coordinates.x}
            dx={labelTextPosition.dx + 10}
            dy={labelTextPosition.dy + index * 6}
          >
            {str}
          </tspan>
        );
      });

      return labels;
    }
  };

  const hasLineBreak = (str: string) => {
    return str.includes('\n');
  };

  return (
    <g className="marker-group">
      {stations &&
        stations.map((station: Station, index: number) => {
          if (!station.nodeType && !station.stationId) {
            return;
          }

          const coordinates = calculateCoordinates(station.coordinates!);
          if (station.nodeType === 'INDICATOR') {
            return (
              <>
                <rect
                  className="indicator"
                  x={coordinates.x - 5}
                  y={coordinates.y - 5}
                  fill={color}
                  stroke={color}
                ></rect>
                <text
                  className="indicatorText"
                  x={coordinates.x}
                  y={coordinates.y + 3}
                >
                  {indicatorText}
                </text>
              </>
            );
          }

          return (
            <g className="station-group">
              <circle
                cx={coordinates.x}
                cy={coordinates.y}
                r={1.8}
                stroke={color}
              ></circle>
              <text
                y={coordinates.y}
                style={{
                  textAnchor: hasLineBreak(station.stationName!)
                    ? 'end'
                    : 'middle'
                }}
              >
                {getFormmatedLabel(coordinates, station)}
              </text>
            </g>
          );
        })}
    </g>
  );
};

export default Node;
