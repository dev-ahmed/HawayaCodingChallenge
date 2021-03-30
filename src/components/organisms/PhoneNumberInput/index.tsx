import React, {useState} from 'react';
import {View, ViewStyle} from 'react-native';
import {CountryPicker, Input, Text} from '../../';
import {} from '../../atoms';
import styles from './styles';

interface Props {
  onChange: (text: string) => void;
  value: string;
  style: ViewStyle;
  onCallingCodeChange: (value: string) => void;
}

const PhoneNumberInput: React.FC<Props> = React.memo(
  ({onChange, value, onCallingCodeChange, style}) => {
    const [callingCode, setCallingCode] = useState('+20');
    const [phone, setPhone] = useState(value);
    return (
      <>
        <View style={[styles.container, style]}>
          <CountryPicker
            onSelect={callingCodeVal => {
              setCallingCode(callingCodeVal);
              onCallingCodeChange(callingCodeVal);
            }}
            translation="eng"
          />
          <View style={styles.label}>
            <Text>{callingCode}</Text>
          </View>
          <Input
            style={styles.phone}
            keyboardType="number-pad"
            value={phone}
            onChangeText={(phoneVal: string) => {
              setPhone(phoneVal);
              onChange(phoneVal);
            }}
            placeholder="Phone Number"
          />
        </View>
      </>
    );
  },
);

export {PhoneNumberInput};
