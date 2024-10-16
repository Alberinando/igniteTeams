import {Header} from '@components/Header/Header';
import {
  Container,
  ContainerButton,
  Form,
  HeaderList,
  NumberOfPlayers,
} from './Style';
import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {Highlight} from '@components/Highlight/Highlight';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Input} from '@components/Input/Input';
import {Filter} from '@components/Filter/Filter';
import {PlayerCard} from '@components/PlayerCard/PlayerCard';
import {ListEmpty} from '@components/ListEmpty/ListEmpty';
import {Button} from '@components/Button/Button';

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState([]);

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

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B', 'Time C']}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({item}) => <PlayerCard name={item} onRemove={() => {}} />}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time!" />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[
          {paddingBottom: 100},
          players.length === 0 && {flex: 1},
        ]}
      />

      <Button title={'Remover Turma'} type={'SECONDARY'} />
    </Container>
  );
}
