import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {AView} from '../../ui';
import {formatTime} from '../../utils';

const ImageInfo = ({item, from}) => {
  const {title = '', created = 0, author, domain, permalink, ups} = item;
  const formattedTime = formatTime(created);

  const [favorites, addTofavorites] = useState(item.selected || false);

  const addtoItem = () => {
    addTofavorites(!favorites);
    item.selected = !favorites;
  };

  const showMore = () => {
    return from === 'Details' ? (
      <>
        <Text style={styles.author}>{`Title:  ${title}`}</Text>
        <Text style={styles.author}>{`Author:  ${author}`}</Text>
        <Text style={styles.author}>{`Up vote:  ${ups}`}</Text>
        <Text style={styles.author} dataDetectorType="link">{`Link:  ${
          domain + permalink
        }`}</Text>
        <Text style={styles.favourites(favorites)} onPress={addtoItem}>
          {favorites ? 'Added' : 'Add to favorites'}
        </Text>
      </>
    ) : (
      <Text style={styles.author}>{title}</Text>
    );
  };
  return (
    <AView style={styles.container}>
      {showMore()}
      <Text
        style={styles.time}>{`Posted by:  ${author} | ${formattedTime}`}</Text>
    </AView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  favourites: favorites => ({
    marginHorizontal: 6,
    marginVertical: 12,
    color: favorites ? 'darkgreen' : 'crimson',
    fontWeight: '500',
  }),
  author: {
    fontSize: 14,
    marginHorizontal: 6,
    marginVertical: 4,
  },
  time: {
    fontSize: 12,
    marginHorizontal: 6,
    marginVertical: 4,
    fontWeight: '500',
  },
});

export default ImageInfo;
