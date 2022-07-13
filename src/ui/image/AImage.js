import React from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-native';

const AImage = ({style, ...details}) => {
  return <Image accessibilityLabel="image" {...details} style={[style]} />;
};
Image.propTypes = {
  size: PropTypes.number,
  radius: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  isLocal: PropTypes.bool,
};
export default AImage;
