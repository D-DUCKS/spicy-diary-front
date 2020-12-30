import React, { useState, useEffect } from 'react';
import 'src/css/subway.css';
import { fetchStationsRequest } from 'src/module/subway/actions';
import Edge from 'src/components/Subway/Edge';
import Node from 'src/components/Subway/Node';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/module/store';
import LineSelect from 'src/components/Subway/LineSelect';

const SubwayPage: React.FC = () => {
  const [lineNo, setLineNo] = useState('1');
  const dispatch = useDispatch();
  const { indicatorText, color, stations } = useSelector(
    (store: RootState) => store.subway.entities
  );

  useEffect(() => {
    dispatch(fetchStationsRequest(lineNo));
  }, [lineNo]);

  const handleLineOnChange = (lineNo: string) => {
    setLineNo(lineNo);
  };

  return (
    <div className="subway-container">
      <LineSelect onChange={handleLineOnChange} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        aria-hidden="true"
        viewBox="0 0 1525 1000"
        className="temp"
      >
        <Edge color={color} stations={stations} />
        <Node color={color} indicatorText={indicatorText} stations={stations} />
      </svg>
    </div>
  );
};

export default SubwayPage;
