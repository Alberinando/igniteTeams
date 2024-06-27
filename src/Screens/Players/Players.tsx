import {Header} from '@components/Header/Header';
import {Container} from './Style';
import React from 'react';
import {Highlight} from '@components/Highlight/Highlight';

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight title="Nome da Turma" subTitle="Separe a galera" />
    </Container>
  );
}
