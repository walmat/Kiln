import React from 'react';
import { Slider, SliderProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: SliderProps = {
  
};

const setup = (props = defaultProps) => render(<Slider {...props} />);

describe('Slider', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
