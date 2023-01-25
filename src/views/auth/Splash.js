import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import Texts from '../../component/atoms/Textst';
import {logosplash} from '../../assets/Images';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      create();
    }, 2000);
  }, []);
  const create = () => {
    navigation.replace('CreateAccount');
  };
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
