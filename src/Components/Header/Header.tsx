import {Container, Logo, BackButton, BackIcon} from './Style';
import logoImg from '@assets/logo.png';
import React from 'react';
import Props from './Types/Props';

export function Header({showBackButton = false}: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}
