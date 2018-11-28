import React from 'react';
import Card from './Card';

describe('<Card>', () => {
  
  let wrapper;
  const defProps = {
    title: 'Test Title',
    path: 'test-path',
    image: 'https://placeimg.com/640/480/animals'
  };

  beforeEach(() => {
    wrapper = shallow(
      <Card {...defProps} />,
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
