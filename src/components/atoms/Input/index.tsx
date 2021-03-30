import React from 'react';
import {TextInput, ViewStyle} from 'react-native';
import styles from './styles';

interface Props {
  style: ViewStyle;
  value: string;
  onChangeText?: (value?: string) => void;
}

const Input: React.FC<Props> = React.memo(({style, value, ...rest}) => {
  return <TextInput style={[styles.input, style]} value={value} {...rest} />;
});

export {Input};
