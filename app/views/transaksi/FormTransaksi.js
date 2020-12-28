// Barcode and QR Code Scanner using Camera in React Native
// https://aboutreact.com/react-native-scan-qr-code/

// import React in our code
import React, {useState} from 'react';
//import database firebase
import {Button, Text, TextInput,FlatList,Alert,ToastAndroid, View,StatusBar,TouchableOpacity} from 'react-native';
import moment from 'moment';
import styles from '../../assets/styles/Styles';
import Colors from '../../assets/styles/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { Input } from 'react-native-elements'
import Styles from '../../assets/styles/Styles';
import DropDownPicker from 'react-native-dropdown-picker';
// import firebase from "../../../firebaseConfig";
const FormTransaksi = () => {
const [nama,setNama] = React.useState('');
const [nominal,setNominal] = React.useState('');
const create_alert = () =>
    Alert.alert(
      "",
      "Apakah anda yakin untuk mengajukan surat ini?",
      [
        {
          text: "Tidak",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Ya", onPress: () => send_data() }
      ],
      { cancelable: false }
    );

    const send_data = () => {
      ToastAndroid.showWithGravity(
                        'Anda Berhasil Mengajukan Permohonan Surat',
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER
                    );
    }
  return (
      <View style={styles.container_main_absolute}>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#FF0066CC" translucent={true} />
      <View style={{ backgroundColor: '#FF0066CC', height: 60,justifyContent:'center',alignItems:'center' }}>
            
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold',marginTop:20 }}>Tambah Data Buwuhan</Text>
                    
          </View>
      <View style={{marginTop:20}}>
          <Text style={{fontWeight: 'bold', marginLeft: 10, fontSize: 16,marginTop:10}}>
            Nama
          </Text>
             <DropDownPicker
          placeholder="Pilih Nama"
    items={[
        {label: 'Valentino Rossi', value: '1'},
        {label: 'Alex', value: '2'},
        {label: 'Andre', value: '3'},
        {label: 'John Terry', value: '4'},
        {label: 'Frank Lampard', value: '5'},
        {label: 'Beckham', value: '6'},
        {label: 'Bambang Pamungkas', value: '7'},
        {label: 'Jajang Mulyana', value: '8'},
        {label: 'Alucard', value: '9'},
        {label: 'Dragon Malfoy', value: '10'},
        {label: 'Harry Potter', value: '11'},
        {label: 'Syamsir Alam', value: '12'},
        {label: 'Markus Horison', value: '13'},
    ]}

    defaultValue={nama}
    containerStyle={{height: 40,marginLeft:10,marginRight:10}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    searchable={true}
searchablePlaceholder=""
searchablePlaceholderTextColor="gray"
seachableStyle={{}}
searchableError={() => <Text>Not Found</Text>}
    onChangeItem={item => setNama(item.value)}
/>
        </View>
        <View>
          <Text style={{fontWeight: 'bold', marginLeft: 10, fontSize: 16,marginTop:10}}>
            Nominal
          </Text>
          <Input value={nominal} onChangeText={value => setNominal(value)} placeholder={"Masukkan Nominal Buwuhan"} />
        </View>
        <View style={{marginTop:15,justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity style={Styles.button_standard} onPress={create_alert}>
            <Text style={styles.text_button}>Simpan</Text>
          </TouchableOpacity>
        </View>
      
    </View>
     );
};

export default FormTransaksi;
