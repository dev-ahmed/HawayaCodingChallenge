import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {checkPhone} from '../../../utils/validation';
import {ROUTES} from '../../../constants';
import {Text} from '../../atoms/Text';
import {SubmitButton} from '../../molecules/SubmitButton';
import {PhoneNumberInput} from '../../organisms';
import styles from './styles';

const OnBoarding: React.FC = React.memo(({}) => {
  const [callingCode, setCallingCode] = useState('+20');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullNumber, setFullNumber] = useState('');

  const {navigate} = useNavigation();

  const _handlePhoneChange = (phone: string) => {
    setPhoneNumber(phone);
    setFullNumber(callingCode + phoneNumber);
  };

  const _handlePhoneNumber = (callingCodeVal: string) => {
    setCallingCode(callingCodeVal);
  };

  const _handleSubmit = () => {
    if (checkPhone(fullNumber)) {
      navigate(ROUTES.OTP, {fullNumber});
    } else {
      alert('Please use valid mobile number');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.onboardingTitle}>What's your phone number</Text>
      <View style={styles.subContainer}>
        <PhoneNumberInput
          style={styles.phoneStyle}
          value={phoneNumber}
          onChange={_handlePhoneChange}
          onCallingCodeChange={_handlePhoneNumber}
        />
      </View>
      <SubmitButton
        value="Submit"
        style={styles.button}
        onPress={_handleSubmit}
      />
    </SafeAreaView>
  );
});

export {OnBoarding};
