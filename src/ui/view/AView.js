import React from 'react';
import {SafeAreaView} from 'react-native';

const AView = ({children, style}) => {
  return (
    <SafeAreaView accessibilityLabel="view" style={style}>
      {children}
    </SafeAreaView>
  );
};

export default AView;
