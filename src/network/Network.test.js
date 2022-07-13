import React from 'react';
import renderer, {act} from 'react-test-renderer';
import HomeScreen from '../home/screens/Home';

jest.mock('./picsMockData', () => jest.fn());
describe('App component', () => {
  it('Home screen loads with data', async () => {
    let tree;
    await act(async () => {
      tree = renderer.create(<HomeScreen />);
    });
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
