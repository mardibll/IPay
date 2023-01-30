import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CardScreen from './CardScreen';
import DataScreen from './DataScreen';
import PhoneScreen from './PhoneScreen';
import {TransitionPresets} from '@react-navigation/stack';
import Icons from '../../../../component/atoms/Icons';
import HeadScreens from '../../../../component/HeadScreens';
const Tab = createMaterialTopTabNavigator();
export default function TopUP({navigation}) {
  return (
    <>
      <View style={{zIndex: 99999, backgroundColor: '#1677FF', width: '100%'}}>
        <HeadScreens
          nav={navigation}
          text_name={'Top Up'}
          darw={true}
          onPress={() => navigation.goBack()}
        />
      </View>
      <Tab.Navigator
        screenOptions={({route, navigation}) => ({
          tabBarAccessibilityLabel: 'red',
          tabBarActiveTintColor: 'red',
          ...TransitionPresets.SlideFromRightIOS,
          tabBarStyle: {
            backgroundColor: '#1677FF',
            borderBottomColor: '#DDDDDD',
            borderBottomWidth: 1,
          },
          tabBarIconStyle: {
            height: 30,
            width: 30,
            alignItems: 'center',
            justifyContent: 'center',
          },
          tabBarLabelStyle: {color: '#FFFFFF'},
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let iconType;
            if (route.name === 'Card') {
              iconName = 'home-outline';
              iconType = 'Ionicons';
            } else if (route.name === 'Phone') {
              iconType = 'Ionicons';
              iconName = 'document-text-outline';
            } else if (route.name === 'Data') {
              iconType = 'Ionicons';
              iconName = 'newspaper-outline';
            } else if (route.name === 'Profile') {
              iconType = 'FontAwesome';
              iconName = 'user';
            }
            return (
              <Icons
                type={iconType}
                name={iconName}
                size={30}
                color={'#FFFFFF'}
              />
            );
          },
        })}>
        <Tab.Screen name="Card" component={CardScreen} />
        <Tab.Screen name="Phone" component={PhoneScreen} />
        <Tab.Screen name="Data" component={DataScreen} />
      </Tab.Navigator>
    </>
  );
}
