import React from 'react';
import {render} from '@testing-library/react-native';
import AImage from './AImage';
const IMAGE =
  'https://images.pexels.com/photos/2438208/pexels-photo-2438208.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';
const STYLE = {height: 10, width: 20};
describe('Details Screen ', () => {
  it('render asset from uri', () => {
    const {getByLabelText} = render(<AImage source={{uri: IMAGE}} />);
    const component = getByLabelText('image');
    expect(component.props.source).toMatchObject({uri: IMAGE});
  });

  it('renders with given style', () => {
    const {getByLabelText} = render(<AImage style={STYLE} />);
    expect(getByLabelText('image')).toHaveStyle({height: 10, width: 20});
  });
});
