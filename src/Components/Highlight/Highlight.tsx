import {Container, Title, Subtitle} from './style';
import React from 'react';
import Props from './Types/Props';

export function Highlight({title, subTitle}: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subTitle}</Subtitle>
    </Container>
  );
}
