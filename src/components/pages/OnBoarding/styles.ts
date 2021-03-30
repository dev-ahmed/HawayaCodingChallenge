import {StyleSheet} from 'react-native';
import {calcFont, calcHeight, calcWidth} from '../../../utils/normalize';
import {metrics} from '../../../constants/metrics';
import {Colors} from '../../../constants/colors';
import {fonts} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: calcWidth(metrics.margin),
  },
  subContainer: {
    height: calcHeight(300),
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneStyle: {
    marginTop: calcHeight(12),
    width: calcWidth(225),
  },
  onboardingTitle: {
    ...fonts.SkolarSans.regular,
    paddingTop: calcHeight(100),
    fontSize: calcFont(16),
  },
  button: {
    justifyContent: 'center',
    paddingStart: calcWidth(50),
    backgroundColor: Colors.cool_blue,
    height: calcHeight(50),
    borderRadius: 50,
  },
});
export default styles;
