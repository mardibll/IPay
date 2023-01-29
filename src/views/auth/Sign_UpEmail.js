import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Texts from '../../component/atoms/Textst';
import Icons from '../../component/atoms/Icons';
import TextInputs from '../../component/atoms/Texinputs';
import Buttons from '../../component/atoms/Buttons';

export default function SinUpEmail({navigation}) {
  const [authregist, setauthregist] = useState({
    email: '',
    password: '',
    confirm: '',
  });
  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons
            name={'arrowleft'}
            size={25}
            type={'AntDesign'}
            color={'#1677FF'}
            style={{left: 20, paddingTop: 25}}
          />
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Texts style={styles.title}>Create an account.</Texts>
          <TextInputs
            title="Email"
            placeholder={'Input Your Email'}
            value={authregist.email}
            onChangeText={val => setauthregist({...authregist, email: val})}
          />
          <TextInputs
            title={'Password'}
            placeholder={'Input Your Password'}
            value={authregist.password}
            onChangeText={val => setauthregist({...authregist, password: val})}
            isSecurity
          />
          <TextInputs
            title={'Confirmasi password'}
            placeholder={'password confirmation'}
            value={authregist.confirm}
            onChangeText={val => setauthregist({...authregist, confirm: val})}
            isSecurity
          />
          <Buttons
            styleBtn={styles.btn}
            title={'Create an account'}
            textStyle={[styles.text, {color: '#FFFFFF'}]}
            onPress={() => navigation.navigate('Succes')}
            bordered
          />
          <Texts style={styles.body}>
            By signing up you agree to our Privacy Policy and Terms.
          </Texts>
          <View style={{flexDirection: 'row', paddingTop: 70}}>
            <Texts style={[styles.textNav, {color: '#000000'}]}>
              Already have an account?
            </Texts>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Texts style={[styles.textNav, {color: '#1890FF'}]}>
                {' '}
                Sign In
              </Texts>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  containerInput: {
    width: 340,
    borderRadius: 10,
    paddingLeft: 15,
    borderWidth: 1.5,
    borderColor: '#CDD4D9',
    paddingTop: 5,
    margin: 13,
  },
  btn: {
    width: 340,
    // elevation: 0.1,
    height: 65,
    marginTop: 10,
  },
  text: {
    textTransform: 'uppercase',
    fontSize: 17,
    fontWeight: '500',
  },
  title: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 35,
    width: 170,
    textAlign: 'center',
    paddingVertical: 20,
  },
  body: {
    fontWeight: '300',
    fontSize: 12,
    color: '#000000',
    paddingTop: 10,
    // backgroundColor:"red"
  },
});
