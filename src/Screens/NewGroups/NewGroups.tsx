import {Header} from '@components/Header/Header';
import {Container, Content, Icon} from './Style';
import React, {useState} from 'react';
import {Highlight} from '@components/Highlight/Highlight';
import {Button} from '@components/Button/Button';
import {Input} from '@components/Input/Input';
import {useNavigation} from '@react-navigation/native';

export function NewGroup() {
  const [group, setGroup] = useState('');
  const navigation = useNavigation();
  function handleNew() {
    navigation.navigate('players', {group});
  }
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subTitle="Crie a turma para adicionar as pessoas"
        />
        <Input placeholder="Nome da turma" onChangeText={setGroup} />
        <Button title="Criar" style={{marginTop: 20}} onPress={handleNew} />
      </Content>
    </Container>
  );
}
