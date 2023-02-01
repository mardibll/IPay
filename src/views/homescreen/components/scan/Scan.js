'use strict';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
  Alert,
  Dimensions,
} from 'react-native';
const Width = Dimensions.get('window').width;
const Hight = Dimensions.get('window').height;
import React, {useState, useRef, useEffect} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import Texts from '../../../../component/atoms/Textst';
import {scans} from '../../../../utils/data';
export default function ScreenScan() {
  const scanner = useRef(null);
  const [Scan, setScan] = useState(false);
  const [result, setresult] = useState(null);
  const onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };
  useEffect(() => {
    setresult(null);
  }, []);

  return !Scan ? (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonTouchable}
        onPress={() => setScan(true)}>
        <Text style={styles.buttonText}>START</Text>
      </TouchableOpacity>
    </View>
  ) : (
    // <View>
    <QRCodeScanner
      cameraStyle={{height: Hight, width: Width}}
      onRead={onSuccess}
    //   reactivate={true}
      showMarker={true}
      cameraType={'back'}
    //   flashMode={'torch'}

      markerStyle={{
        bottom: 100,
        width: 330,
        height: 300,
        borderColor: 'white',
        borderWidth: 4,
      }}
      //   flashMode={RNCamera.Constants.FlashMode.torch}
      //   topContent={
      //     <Text style={styles.centerText}>
      //       Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text>{' '}
      //       on your computer and scan the QR code.
      //     </Text>
      //   }
      // topContent={
      //     <Text>hashh</Text>
      // }

      bottomViewStyle={{
        position: 'absolute',
        bottom: 100,
        // backgroundColor: 'red',
      }}
      bottomContent={
        <>
          <Texts style={styles.text}>Scan QR Code or Bar Code</Texts>
          <View
            style={{
              //   top: 0,
              //   justifyContent: 'center',
              //   position: 'absolute',
              width: '75%',
              justifyContent: 'space-between',
              flexDirection: 'row',
              //   backgroundColor: 'blue',
              alignItems: 'center',
              paddingTop: 40,
              //   justifyContent:"center"
            }}>
            <TouchableOpacity
              style={styles.buttonTouchable}
              onPress={() => scanner.current.reactivate()}>
              <Text>{scans.icon_pay}</Text>
              <Texts style={styles.text}>{(scans.name = 'Pay')}</Texts>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonTouchable}
              onPress={() => setScan(false)}>
              <Text>{scans.icon_img}</Text>
              <Texts style={styles.text}>{(scans.name = 'Album')}</Texts>
            </TouchableOpacity>
          </View>
        </>
      }
    />
    // </View>
  );
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  text: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    fontWeight: 'bold',
    // backgroundColor:"red"
  },
  buttonTouchable: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
});
