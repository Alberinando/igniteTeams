import {Container, Icon} from './Style';
import React from 'react';
import {Props} from './Types/ButtonIconProps';

export function ButtonIcon({icon, type = 'PRIMARY', ...rest}: Props) {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
}
