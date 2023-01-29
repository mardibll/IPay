import {StyleSheet} from 'react-native';
import React from 'react';
export const styles = StyleSheet.create({
  balance: {
    fontWeight: '500',

    color: '#FFFFFF',
  },
  is_position: {
    position: 'absolute',
    backgroundColor: '#1677FF',
    height: 90,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  konversi: {
    fontWeight: '500',
    fontSize: 12,
    color: '#FFFFFF',
    backgroundColor: '#52BCFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    letterSpacing: 1,
    marginTop: 7,
  },
  card: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 12,
    elevation: 7,
  },
  names: {
    left: 10,
    color: '#000000',
    fontSize: 16,
    fontWeight: '400',
  },
  menu: {
    right: 10,
    fontWeight: '400',
    fontSize: 15,
    color: '#1677FF',
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#888888',
    borderBottomWidth: 1,
    paddingVertical: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
  },
});
