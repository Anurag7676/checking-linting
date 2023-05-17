import SplineChart from '../components/chartComponent/child';

export default {
  title: 'Chart/BasicChart',
  component: SplineChart,
  args: {
    data: [
      { x: 1, y: 5 },
      { x: 2, y: 10 },
      { x: 3, y: 8 },
      { x: 4, y: 12 },
      { x: 5, y: 6 },
      { x: 6, y: 1 },
      { x: 7, y: 5 },
      { x: 8, y: 2 },
      { x: 9, y: 7 },
      { x: 10, y: 3 },
    ],
  },
};

export const Default = {};
