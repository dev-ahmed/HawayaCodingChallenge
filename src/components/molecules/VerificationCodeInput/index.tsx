import React from 'react';
import {ViewStyle} from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import {Colors} from '../../../constants';
import styles from './styles';

interface Props {
  onFulfill: (isValid: boolean) => void;
  style: ViewStyle;
}

const VerificationCodeInput: React.FC<Props> = React.memo(
  ({onFulfill, style}) => {
    return (
      <CodeInput
        compareWithCode="1234"
        codeLength={4}
        activeColor={Colors.grey}
        inactiveColor={Colors.grey}
        autoFocus={false}
        ignoreCase={true}
        inputPosition="center"
        className="border-b"
        keyboardType="numeric"
        size={50}
        onFulfill={(isValid: boolean) => {
          onFulfill(isValid);
        }}
        containerStyle={[styles.container, style]}
      />
    );
  },
);

export {VerificationCodeInput};
