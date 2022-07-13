import React from 'react';

export const theme = {
  home: {
    ImageListItem: '#E0E0E0',
    homeBackground: '#D0D0D0',
    searchBackground: '#E0E0E0',
  },
};

export const ThemeContext = React.createContext(theme.home);
