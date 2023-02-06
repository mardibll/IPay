import {View, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import Texts from '../../component/atoms/Textst';
import {logosplash} from '../../assets/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DB from '../../utils/Sqlite';
import db_query from '../../utils/db_sqlite';
export default function Splash({navigation, ...props}) {
  useEffect(() => {
    valideteSession();
  }, []);
  const valideteSession = async props => {
    // await AsyncStorage.removeItem('token');//menghapus isi token
    const value = await AsyncStorage.getItem('token');
    DB.createTable('users', db_query.tbl_user);
    DB.createTable('article', db_query.tbl_article);
    DB.createTable('portoProfile', db_query.tbl_porto_profile);
    DB.createTable('experiences', db_query.tbl_experiences);
    DB.createTable('skills', db_query.tbl_skills);
    DB.createTable('educations', db_query.tbl_educations);
    DB.createTable('contacts', db_query.tbl_contacts);
    DB.createTable('User_Data', db_query.tbl_regist);
    setTimeout(() => {
      if (value != null) {
        navigation.replace('Home');
      } else {
        navigation.replace('CreateAccount');
      }
    }, 2000);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     create();
  //   }, 2000);
  // }, []);
  // const create = async () => {
  //   try {
  //     // await AsyncStorage.removeItem('token');//menghapus isi token
  //     const value = await AsyncStorage.getItem('token');
  //     if (value != null) {
  //       navigation.replace('Home');
  //     } else {
  //       navigation.replace('CreateAccount');
  //     }
  //   } catch (error) {}
  // };
  return (
    <View style={styles.container}>
      <Texts style={styles.title}>IPay</Texts>
      <Image source={logosplash} style={{width: 150, height: 130, left: 20}} />
      <Texts style={styles.body}>Fast & Secure</Texts>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1677FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  body: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});
