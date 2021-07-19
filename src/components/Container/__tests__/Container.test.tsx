import React from 'react';
import { Container, ContainerProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: ContainerProps = {
  
};

const setup = (props = defaultProps) => render(<Container {...props} />);

describe('Container', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
