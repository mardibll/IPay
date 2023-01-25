import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Texts from './Textst';

export default function Buttons({
  textStyle,
  title,
  type,
  bordered,
  styleBtn,
  textColor,
  bgColor,
  colors,
  ...props
}) {
  var styledbtn = [
    styles.btn,
    styleBtn,

    type == 'small' && {width: '50%'},
    type == 'large' && {width: '100%'},
    bordered
      ? {  //
          backgroundColor: bgColor ? bgColor : '#1677FF',
        }
      : {backgroundColor: bgColor ? bgColor : '#000000'},
    // colors?{
    //     backgroundColor: bgColor ? bgColor :'grey',
    //   }
    // : {backgroundColor: bgColor ? bgColor : 'red'},
    ,
  ];
  var styledbtntext = [styles.btnText, textStyle];
  return (
    <TouchableOpacity activeOpacity={0.7} style={styledbtn} {...props}>
      <Texts style={styledbtntext}>{title}</Texts>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    borderRadius: 10,
    padding: 13,
    justifyContent: 'center',
    margin:10
  },
  btnText: {
    fontWeight: '600',
    fontSize: 16,
    color: 'grey',
  },
});
