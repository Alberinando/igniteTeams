import {NavigationContainer} from '@react-navigation/native';
import {AppRouter} from './app.routes';
import React from 'react';
import {useTheme} from 'styled-components/native';
import {View} from 'react-native';

export function Routers() {
  const {COLORS} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.GRAY_600,
      }}>
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </View>
  );
}
