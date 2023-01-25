import {View, Text} from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { dataStack } from './Nav_Data';

const Stack = createStackNavigator();
export default function StackNav() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {dataStack.map((x, i) => (
        <Stack.Screen key={i} name={x.name} component={x.component} />
      ))}
    </Stack.Navigator>
  );
}
