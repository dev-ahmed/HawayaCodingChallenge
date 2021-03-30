import React from 'react';
import {Text as RNText, TextStyle} from 'react-native';
import styles from './styles';

interface TextProps {
  children: string;
  style?: TextStyle;
}

const Text: React.FC<TextProps> = React.memo(({children, style}) => {
  return <RNText style={[styles.text, style]}>{children}</RNText>;
});

export {Text};
