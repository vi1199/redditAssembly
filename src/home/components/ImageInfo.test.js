import React from 'react';
import {render, screen} from '@testing-library/react-native';
import ImageInfo from './ImageInfo';

describe('Post Details', () => {
  it('renders correctly', () => {
    render(<ImageInfo />);
  });
  const item = {
    title: '',
    created: 0,
    author: '',
    domain: '',
    permalink: '',
    ups: 0,
  };

  it('renders Image Info correctly', () => {
    const expectedText = 'Posted by';

    render(<ImageInfo item={item} />);
    const element = screen.getByText(expectedText);
    expect(element).toBeTruthy();
  });
});
