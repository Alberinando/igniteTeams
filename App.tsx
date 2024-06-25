import React from 'react';
import {StatusBar} from 'react-native';
import Groups from '@screens/Groups/Groups';
import {ThemeProvider} from 'styled-components';
import Theme from '@theme/Theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={Theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Groups />
    </ThemeProvider>
  );
}

export default App;
