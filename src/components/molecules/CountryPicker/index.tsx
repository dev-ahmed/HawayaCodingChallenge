import React, {useState} from 'react';
import styles from './styles';
import RNCountryPicker from 'react-native-country-picker-modal';
import {clist} from '../../../constants/ccode';

interface CountryPickerProps {
  onSelect: (value: string) => void;
  translation: string;
}

const CountryPicker: React.FC<CountryPickerProps> = React.memo(({onSelect}) => {
  const [ccode, setCcode] = useState('EG');
  const [, setCallingCode] = useState('+20');
  return (
    <RNCountryPicker
      containerButtonStyle={[styles.container]}
      countryList={clist}
      onSelect={value => {
        setCcode(value.cca2);
        setCallingCode(value.callingCode);
        onSelect(value.callingCode);
      }}
      countryCode={ccode}
      translation="eng"
    />
  );
});

export {CountryPicker};
