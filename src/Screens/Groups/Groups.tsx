import React, {useState, useCallback} from 'react';
import {Header} from '@components/Header/Header';
import {Highlight} from '@components/Highlight/Highlight';
import {GroupCard} from '@components/GrupCard/GrupCard';
import {Container} from './Styles';
import {FlatList, ToastAndroid} from 'react-native';
import {ListEmpty} from '@components/ListEmpty/ListEmpty';
import {Button} from '@components/Button/Button';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {groupGetAll} from '../../Storage/group/groupGetAll';

function Groups(): React.JSX.Element {
  const [groups, setGrups] = useState<string[]>([]);
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }

  async function fetchGroups() {
    try {
      const data = await groupGetAll();
      setGrups(data);
    } catch (error) {
      console.error(error);
      ToastAndroid.show(
        'Não foi possível carregar os grupos',
        ToastAndroid.SHORT,
      );
    }
  }

  function handleOpenGrup(group: string) {
    navigation.navigate('players', {group});
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, []),
  );

  return (
    <Container>
      <Header />
      <Highlight title={'Turmas'} subTitle={'Jogue com sua turma'} />
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <GroupCard title={item} onPress={() => handleOpenGrup(item)} />
        )}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={() => (
          <ListEmpty message={'Que tal cadastrar a primeira turma?'} />
        )}
        showsVerticalScrollIndicator={false}
      />
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}

export default Groups;
