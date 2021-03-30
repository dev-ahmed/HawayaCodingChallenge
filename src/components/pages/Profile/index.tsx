import React from 'react';
import {Image, ImageBackground, ScrollView, View} from 'react-native';
import styles from './styles';
import {images} from '../../../constants/images';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from '../../atoms';
import {icons} from '../../../constants/icons';
import {AboutMe} from '../../organisms/AboutMe';

const userDetails = [
  {
    icon: icons.location,
    value: 'Detail',
  },
  {
    icon: icons.kids,
    value: 'Detail',
  },
];

const aboutMe = [
  {
    icon: icons.heart,
    value: 'Never Married',
  },
  {
    icon: icons.open_book,
    value: 'Muslim Sunni',
  },
  {
    icon: icons.hands,
    value: 'Prays',
  },
];

const Profile: React.FC = React.memo(({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={images.dummy_profile_image}
          style={styles.profileImage}>
          <View style={styles.heartIcon}>
            <Image source={icons.heart} />
          </View>
        </ImageBackground>

        <View style={styles.details}>
          <Text style={styles.name}>Name</Text>
          {userDetails.map((item, index) => {
            return (
              <View key={index.toString()} style={styles.userDetailsRow}>
                <Image source={item.icon} />
                <Text>{item.value}</Text>
              </View>
            );
          })}
          <View style={styles.description}>
            <Text style={styles.descriptionTxt}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet. 🙂
            </Text>
          </View>
          <AboutMe
            items={aboutMe}
            style={styles.description}
            title="About Me"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

export {Profile};
