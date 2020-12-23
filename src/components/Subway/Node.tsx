import React from "react";
import get from "lodash/get";
import { Attributes, Station } from "src/models/subway";
import { calculateCoordinates } from "src/utils/coordinateUtil";

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
  NE: { dx: 15, dy: -3 },
};

interface Props {
  attributes: Attributes;
  stations: Station[];
}

const Node: React.FC<Props> = ({ attributes, stations }) => {
  const getFormmatedLabel = (coordination: any, station: any) => {
    const labelPosition = get(station, "label_position", "S");
    const labelTextPosition = LABEL_TEXT_POSITION[labelPosition];
    // console.log(labelPosition, labelTextPosition);
    if (!hasLineBreak(station.station_name)) {
      return (
        <tspan
          x={coordination.x}
          dx={labelTextPosition.dx}
          dy={labelTextPosition.dy}
        >
          {station.station_name}
        </tspan>
      );
    } else {
      const labelStrList = station.station_name.split("\n");
      const labels: any = [];
      let textPositionY = labelTextPosition.dy;
      labelStrList.map((str: string, index: number) => {
        labels.push(
          <tspan
            x={coordination.x}
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
    return str.includes("\n");
  };

  return (
    <g className="marker-group">
      {stations &&
        stations.map((station: Station, index: number) => {
          if (!station.node_type && !station.station_id) {
            return;
          }

          const coordinates = calculateCoordinates(station.coordinates!);
          if (station.node_type === "indicator") {
            return (
              <>
                <rect
                  className="indicator"
                  x={coordinates.x - 5}
                  y={coordinates.y - 5}
                  fill={attributes.data_color}
                  stroke={attributes.data_color}
                ></rect>
                <text
                  className="indicatorText"
                  x={coordinates.x}
                  y={coordinates.y + 3}
                >
                  {attributes.data_indicator_text}
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
                stroke={attributes.data_color}
              ></circle>
              <text
                y={coordinates.y}
                style={{
                  textAnchor: hasLineBreak(station.station_name!)
                    ? "end"
                    : "middle",
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
