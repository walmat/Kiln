import React from 'react';
import { Table, TableProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: TableProps = {
  
};

const setup = (props = defaultProps) => render(<Table {...props} />);

describe('Table', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
