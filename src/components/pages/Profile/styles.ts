import {StyleSheet} from 'react-native';
import {calcFont, calcHeight, calcWidth} from '../../../utils/normalize';
import {Colors, metrics} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  profileImage: {
    backgroundColor: 'grey',
    borderRadius: 15,
    height: calcHeight(345),
    width: metrics.screen_width - metrics.margin,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: calcHeight(10),
  },
  heartIcon: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    width: calcHeight(50),
    height: calcHeight(50),
  },
  details: {
    marginTop: calcHeight(metrics.margin),
    width: metrics.screen_width - metrics.margin,
    alignItems: 'flex-start',
  },
  name: {
    fontSize: calcFont(27),
  },
  userDetailsRow: {
    marginTop: calcHeight(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: calcWidth(60),
  },
  description: {
    marginTop: calcHeight(10),
    borderRadius: 15,
    backgroundColor: Colors.white,
  },
  descriptionTxt: {
    padding: calcHeight(30),
  },
});
export default styles;
