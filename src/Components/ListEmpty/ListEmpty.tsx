import {Container, Message} from './Style';
import Props from './Types/Props';
import React from 'react';

export function ListEmpty({message}: Props) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}
