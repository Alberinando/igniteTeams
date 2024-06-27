import React, {useState} from 'react';
import {Header} from '@components/Header/Header';
import {Highlight} from '@components/Highlight/Highlight';
import {GroupCard} from '@components/GrupCard/GrupCard';
import {Container} from './Styles';
import {FlatList} from 'react-native';
import {ListEmpty} from '@components/ListEmpty/ListEmpty';
import {Button} from '@components/Button/Button';

function Groups(): React.JSX.Element {
  const [groups, useGrups] = useState<string[]>([]);
  return (
    <Container>
      <Header />
      <Highlight title={'Turmas'} subTitle={'Jogue com sua turma'} />
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={() => (
          <ListEmpty message={'Que tal Cadastrar a primeira turma?'} />
        )}
      />
      <Button title="Criar nova turma" />
    </Container>
  );
}

export default Groups;
