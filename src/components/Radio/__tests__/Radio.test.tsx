import React from 'react';
import { Radio, RadioProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: RadioProps = {
  
};

const setup = (props = defaultProps) => render(<Radio {...props} />);

describe('Radio', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
