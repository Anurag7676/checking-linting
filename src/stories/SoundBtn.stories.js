import SoundBtn from '../components/Icon/SoundBtn';

export default {
  title: 'IconBtn/SoundBtn',
  component: SoundBtn,
};

export const Default = {
  args: {
    icon: 'https://example.com/icon18.png',
    label: 'Item 18',
    isSelected: false,
    value: 'item18',
    onUpdate: () => {},
  },
};
