import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

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
        name="Home"
        component={Main}
        options={{title: 'Usuários'}}
      />
      <Stack.Screen
        name="Profile"
        component={User}
        initialParams={{user: 'User'}}
      />
    </Stack.Navigator>
  );
}

export default Routes;
