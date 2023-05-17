import TopclickContainer from '../components/TopClickVideo/parent';

export default {
  title: 'TopClickVideo/ParentContainer',
  component: TopclickContainer,
  args: {
    item: {
      imageUrl: 'https://picsum.photos/id/1/200/200',
      label: 'Item 1',
      clickCount: 0,
    },
  },
};

export const Default = {};
