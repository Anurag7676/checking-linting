import TopClickedVideo from '../components/TopClickVideo/child';

export default {
  title: 'TopClickVideo/Container',
  component: TopClickedVideo,
  args: {
    item: {
      imageUrl: 'https://picsum.photos/id/1/200/200',
      label: 'Item 1',
      clickCount: 0,
    },
  },
};

export const Default = {};
