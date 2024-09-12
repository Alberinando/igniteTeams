import {Header} from '@components/Header/Header';
import {Container, ContainerButton, Form} from './Style';
import React from 'react';
import {Highlight} from '@components/Highlight/Highlight';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Input} from '@components/Input/Input';

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight title="Nome da Turma" subTitle="Separe a galera" />
      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ContainerButton>
          <Icon name="add" size={24} color={'#00875F'} />
        </ContainerButton>
      </Form>
    </Container>
  );
}
