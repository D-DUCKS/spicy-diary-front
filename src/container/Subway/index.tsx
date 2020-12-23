import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import "src/css/subway.css";
import { fetchStationsRequest } from "src/module/subway/actions";
import Edge from "src/components/Subway/Edge";
import Node from "src/components/Subway/Node";

interface Props {
  attributes: any;
  stations: any;
  fetchStationsRequest: Function;
}

const SubwayPage: React.FC<Props> = ({
  attributes,
  stations,
  fetchStationsRequest,
}) => {
  const [route, setRoute] = useState(1);

  useEffect(() => {
    fetchStationsRequest(1);
  }, []);

  return (
    <div className="subway-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        aria-hidden="true"
        viewBox="0 0 1525 1000"
        className="temp"
      >
        <Edge attributes={attributes} stations={stations} />
        <Node attributes={attributes} stations={stations} />
      </svg>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const subway = state.subway.entities;
  return {
    attributes: subway.attributes,
    stations: subway.stations,
  };
};

export default connect(mapStateToProps, { fetchStationsRequest })(SubwayPage);
