import React from 'react';
import {
  Image as RNImage,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from 'react-native';
import {images} from '../../../constants/images';

interface Props {
  source?: ImageSourcePropType;
  style: StyleProp<ImageStyle>;
}

const Image: React.FC<Props> = React.memo(({source, style}) => {
  const src = source || images.dummy_profile_image;
  return <RNImage source={src} style={style} />;
});

export {Image};
