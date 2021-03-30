import {useNavigation, useRoute} from '@react-navigation/core';
import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ROUTES} from '../../../constants';
import {validateUserNumber} from '../../../store/onboarding/actions';
import {VerificationCodeInput} from '../../molecules/VerificationCodeInput';
import styles from './styles';

const OTP: React.FC = React.memo(({}) => {
  const {reset} = useNavigation();
  const {params} = useRoute();

  const _handleFulfillment = async (isValid: boolean) => {
    if (isValid) {
      await validateUserNumber(params?.fullNumber);
      reset({routes: [{name: ROUTES.Profile}]});
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.onboardingTitle}>What's the verification code</Text>
      <View style={styles.subContainer}>
        <VerificationCodeInput
          style={styles.verificationInput}
          onFulfill={_handleFulfillment}
        />
      </View>
    </SafeAreaView>
  );
});

export {OTP};
