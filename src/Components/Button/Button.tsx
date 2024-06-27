import {TouchableOpacityProps} from 'react-native';
import {Container, Title} from './Style';
import ButtonTypeSyleProps from './Types/PropsButton';
import React from 'react';

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeSyleProps;
};

export function Button({title, type = 'PRIMARY', ...rest}: Props) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
