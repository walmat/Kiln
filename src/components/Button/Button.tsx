import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { ButtonAnimations } from '../../animations';

export interface ButtonProps {
  schema?: 'primary' | 'secondary' | 'tertiary';
  children?: any;
}

export const Button: React.FC<ButtonProps> = ({
  schema = 'primary',
  children,
  ...props
}) => {
  return (
    <Container
      schema={schema}
      {...ButtonAnimations}
      {...props}
    >
      {children}
    </Container>
  );
};

const Container = styled(motion.button)<{ schema: string }>`
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 8px 16px;

  background-color: ${({ theme, schema }) => theme[schema]?.backgroundColor};
  color: ${({ theme, schema }) => theme[schema]?.color};
`;