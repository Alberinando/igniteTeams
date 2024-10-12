import React from 'react';
import {Container, Title} from './Style';
import {PropsFilter} from './Types/FilterProps';

export function Filter({title, isActive = false, ...rest}: PropsFilter) {
  return (
    <Container {...rest} isActive={isActive}>
      <Title>{title}</Title>
    </Container>
  );
}
