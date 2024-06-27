import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Theme from '@theme/Theme';
import {Players} from '@screens/Players/Players';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={Theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Players />
    </ThemeProvider>
  );
}

export default App;
