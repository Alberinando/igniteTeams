import {Container, Logo, BackButton, BackIcon} from './Style';
import logoImg from '@assets/logo.png';
import React from 'react';
import Props from './Types/Props';
import {useNavigation} from '@react-navigation/native';

export function Header({showBackButton = false}: Props) {
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.navigate('groups');
  }
  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}
