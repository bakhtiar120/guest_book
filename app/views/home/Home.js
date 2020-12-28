// Barcode and QR Code Scanner using Camera in React Native
// https://aboutreact.com/react-native-scan-qr-code/

// import React in our code
import React, {useState} from 'react';
//import database firebase
import {Button, Text, TextInput,Image, View,TouchableOpacity,PermissionsAndroid,StatusBar} from 'react-native';
import moment from 'moment';
import styles from '../../assets/styles/Styles';
import Colors from '../../assets/styles/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Home = ( ) => {
    const navigation = useNavigation();

  
  const onClickListTamu = () => {
    // Called after te successful scanning of QRCode/Barcode
    navigation.navigate("ListTamu");
  };

  const onClickBuwuhan = () => {
    // Called after te successful scanning of QRCode/Barcode
    navigation.navigate("ListBuwuhan");
  };

  const onClickScan = () => {
       if (Platform.OS === 'android') {
      async function requestCameraPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Camera Permission',
              message: 'App needs permission for camera access',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // If CAMERA Permission is granted
            navigation.navigate("ScanQr");
          } else {
            alert('CAMERA permission denied');
          }
        } catch (err) {
          alert('Camera permission err', err);
          console.warn(err);
        }
      }
      // Calling the camera permission function
      requestCameraPermission();
    } else {
      navigation.navigate("ScanQr");
    }
  }
  return (
      <View style={styles.container_main_absolute}>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#FF0066CC" translucent={true} />
          <View style={{ backgroundColor: '#FF0066CC', height: 170 }}>
            <View style={{ marginTop: 50, marginLeft: 20 }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Halo,</Text>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Hanafi & Rafika</Text>
                </View>
          </View>
          <View style={{ marginLeft: 20, marginTop: 20, marginRight: 20, backgroundColor: '#FF0066CC', height: 150, borderRadius: 10 }}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View>
                    <View style={{ marginLeft: 20, marginTop: 20 }}>
                    <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>"Dan segala sesuatu Kami</Text>
                    <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>ciptakan berpasang-pasangan</Text>
                    <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>supaya kamu mengingat</Text>
                    <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>kebesaran Allah"</Text>
                    <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Q.S. Adz-Dzariyyat (51:49)</Text>
                </View>
                    </View>
                    <View style={{marginRight:50,marginTop:10}}>
                    <Image style={{ height: 100, width: 100 }} source={require('../../assets/images/wedding_icon.png')} />
                    </View>
                </View>

            </View>
          <View style={{ marginLeft: 20, marginTop: 40 }}>
                <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>All Menu</Text>
            </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                <TouchableOpacity onPress={onClickListTamu}>
                  <View style={{ height: 100, width: 100, backgroundColor: '#FF0066CC', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: 50, width: 50 }} source={require('../../assets/images/menu_1.png')} />
                    <Text style={{ color: 'white' }}>List Tamu</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onClickBuwuhan}>
                  <View style={{ height: 100, width: 100, backgroundColor: '#FF0066CC', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: 50, width: 50 }} source={require('../../assets/images/menu_2.png')} />
                    <Text style={{ color: 'white' }}>Buwuhan</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={onClickScan}>
                <View style={{ height: 100, width: 100, backgroundColor: '#FF0066CC', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: 50, width: 50 }} source={require('../../assets/images/menu_3.png')} />
                    <Text style={{ color: 'white' }}>Scan QR</Text>
                </View>
                </TouchableOpacity>

            </View>
        </View>
     );
};

export default Home;
