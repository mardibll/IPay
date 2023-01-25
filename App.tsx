import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNav from './src/nav/StackNav'

export default function App() {
  return (
    <NavigationContainer>
    <StackNav />
  </NavigationContainer>
  )
}