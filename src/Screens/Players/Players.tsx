import {Header} from '@components/Header/Header';
import {
  Container,
  ContainerButton,
  Form,
  HeaderList,
  NumberOfPlayers,
} from './Style';
import React, {useState, useEffect, useRef} from 'react';
import {Alert, FlatList, TextInput, ToastAndroid} from 'react-native';
import {Highlight} from '@components/Highlight/Highlight';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Input} from '@components/Input/Input';
import {Filter} from '@components/Filter/Filter';
import {PlayerCard} from '@components/PlayerCard/PlayerCard';
import {ListEmpty} from '@components/ListEmpty/ListEmpty';
import {Button} from '@components/Button/Button';
import {useRoute, useNavigation} from '@react-navigation/native';
import {AppError} from '@utils/AppError.ts';
import {playerAddByGroup} from '@storage/player/playAddByGroup.ts';
import {playersGetByGroupsAndTeams} from '@storage/player/playersGetByGroupsAndTeam.ts';
import {PlayerStorageDTO} from '@storage/player/PlayerStorageDTO.ts';
import {playerRemoveByGroup} from '@storage/player/playerRemoveByGroup.ts';
import {groupRemoveByName} from '@storage/group/groupRemoveByName.ts';

type RouteParams = {
  group: string;
};

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [newPlayername, setNewPlayer] = useState('');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const route = useRoute();
  const navigation = useNavigation();
  const {group} = route.params as RouteParams;
  const newPlayerNameInputRef = useRef<TextInput>(null);

  async function handleAddPlayer() {
    if (newPlayername.trim().length === 0) {
      return ToastAndroid.show(
        'Informe o nome da pessoa para adicionar.',
        ToastAndroid.SHORT,
      );
    }

    const newPlayer = {
      name: newPlayername,
      team: team,
    };

    try {
      await playerAddByGroup(newPlayer, group);

      newPlayerNameInputRef.current?.blur();
      setNewPlayer('');
      fetchPlayersByTeam();
    } catch (e) {
      if (e instanceof AppError) {
        ToastAndroid.show(e.message, ToastAndroid.SHORT);
      } else {
        console.error(e);
        ToastAndroid.show('Não foi possível adicionar', ToastAndroid.SHORT);
      }
    }
  }

  async function handleRemovePlayer(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group);
      fetchPlayersByTeam();
    } catch (e) {
      console.error(e);
      ToastAndroid.show(
        'Não foi possível remover a pessoa do time selecionado',
        ToastAndroid.SHORT,
      );
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playrsByTeam = await playersGetByGroupsAndTeams(group, team);
      setPlayers(playrsByTeam);
    } catch (error) {
      console.error(error);
      ToastAndroid.show(
        'Não foi possível carregar as pessoas do time selecionado',
        ToastAndroid.SHORT,
      );
    }
  }

  async function groupsRemove() {
    try {
      await groupRemoveByName(group);
      navigation.navigate('groups');
    } catch (e) {
      console.error(e);
      ToastAndroid.show('Não foi possível romover o grupo', ToastAndroid.SHORT);
    }
  }

  async function handleGroupsRemove() {
    Alert.alert('Remover Turma', 'Deseja realmente remover a turma?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => groupsRemove(),
      },
    ]);
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subTitle="Separe a galera" />
      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          onChangeText={setNewPlayer}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          value={newPlayername}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ContainerButton>
          <Icon
            name="add"
            size={24}
            color={'#00875F'}
            onPress={handleAddPlayer}
          />
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
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <PlayerCard
            name={item.name}
            onRemove={() => handleRemovePlayer(item.name)}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time!" />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[
          {paddingBottom: 100},
          players.length === 0 && {flex: 1},
        ]}
      />

      <Button
        title={'Remover Turma'}
        type={'SECONDARY'}
        onPress={handleGroupsRemove}
      />
    </Container>
  );
}
