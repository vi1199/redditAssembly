import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AView} from '../../ui';
import {ThemeContext} from '../contexts';
import ImageInfo from './ImageInfo.js';
import AImage from '../../ui/image/AImage';

const ImageDetails = ({item}) => {
  const theme = useContext(ThemeContext);
  const navigation = useNavigation();
  const {thumbnail, thumbnail_height, thumbnail_width} = item?.data || {};
  const imageUrl = {uri: thumbnail};

  const navigateToDetails = () => {
    navigation.navigate('Details', {data: item?.data});
  };
  return (
    <AView style={styles.imageItem(theme.ImageListItem)}>
      <TouchableOpacity
        onPress={navigateToDetails}
        style={styles.touchableView}>
        <AImage
          source={imageUrl}
          resizeMode="cover"
          style={styles.image(thumbnail_height, thumbnail_width)}
        />
        <ImageInfo item={item?.data || {}} />
      </TouchableOpacity>
    </AView>
  );
};

const styles = StyleSheet.create({
  imageItem: color => ({
    flex: 1,
    backgroundColor: color,
    marginVertical: 4,
    marginHorizontal: 10,
    borderRadius: 8,
    flexDirection: 'row',
  }),
  touchableView: {
    flexDirection: 'row',
    flex: 1,
  },
  image: (thumbnail_height, thumbnail_width) => ({
    height: thumbnail_height / 2,
    width: thumbnail_width / 2,
    margin: 5,
    borderRadius: 8,
  }),
});
export default ImageDetails;
