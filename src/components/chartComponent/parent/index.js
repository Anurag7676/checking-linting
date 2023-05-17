import React from 'react';
import SplineChart from '../child';
import './index.css';

function ChartParent() {
  return (
    <div className="check-div">
      <div className="main-container">
        <p className="heading">Progression</p>
        <div>
          <SplineChart />
        </div>
      </div>
    </div>
  );
}

export default ChartParent;
