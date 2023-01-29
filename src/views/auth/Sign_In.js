import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Texts from '../../component/atoms/Textst';
import Buttons from '../../component/atoms/Buttons';
import Icons from '../../component/atoms/Icons';
import TextInputs from '../../component/atoms/Texinputs';

export default function SignIn({navigation}) {
  const [hidepass, sethidepass] = useState({isSecureTextEntry: true});
  const [auth, setauth] = useState({
    email: '',
    password: '',
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
            style={{left: 20, paddingTop: 13}}
          />
        </TouchableOpacity>
        <Texts style={styles.title}>Sign in to your account</Texts>
        <View style={{alignItems: 'center'}}>
          <TextInputs
            title="Email"
            placeholder={'Input Your Email'}
            value={auth.email}
            onChangeText={text => setauth({...auth, email: text})}
          />
          <TextInputs
            title={'Password'}
            placeholder={'Input Your Password'}
            value={auth.password}
            onChangeText={text => setauth({...auth, password: text})}
            isSecurity
          />
          <Texts style={styles.forgot}>Forgot your password?</Texts>
          <View style={{paddingTop: 20}}>
            <Buttons
              styleBtn={[styles.btn]}
              title={'Sign in'}
              textStyle={[styles.text, {color: '#FFFFFF'}]}
              onPress={() => navigation.navigate('Home')}
              bordered
              // bgColor
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 20,
              }}>
              <Text
                style={{borderBottomWidth: 1, width: 130, borderColor: 'grey'}}
              />
              <Text style={{paddingHorizontal: 30, top: 8}}>Or</Text>
              <Text
                style={{borderBottomWidth: 1, width: 130, borderColor: 'grey'}}
              />
            </View>
            <View style={{paddingTop: 20}}>
              <Buttons 
                styleBtn={styles.btn}
                title={'Sign in with Google'}
                textStyle={[styles.text, {color: '#1890FF'}]}
                // onPress={() => navigation.navigate('SignIn')}
                bordered
                bgColor={'#E7F0FF'}
              />
              <Buttons
                styleBtn={styles.btn}
                title={'Sign in with Apple'}
                textStyle={[styles.text, {color: '#1890FF'}]}
                // onPress={() => navigation.navigate('SignIn')}
                bordered
                bgColor={'#E7F0FF'}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  btn: {
    width: 340,
    elevation: 0.1,
    height: 65,
    marginTop: 8,
  },
  text: {
    textTransform: 'uppercase',
    fontSize: 17,
    fontWeight: '500',
  },
  title: {
    padding: 20,
    color: '#000000',
    fontWeight: '500',
    fontSize: 22,
  },
  containerInput: {
    width: 340,
    borderRadius: 10,
    paddingLeft: 15,
    borderWidth: 1.5,
    borderColor: '#CDD4D9',
    paddingTop: 5,
    margin: 13,
  },
  forgot: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '300',
    alignSelf: 'flex-end',
    right: 30,
  },
});
