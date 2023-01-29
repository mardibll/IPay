import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Icons from './atoms/Icons';
import Texts from './atoms/Textst';

export default function HeadScreens({nav}) {
  const [hide, sethide] = useState(true);
  const head_data = {
    icon_left: <Icons type={'AntDesign'} name={'left'} size={25} />,
    icon_right: <Icons type={'FontAwesome'} name={'ellipsis-h'} size={25} />,
    icon_right2: (
      <Icons
        type={'MaterialCommunityIcons'}
        name={'progress-close'}
        size={25}
      />
    ),
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => nav.goBack()}>
        <Icons type={'AntDesign'} name={'left'} size={25} />
      </TouchableOpacity>
      <View style={{position: 'absolute', left: 160}}>
        <Texts style={styles.Top_up}>Top Up</Texts>
      </View>
      <View style={styles.icon_right}>
        {hide ? (
          <TouchableOpacity>
            <Text style={{color: '#FFFFFF'}}>{head_data.icon_right}</Text>
          </TouchableOpacity>
        ) : (
          false
        )}
        {hide ? <Text style={styles.grid} /> : false}
        <TouchableOpacity onPress={() => sethide(!hide)}>
          <Text style={{color: '#FFFFFF'}}>{head_data.icon_right2}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  Top_up: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  icon_right: {
    flexDirection: 'row',
    backgroundColor: '#000000',
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 3,
    alignItems: 'center',
  },
  grid: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
    marginVertical: 1,
    marginHorizontal: 4,
  },
});
