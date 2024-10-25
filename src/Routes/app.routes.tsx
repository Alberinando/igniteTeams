import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Groups from '@screens/Groups/Groups';
import {NewGroup} from '@screens/NewGroups/NewGroups';
import React from 'react';
import {Players} from '@screens/Players/Players';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRouter() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="groups" component={Groups} />
      <Screen name="new" component={NewGroup} />
      <Screen name="players" component={Players} />
    </Navigator>
  );
}
