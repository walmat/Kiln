import React from 'react';
import { Loader, LoaderProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: LoaderProps = {
  
};

const setup = (props = defaultProps) => render(<Loader {...props} />);

describe('Loader', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
