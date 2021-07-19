import React from 'react';
import { Card, CardProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: CardProps = {
  
};

const setup = (props = defaultProps) => render(<Card {...props} />);

describe('Card', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
