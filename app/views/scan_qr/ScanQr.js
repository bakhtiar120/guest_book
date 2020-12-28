// Barcode and QR Code Scanner using Camera in React Native
// https://aboutreact.com/react-native-scan-qr-code/

// import React in our code
import React, {useState} from 'react';
//import database firebase
import {Button, Text, TextInput,SafeAreaView, View,TouchableOpacity} from 'react-native';
import moment from 'moment';
import styles from '../../assets/styles/Styles';
import Colors from '../../assets/styles/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {CameraKitCameraScreen} from 'react-native-camera-kit';

const ScanQr = () => {

  const onBarcodeScan = (qrvalue) => {
    // Called after te successful scanning of QRCode/Barcode
    console.log("Hasil QR ",qrvalue);
  };

  return (
      <SafeAreaView style={{flex: 1}}>
          <View style={{flex: 1}}>
          <CameraKitCameraScreen
            showFrame={false}
            // Show/hide scan frame
            scanBarcode={true}
            // Can restrict for the QR Code only
            laserColor={'blue'}
            // Color can be of your choice
            frameColor={'yellow'}
            // If frame is visible then frame color
            colorForScannerFrame={'black'}
            // Scanner Frame color
            onReadCode={(event) =>
              onBarcodeScan(event.nativeEvent.codeStringValue)
            }
          />
        </View>
          </SafeAreaView>
     );
};

export default ScanQr;
