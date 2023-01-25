import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Texts from '../../component/atoms/Textst';
import Buttons from '../../component/atoms/Buttons';
import {logosplash} from '../../assets/Images';

export default function SignUp({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', paddingVertical: 50}}>
        <Image source={logosplash} style={{height: 103, width: 108}} />
        <Texts style={styles.title}>Welcome to IPay</Texts>
      </View>
      <View style={styles.card}>
        <Texts style={styles.create}>Create an account</Texts>
        <View>
          <Buttons
            styleBtn={styles.btn}
            title={'Continue with Google'}
            textStyle={styles.text}
            // onPress={clickScreen}
            bordered
            bgColor={'#DD4B39'}
          />
          <Buttons
            styleBtn={[styles.btn, {backgroundColor: 'red'}]}
            title={'Continue with Apple'}
            textStyle={styles.text}
            // onPress={clickScreen}
            bordered
            bgColor={'#000000'}
          />
          <Buttons
            styleBtn={styles.btn}
            title={'Sign up with email'}
            textStyle={styles.text}
            onPress={() => navigation.navigate('SinUpEmail')}
            bordered
          />
        </View>
        <View style={{flexDirection: 'row', paddingTop: 30}}>
          <Texts style={[styles.textNav, {color: '#000000'}]}>
            Already have an account?
          </Texts>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Texts style={[styles.textNav, {color: '#1890FF'}]}> Sign In</Texts>
          </TouchableOpacity>
        </View>
        <Texts style={styles.foot}>
          By signing up you agree to our Privacy Policy and Terms.{' '}
        </Texts>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 34,
  },
  btn: {
    width: 340,

    height: 65,
    marginTop: 8,
  },
  text: {
    color: '#FFFFFF',
    textTransform: 'uppercase',
    fontSize: 17,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    backgroundColor: '#1677FF',
  },
  card: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    elevation: 20,
  },
  create: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '400',
    paddingVertical: 30,
    paddingTop: 60,
  },
  textNav: {
    fontWeight: '400',
    fontSize: 15,
  },
  foot: {
    fontWeight: '300',
    fontSize: 12,
    color: '#000000',
    paddingTop: 40,
  },
});
