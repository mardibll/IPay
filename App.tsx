import {View, Text} from 'react-native';
import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './src/nav/StackNav';
import {createTable} from './src/utils/service';

export default function App() {
  useEffect(() => {
    addTable();
  }, []);

  const addTable = () => {
    createTable('Table_User', dbSql.data_user);
    // createTable('Table_User', dbSql.tbl_dataRegister)
  };
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}
