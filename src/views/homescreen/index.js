import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import TextInputs from '../../component/atoms/Texinputs';
import Icons from '../../component/atoms/Icons';
import Texts from '../../component/atoms/Textst';
import {Convenient, Financial, Service} from '../../utils/data';
import {ic_imgChard} from '../../assets/Images';
import {Carousel} from 'react-native-snap-carousel';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
export default function Home({navigation}) {
  const [message, setmessage] = useState('2 hours ago');
  const [offers, setoffers] = useState('2 hours ago');
  const [images, setimages] = useState([
    require('../../assets/image_Home/insurence.png'),
  ]);
  return (
    <View style={{flex: 1, backgroundColor: '#EEEEEE'}}>
      <View style={styles.head}>
        <View style={styles.containerInput}>
          <Icons
            name={'search1'}
            type={'AntDesign'}
            size={23}
            color={'#BBBBBB'}
          />
          <TextInputs
            inputContainer={{margin: 0, borderWidth: 0}}
            icon
            placeholder={'Search for products or services '}
            placeholderTextColor={'#BBBBBB'}
          />
        </View>
        <Icons
          style={{marginLeft: 10}}
          name={'plus'}
          type={'AntDesign'}
          size={23}
          color={'#FFFFFF'}
        />
      </View>
      <View>
        <View style={styles.position} />
      </View>
      <ScrollView>
        <View style={{flex: 1, paddingHorizontal: 20}}>
          <View style={styles.card}>
            {Financial.map((item, index) => {
              return (
                <View key={index}>
                  <TouchableOpacity style={{alignItems: 'center'}}>
                    <Image source={item.img} style={{height: 30, width: 30}} />
                    <Texts style={styles.textname}>{item.name}</Texts>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
          <Text style={styles.listname}>Financial Hub</Text>
          <View style={[styles.card, {marginTop: 14}]}>
            {Convenient.map((item, index) => {
              return (
                <View key={index}>
                  <TouchableOpacity style={{alignItems: 'center'}}>
                    <Image source={item.img} style={{height: 30, width: 30}} />
                    <Texts style={styles.textname}>{item.name}</Texts>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
          <Text style={styles.listname}>Convenient Hub</Text>
          <View style={[styles.card, {marginTop: 14, flexWrap: 'wrap'}]}>
            {Service.map((item, index) => {
              return (
                <View key={index}>
                  <TouchableOpacity
                    style={{marginVertical: 2}}
                    onPress={() => {
                      if (item.name == 'Top Up') {
                        navigation.navigate('TopUP');
                      } else {
                      }
                    }}>
                    <View
                      style={{
                        width: 60,
                        alignItems: 'center',
                        marginVertical: 11,
                      }}>
                      <Image
                        source={item.img}
                        style={{height: 30, width: 30}}
                      />
                      <Texts
                        style={[
                          styles.textname,
                          {width: 62, textAlign: 'center'},
                        ]}>
                        {item.name}
                      </Texts>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
          <Text style={styles.listname}>Service Hub</Text>
          <View style={[styles.card, {alignItems: 'center', marginTop: 14}]}>
            <View style={{paddingRight: 15}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icons
                  type={'Octicons'}
                  name={'dot-fill'}
                  size={20}
                  color={'#108EE9'}
                />
                <Texts style={[styles.notif, {padding: 6}]}>
                  Yay! You have a new message.
                </Texts>
                <Texts style={[styles.notif, {color: '#8B8B8D'}]}>
                  {message}
                </Texts>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icons
                  type={'Octicons'}
                  name={'dot-fill'}
                  size={20}
                  color={'#108EE9'}
                />
                <Texts style={[styles.notif, {padding: 6}]}>
                  Congratulations! new year offers.
                </Texts>
                <Texts style={[styles.notif, {color: '#8B8B8D'}]}>
                  {offers}
                </Texts>
              </View>
            </View>
            <Icons type={'AntDesign'} name={'right'} size={20} color={'grey'} />
          </View>
          <View style={styles.content_Carousel}>
            <Carousel
              sliderWidth={SLIDER_WIDTH}
              layout={'default'}
              inactiveSlideScale
              itemWidth={ITEM_WIDTH}
              data={images}
              autoplay
              renderItem={({item, index}) => (
                <Image source={item} key={index} style={styles.img_Carousel} />
              )}
            />
          </View>
          <Texts style={styles.listname}>Rewards Hub</Texts>
          <View style={styles.reward}>
            {ic_imgChard.map((item, index) => {
              return (
                <View key={index}>
                  <Image
                    source={item.img}
                    style={{height: 120, width: 160, resizeMode: 'stretch'}}
                  />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 15,
    borderRadius: 10,
    flex: 1,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1677FF',
    justifyContent: 'space-between',
    padding: 20,
  },
  position: {
    position: 'absolute',
    backgroundColor: '#1677FF',
    height: 50,
    width: '100%',
  },
  listname: {
    color: '#000000',
    fontSize: 13,
    fontWeight: '500',
    padding: 5,
  },
  card: {
    zIndex: 9999,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 35,
    paddingVertical: 25,
    borderRadius: 12,
    elevation: 2,
  },
  textname: {
    color: '#000000',
    fontSize: 10,
    fontWeight: '400',
    paddingTop: 10,
  },
  notif: {
    fontWeight: '400',
    fontSize: 11,
  },
  img_Carousel: {
    resizeMode: 'stretch',
    backgroundColor: 'white',
    width: 300,
    height: 110,
  },
  content_Carousel: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 12,
    elevation: 2,
    marginTop: 20,
  },
  reward: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingBottom: 50,
  },
});
