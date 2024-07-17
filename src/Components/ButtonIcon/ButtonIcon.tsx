import {TouchableOpacityProps} from 'react-native';
import {Container} from './Style';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ButtonTypeSyleProps from '../Button/Types/PropsButton';

type Props = TouchableOpacityProps & {
  icon: string;
  type?: ButtonTypeSyleProps;
};

export function ButtonIcon({icon, type = 'PRIMARY', ...rest}: Props) {
  return (
    <Container {...rest}>
      <Icon name={icon} color={type} size={24} />
    </Container>
  );
}
