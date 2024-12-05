import {Header} from '@components/Header/Header';
import {
  Container,
  ContainerButton,
  Form,
  HeaderList,
  NumberOfPlayers,
} from './Style';
import React, {useState} from 'react';
import {FlatList, ToastAndroid} from 'react-native';
import {Highlight} from '@components/Highlight/Highlight';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Input} from '@components/Input/Input';
import {Filter} from '@components/Filter/Filter';
import {PlayerCard} from '@components/PlayerCard/PlayerCard';
import {ListEmpty} from '@components/ListEmpty/ListEmpty';
import {Button} from '@components/Button/Button';
import {useRoute} from '@react-navigation/native';
import {AppError} from "@utils/AppError.ts";
import {playerAddByGroup} from "../../Storange/player/playAddByGroup.ts";
import {playersGetByGroups} from "../../Storange/player/playersGetByGroups.ts";

type RouteParams = {
  group: string;
};

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [newPlayername, setNewPlayer] = useState('');
  const [players, setPlayers] = useState([]);
  const route = useRoute();
  const {group} = route.params as RouteParams;

  async function handleAddPlayer() {
      if (newPlayername.trim().length === 0) {
          return ToastAndroid.show('Informe o nome da pessoa para adicionar.', ToastAndroid.SHORT)
      }

      const newPlayer = {
          name: newPlayername,
          team: team,
      }

      try {
        await playerAddByGroup(newPlayer, group);
        const player = await playersGetByGroups(group);
      } catch (e) {
          if (e instanceof AppError) {
              ToastAndroid.show(e.message, ToastAndroid.SHORT)
          } else {
              console.error(e);
              ToastAndroid.show("Não foi possível adicionar", ToastAndroid.SHORT)
          }
      }
  }

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subTitle="Separe a galera" />
      <Form>
        <Input onChangeText={setNewPlayer} placeholder="Nome da pessoa" autoCorrect={false} />
        <ContainerButton>
          <Icon name="add" size={24} color={'#00875F'} onPress={handleAddPlayer} />
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
