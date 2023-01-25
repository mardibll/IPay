import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Icons from './Icons';

export default function TextInputs({
  onPress,
  margin,
  width,
  textColor,
  containerStyle,
  styles,
  typeicon,
  nameicon,
  justifyContent,
  icon,
  ...props
}) {
  return (
    <View
      style={[
        style.container,
        width && {width: width},
        {justifyContent: justifyContent ? 'center':justifyContent},
      ]}>
      <TextInput {...props} style={styles} />
      <TouchableOpacity style={style.icon} onPress={onPress}>
        {icon && (
          <Icons
            {...props}
            type={typeicon}
            name={nameicon}
            size={25}
            color={textColor ? textColor : 'grey'}
          />
        )}
      </TouchableOpacity>
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
