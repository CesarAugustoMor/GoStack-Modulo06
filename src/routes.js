import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        gestureEnabled: false,
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
      }}>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{title: 'Usuários'}}
      />
      <Stack.Screen
        name="User"
        component={User}
        options={({route}) => ({title: route.params.user.name})}
      />
      <Stack.Screen
        name="Repository"
        component={Repository}
        options={({route}) => ({title: route.params.repository.name})}
      />
    </Stack.Navigator>
  );
}

export default Routes;
