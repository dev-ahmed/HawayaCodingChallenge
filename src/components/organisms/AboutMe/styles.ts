import {StyleSheet} from 'react-native';
import {calcHeight, calcWidth} from '../../../../utils/normalize';
import {metrics} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    width: calcWidth(metrics.screen_width - metrics.margin),
    backgroundColor: 'white',
    padding: metrics.margin,
  },
  subContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: calcHeight(10),
  },
  title: {
    alignSelf: 'center',
  },
  tag: {
    height: calcHeight(40),
    paddingHorizontal: calcWidth(10),
    marginEnd: 5,
    borderRadius: 15,
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  icon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  text: {},
});
export default styles;
