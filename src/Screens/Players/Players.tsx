import {Header} from '@components/Header/Header';
import {Container, ContainerButton} from './Style';
import React from 'react';
import {Highlight} from '@components/Highlight/Highlight';
import Icon from 'react-native-vector-icons/MaterialIcons';

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight title="Nome da Turma" subTitle="Separe a galera" />
      <ContainerButton>
        <Icon name="add" size={24} color={'#00875F'} />
      </ContainerButton>
    </Container>
  );
}
