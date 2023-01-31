import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {ic_succes} from '../../assets/Images';
import Texts from '../../component/atoms/Textst';
import Icons from '../../component/atoms/Icons';

export default function Succes({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      sukses();
    }, 3000);
  }, []);
  const sukses = () => {
    navigation.replace('SignIn');
  };
  return (
    <View style={{flex: 1, backgroundColor: '#1677FF'}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.replace('SignIn')}>
          <Icons
            name={'close'}
            size={25}
            type={'AntDesign'}
            color={'black'}
            style={{padding: 20}}
          />
        </TouchableOpacity>
        <View style={styles.body}>
          <Image source={ic_succes} style={{height: 120, width: 120}} />
          <Texts style={styles.texttitele}>Success!</Texts>
          <Texts style={styles.descripsi}>
            Now check your email for confirmation link.!
          </Texts>
          <View style={{flexDirection: 'row', top: 200}}>
            <Texts style={[styles.textNav, {color: '#000000'}]}>
              Didn’t receive it?
            </Texts>
            <TouchableOpacity onPress={() => navigation.replace('SignIn')}>
              <Texts style={[styles.textNav, {color: '#1890FF'}]}>
                Click here
              </Texts>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  textNav: {
    fontWeight: '400',
    fontSize: 15,
  },
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    marginTop: 30,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  body: {
    alignItems: 'center',
    top: 100,
  },
  texttitele: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 34,
    paddingTop: 25,
  },
  descripsi: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 20,
    paddingTop: 10,
    width: 250,
    textAlign: 'center',
  },
});
