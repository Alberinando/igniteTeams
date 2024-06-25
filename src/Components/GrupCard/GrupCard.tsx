import {Container, Icon, Title} from './style';
import Props from './Types/Props';
import React from 'react';

export function GroupCard({title, ...rest}: Props) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}
