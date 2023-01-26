import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Icons from './Icons';
import Texts from './Textst';

export default function TextInputs({
  onPress,
  textColor,
  containerStyle,
  styles,
  typeicon,
  nameicon,
  icon,
  title,
  value,
  isSecurity,
  ...props
}) {
  const [focused, setfocused] = useState(false);
  const [securePassword, setsecurePassword] = useState(true);
  return (
    <View style={style.containerInput}>
      {focused && title && <Texts style={{fontSize: 16}}>{title}</Texts>}
      <View style={style.container}>
        <TextInput
          placeholderTextColor="grey"
          onFocus={() => setfocused(true)}
          {...props}
          style={styles}
          value={value}
          secureTextEntry={isSecurity && securePassword}
        />
        {isSecurity && (
          <TouchableOpacity
            style={style.icon}
            onPress={() => {
              setsecurePassword(!securePassword);
            }}>
            <Icons
              {...props}
              type={'FontAwesome'}
              name={securePassword ? 'eye-slash' : 'eye'}
              size={25}
              color={textColor ? textColor : 'grey'}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    // height: 40,
    // width: 300,
    // backgroundColor: 'red',
    // paddingVertical: ,
    // marginVertical: 2,
    // borderRadius: 20,
    // borderWidth:1,
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
  input: {
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  icon: {
    position: 'absolute',
    right: 16,
  },
});
