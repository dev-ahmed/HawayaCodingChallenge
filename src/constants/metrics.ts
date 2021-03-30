import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const metrics = {
  margin: width / 20,
  screen_width: width,
  scree_height: height,
};
