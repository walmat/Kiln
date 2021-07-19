import React from 'react';
import { Pagination, PaginationProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: PaginationProps = {
  
};

const setup = (props = defaultProps) => render(<Pagination {...props} />);

describe('Pagination', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
