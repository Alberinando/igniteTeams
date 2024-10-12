import {ButtonIcon} from '../ButtonIcon/ButtonIcon';
import {Container, Icon, Name} from './Syle';
import React from 'react';
import {Props} from './Types/PlayerCardProp';

export function PlayerCard({name, onRemove}: Props) {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon icon="close" type="SECUNDARY" onPress={onRemove} />
    </Container>
  );
}
