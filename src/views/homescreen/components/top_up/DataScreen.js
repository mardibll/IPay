import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import React, {useState} from 'react';
import Texts from '../../../../component/atoms/Textst';
import {ic_shuaka} from '../../../../assets/Images';
import Icons from '../../../../component/atoms/Icons';
import Buttons from '../../../../component/atoms/Buttons';
import { styles } from './styles';

export default function DataScreen() {
  const SLIDER_WIDTH = Dimensions.get('window').width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
  const [balance, setbalance] = useState('25,000');
  const [konvert, setkonvert] = useState('AT&T');
  const [listcard, setlistcard] = useState({
    id_card: '+187923423456',
    Amount: '456.00',
    Reason: 'Narrative',
  });
  const title = [
    {
      img: ic_shuaka,
      nama: 'Your Data',
      menu: 'View All',
      icon: <Icons type={'AntDesign'} name={'right'} size={15} />,
    },
  ];
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#1677FF',
          // height: 200,
          padding: 25,
          alignItems: 'center',
        }}>
        <Texts style={[styles.balance, {fontSize: 13}]}>
          Your Data Balance
        </Texts>
        <Texts style={[styles.balance, {fontSize: 30}]}>{balance}</Texts>
        <Texts style={styles.konversi}>{konvert}</Texts>
      </View>
      <View>
        <View style={[styles.is_position, {width: SLIDER_WIDTH}]} />
      </View>
      <View style={styles.card}>
        {title.map((item, index) => {
          return (
            <View
              key={index}
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={item.img} style={{height: 35, width: 35}} />
                <Texts style={styles.names}>{item.nama}</Texts>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Texts style={styles.menu}>{item.menu}</Texts>
                <Text>{item.icon}</Text>
              </View>
            </View>
          );
        })}
        <View style={[styles.list, {justifyContent: 'space-between'}]}>
          <Texts style={styles.text}>{listcard.id_card}</Texts>
          <Texts style={[styles.text, {color: '#108EE9'}]}>Change</Texts>
        </View>
        <View style={styles.list}>
          <Texts style={styles.text}>Amount</Texts>
          <Texts style={[styles.text, {color: '#AAAAAA', left: 40}]}>
            {' '}
            {listcard.Amount}
          </Texts>
        </View>
        <View style={styles.list}>
          <Texts style={styles.text}>Reason</Texts>
          <Texts style={[styles.text, {color: '#AAAAAA', left: 48}]}>
            {listcard.Reason}
          </Texts>
        </View>
        <View style={{paddingVertical: 10}}>
          <Buttons
            bordered={'blue'}
            styleBtn={{width: 310, alignSelf: 'center'}}
            title={'OK'}
            textStyle={[styles.text, {color: '#FFFFFF'}]}
          />
        </View>
      </View>
    </View>
  );
}

