import React, {useContext, useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {ThemeContext} from '../contexts';
import useHomeScreen from '../hooks/useHomeScreen';

const ImageSearch = ({filteredList = {}}) => {
  const {imagelist = []} = useHomeScreen();
  const theme = useContext(ThemeContext);
  const [search, setSearch] = useState('');

  const searchFilter = text => {
    const searchText = text.toLowerCase();
    if (searchText) {
      const searchByTitle = imagelist.filter(item => {
        const {data = {}} = item;
        const title = data.title.toLowerCase();
        return title.indexOf(searchText) > -1;
      });
      filteredList(searchByTitle);
    }
    setSearch(text);
  };

  return (
    <TextInput
      style={styles.textInputStyle(theme.searchBackground)}
      value={search}
      onChangeText={searchFilter}
      underlineColorAndroid="transparent"
      placeholder="Search..."
    />
  );
};
export default ImageSearch;

const styles = StyleSheet.create({
  textInputStyle: searchBackground => ({
    height: 40,
    paddingLeft: 20,
    margin: 10,
    backgroundColor: searchBackground,
  }),
});
