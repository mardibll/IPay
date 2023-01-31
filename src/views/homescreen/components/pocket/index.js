import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HeadScreens from '../../../../component/HeadScreens';
import TabCard from './Tab_Card';
import TabTicket from './Tab_Ticket';
import TabDocoment from './Tab_Docoment';
import {TransitionPresets} from '@react-navigation/stack';
import Icons from '../../../../component/atoms/Icons';
const Tab = createMaterialTopTabNavigator();
export default function ScreenPocket({navigation}) {
  return (
    <>
      <View style={{zIndex: 99999, backgroundColor: '#1677FF', width: '100%'}}>
        <HeadScreens
          nav={navigation}
          text_name={'Pocket'}
          onPress={() => navigation.goBack()}
        />
      </View>
      <Tab.Navigator
        screenOptions={({route, navigation}) => ({
          ...TransitionPresets.SlideFromRightIOS,
          tabBarStyle: {
            backgroundColor: '#1677FF',
            borderBottomColor: '#FFFFFF',
            borderBottomWidth: 2,
          },
          tabBarIconStyle: {
            height: 30,
            width: 30,
            alignItems: 'center',
            justifyContent: 'center',
          },
          tabBarLabelStyle: {color: '#FFFFFF'},
          tabBarIndicatorStyle: {
            backgroundColor: 'white',
          },
        })}>
        <Tab.Screen name="Cards" component={TabCard} />
        <Tab.Screen name="Tickets" component={TabTicket} />
        <Tab.Screen name="Documents" component={TabDocoment} />
      </Tab.Navigator>
    </>
  );
}
