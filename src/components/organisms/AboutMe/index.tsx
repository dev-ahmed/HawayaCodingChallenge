import React from 'react';
import {View, ImageSourcePropType, ViewStyle} from 'react-native';
import {Image} from '../../atoms/Image';
import {Text} from '../../atoms/Text';
import styles from './styles';

interface AboutMeObject {
  icon: ImageSourcePropType;
  value: string;
}

interface Props {
  title: string;
  items: AboutMeObject[];
  style?: ViewStyle;
}

const AboutMe: React.FC<Props> = React.memo(({title, style, items}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.subContainer}>
        {items &&
          items.map((item, index) => {
            return (
              <View key={index.toString()} style={styles.tag}>
                <Image style={styles.icon} source={item.icon} />
                <Text> {item.value} </Text>
              </View>
            );
          })}
      </View>
    </View>
  );
});

export {AboutMe};
