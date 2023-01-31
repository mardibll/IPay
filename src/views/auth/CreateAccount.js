import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {ic_create} from '../../assets/Images';
import Texts from '../../component/atoms/Textst';
import Buttons from '../../component/atoms/Buttons';

import React, {useEffect} from 'react';
export default function CreateAccount({navigation}) {

  return (
    <View style={{alignItems: 'center', flex: 1, backgroundColor: '#F5F5F5'}}>
      <Image source={ic_create} style={{height: 400, width: 400}} />
      <View
        style={{
          alignItems: 'center',
          paddingTop: 25,
        }}>
        <Texts style={{color: '#000000', fontSize: 34, fontWeight: '500'}}>
          IPay
        </Texts>
        <View style={{width: 250, paddingVertical: 8}}>
          <Texts style={styles.body}>
            for your cash, cards, investments, savings and foreign exchanges
          </Texts>
        </View>
        <Buttons
          styleBtn={styles.btn}
          title={'Create an account'}
          textStyle={styles.text}
          onPress={() => navigation.replace('SignUp')}
          bordered
        />
        <View style={{flexDirection: 'row', paddingTop: 30}}>
          <Texts style={[styles.textNav, {color: '#000000'}]}>
            Already have an account?
          </Texts>
          <TouchableOpacity onPress={() => navigation.replace('SignIn')}>
            <Texts style={[styles.textNav, {color: '#1890FF'}]}> Sign In</Texts>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    fontSize: 20,
    fontWeight: '300',
    color: '#000000',
    textAlign: 'center',
  },
  btn: {
    width: 340,
    backgroundColor: 'red',
    height: 65,
    marginTop: 8,
  },
  text: {
    color: '#FFFFFF',
    textTransform: 'uppercase',
    fontSize: 17,
    fontWeight: '500',
  },
  textNav: {
    fontWeight: '400',
    fontSize: 15,
  },
});
