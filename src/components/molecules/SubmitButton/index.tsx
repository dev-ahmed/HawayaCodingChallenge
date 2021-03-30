import React from 'react';
import {TouchableOpacity, Text, ViewStyle} from 'react-native';
import styles from './styles';

interface Props {
  onPress: () => void;
  style: ViewStyle;
  value: string;
}

const SubmitButton: React.FC<Props> = React.memo(({onPress, style, value}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text>{value}</Text>
    </TouchableOpacity>
  );
});

export {SubmitButton};
