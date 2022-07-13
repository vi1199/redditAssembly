import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {AView} from '../../ui';
import AImage from '../../ui/image/AImage';
import {screenHeight} from '../../utils';
import ImageInfo from '../components/ImageInfo.js';
import {theme} from '../contexts';
import useDetails from '../hooks/useDetails';

const Details = props => {
  const {route = {}} = props;
  const {data} = route?.params || {};
  const {url} = useDetails(data);
  const imageUrl = {uri: url};

  return (
    <AView style={styles.container}>
      <AImage source={imageUrl} style={styles.image} />
      <ImageInfo item={data || {}} from={route.name} />
    </AView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.home.homeBackground,
    flex: 1,
  },
  image: {
    height: screenHeight / 2,
    margin: 5,
    borderRadius: 8,
    resizeMode: 'cover',
  },
});

export default Details;
