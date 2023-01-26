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
  inputContainer,
  ...props
}) {
  const [focused, setfocused] = useState(false);
  const [securePassword, setsecurePassword] = useState(true);
  return (
    <View style={[style.containerInput, inputContainer]}>
      {focused && title && (
        <Texts style={{fontSize: 16, marginTop: 4}}>{title}</Texts>
      )}
      <View style={style.container}>
        <TextInput
          placeholderTextColor="grey"
          onFocus={() => setfocused(true)}
          {...props}
          style={[styles, style.input]}
          value={value}
          secureTextEntry={isSecurity && securePassword}
        />
        {isSecurity && (
          <TouchableOpacity
            style={[style.icon, focused && title && {marginTop: -25}]}
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
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerInput: {
    width: '90%',
    flex: 1,
    borderRadius: 10,
    paddingLeft: 15,
    borderWidth: 1.5,
    borderColor: '#CDD4D9',
    margin: 13,
  },
  input: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  icon: {
    marginHorizontal: 6,
    marginRight: 15,
  },
});
