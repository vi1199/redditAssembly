import {Dimensions} from 'react-native';
import moment from 'moment';
const dimension = Dimensions.get('window');
const DEFAULT_FORMAT = 'MMM Do YY';
export const screenHeight = dimension.height;
export const screenWidth = dimension.width;

export const formatTime = dateTime => {
  let dt = dateTime;
  if (!dateTime) {
    dt = undefined;
  }
  return moment.unix(dt).startOf('hour').fromNow();
};
