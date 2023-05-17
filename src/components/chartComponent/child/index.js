import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function SplineChart({ data }) {
  const options = {
    chart: {
      type: 'spline',
      plotBorderWidth: 0,
      width: 400,
      height: 300,
      spacing: [0, 0, 0, 0],
      title: {
        text: '', // Set an empty string to remove the chart title
      },
    },
    title: {
      text: null, // Set the chart title to null or an empty string
    },
    series: [
      {
        name: '', // Set an empty string for series name
        data,
        marker: {
          enabled: false,
        },
      },
    ],
    xAxis: {
      gridLineWidth: 1,
      gridLineColor: '#BBBFCA',
      gridLineDashStyle: 'Solid', // Set the grid line dash style to "Solid"
      title: {
        text: null,
      },
      labels: {
        enabled: false,
      },
      lineWidth: 0,
      tickInterval: 1,
      tickWidth: 0,
      plotLines: [
        {
          value: 1,
          width: 1,
          color: 'black',
          zIndex: 4,
        },
        {
          value: 1,
          width: 1,
          color: '#ddd',
          zIndex: 4,
        },
      ],
    },
    yAxis: {
      visible: false,
    },
    plotOptions: {
      spline: {
        color: 'black',
        lineWidth: 4,
      },
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false, // Hide the legend
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default SplineChart;
