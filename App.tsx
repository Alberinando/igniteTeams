import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Theme from '@theme/Theme';
import {Routers} from './src/Routes';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={Theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
