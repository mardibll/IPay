import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {trevel_card} from '../../../../utils/data';
import Texts from '../../../../component/atoms/Textst';
import {styles} from './Styles';
import {
  ic_imgcard,
  ic_imgcupons,
  ic_imgshop,
  ic_shuaka,
} from '../../../../assets/Images';
export default function TabDocoment() {
  const [claim, setclaim] = useState({
    price: '50',
    date: '2021-02-28',
  });
  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <View style={styles.position} />
        <View style={{paddingHorizontal: 20, paddingTop: 20}}>
          <View style={styles.cards}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={ic_shuaka} style={{height: 27, width: 27}} />
                <Texts style={{left: 13, fontSize: 16}}>
                  {(trevel_card.text = 'Identification')}
                </Texts>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Texts style={{fontSize: 14, right: 5, color: '#1677FF'}}>
                  {trevel_card.btn_name}
                </Texts>
                <Text>{trevel_card.icon}</Text>
              </View>
            </View>
            <View style={styles.item_card}>
              <Texts style={{fontSize: 13, fontWeight: '500'}}>
                You don't have any travel cards at the moment.
              </Texts>
            </View>
          </View>
          <View style={styles.cards}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={ic_imgcard} style={{height: 35, width: 35}} />
                <Texts style={{left: 13, fontSize: 16}}>
                  {(trevel_card.text = 'Driving')}
                </Texts>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Texts style={{fontSize: 14, right: 5, color: '#1677FF'}}>
                  {trevel_card.btn_name}
                </Texts>
                <Text>{trevel_card.icon}</Text>
              </View>
            </View>
            <View style={styles.item_card}>
              <Texts style={{fontSize: 13, fontWeight: '500'}}>
                You don't have any loyalty cards at the moment.
              </Texts>
            </View>
          </View>
          <View style={styles.cards}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={ic_imgcupons}
                  style={{height: 30, width: 30, resizeMode: 'contain'}}
                />
                <Texts style={{left: 13, fontSize: 16}}>
                  {(trevel_card.text = 'Other')}
                </Texts>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Texts style={{fontSize: 14, right: 5, color: '#1677FF'}}>
                  {trevel_card.btn_name}
                </Texts>
                <Text>{trevel_card.icon}</Text>
              </View>
            </View>
            <View style={styles.item_card}>
              <Texts style={{fontSize: 13, fontWeight: '500'}}>
                You don't have any loyalty cards at the moment.
              </Texts>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
