import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {AView} from '../../ui';
import ImageDetails from '../components/imageDetails';
import ImageSearch from '../components/ImageSearch';
import {theme, ThemeContext} from '../contexts';
import useHomeScreen from '../hooks/useHomeScreen';

const HomeScreen = () => {
  const {imagelist = []} = useHomeScreen();
  const [updatedList, setUpdatedList] = useState(null);

  const imageItem = ({item, index}) => <ImageDetails item={item} />;

  const filteredList = value => {
    setUpdatedList(value);
  };
  return (
    <ThemeContext.Provider value={theme.home}>
      <AView style={styles.container}>
        <ImageSearch filteredList={filteredList} />
        <FlatList
          data={updatedList || imagelist}
          keyExtractor={item => `${item.data.created}`}
          renderItem={imageItem}
          showsVerticalScrollIndicator={false}
        />
      </AView>
    </ThemeContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.home.homeBackground,
    flex: 1,
  },
});

export default HomeScreen;
