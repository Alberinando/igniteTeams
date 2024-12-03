import {Header} from '@components/Header/Header';
import {Container, Content, Icon} from './Style';
import React, {useState} from 'react';
import {Highlight} from '@components/Highlight/Highlight';
import {Button} from '@components/Button/Button';
import {Input} from '@components/Input/Input';
import {useNavigation} from '@react-navigation/native';
import {groupCreate} from '../../Storange/group/groupCreate';
import {AppError} from "@utils/AppError.ts";
import {ToastAndroid} from "react-native";

export function NewGroup() {
  const [group, setGroup] = useState('');
  const navigation = useNavigation();

  async function handleNew() {
    try {
      if(group.trim().length === 0){
        return ToastAndroid.show('Informe o nome do grupo!', ToastAndroid.SHORT);
      }

      await groupCreate(group);
      navigation.navigate('players', {group});
    } catch (error) {
      if(error instanceof AppError){
        ToastAndroid.show(error.message, ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Não foi possível criar um novo grupo.', ToastAndroid.SHORT);
        console.error(error);
      }
    }
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
