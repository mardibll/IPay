import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TransitionPresets} from '@react-navigation/stack';
import Icons from '../../../../component/atoms/Icons';
import HeadScreens from '../../../../component/HeadScreens';
import Electricity from './Electricity';
import Internet from './Internet';
import Water from './Water'
const Tab = createMaterialTopTabNavigator();
export default function ScreenUtilities({navigation}) {
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
          tabBarIndicatorStyle: {
            backgroundColor: 'white',
          },
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let iconType;
            if (route.name === 'Electricity') {
              iconName = 'energy';
              iconType = 'SimpleLineIcons';
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
        <Tab.Screen name="Electricity" component={Electricity} />
        <Tab.Screen name="Water" component={Water} />
        <Tab.Screen name="Internet" component={Internet} />
      </Tab.Navigator>
    </>
  );
}
