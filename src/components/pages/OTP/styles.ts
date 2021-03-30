import {metrics} from './../../../constants/metrics';
import {StyleSheet} from 'react-native';
import {calcFont, calcHeight, calcWidth} from '../../../../utils/normalize';
import {fonts} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: calcWidth(metrics.margin),
  },
  onboardingTitle: {
    ...fonts.SkolarSans.regular,
    fontSize: calcFont(16),
    paddingTop: calcHeight(100),
  },
  subContainer: {
    height: calcHeight(300),
    justifyContent: 'center',
    alignItems: 'center',
  },
  verificationInput: {
    marginTop: calcHeight(125),
  },
});

export default styles;
