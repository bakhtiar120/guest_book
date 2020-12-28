// Barcode and QR Code Scanner using Camera in React Native
// https://aboutreact.com/react-native-scan-qr-code/

// import React in our code
import React, {useState} from 'react';
//import database firebase
import {Button, Text, TextInput,FlatList, View,StatusBar,TouchableOpacity} from 'react-native';
import moment from 'moment';
import styles from '../../assets/styles/Styles';
import Colors from '../../assets/styles/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { Badge } from 'react-native-elements';
// import firebase from "../../../firebaseConfig";
import {useNavigation} from '@react-navigation/native';
const ListTransaksi = () => {
  const navigation = useNavigation();
const items = [
    {
      id: 1,
      name: 'Siswanto',
      status: 0,
      alamat: 'Jl Semangka',
      jumlah:'Rp 100.000'
    },
    {
      id: 2,
      name: 'Alex',
      status: 1,
      alamat: 'Ds Canggu',
      jumlah:'Rp 800.000'
    },
    {
      id: 3,
      name: 'Andre',
      status: 1,
      alamat: 'Jl Anggrek',
      jumlah:'Rp 300.000'
    },
  ];

  const onClickAddTransaksi = () => {
    // Called after te successful scanning of QRCode/Barcode
    navigation.navigate("FormTransaksi");
  };
  function Item({name,status,alamat,jumlah}) {
    return (
      <View
        style={{
          backgroundColor: "#FF0066CC",
          borderWidth: 0.6,
          borderRadius: 5,
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
        }}>
          <Badge badgeStyle={{ backgroundColor:Colors.chart_red, alignSelf: 'flex-start', marginLeft: 10, marginTop: 10 }}
                        value={<Text style={[Styles.textFontFamily, { color: Colors.white,marginRight:10,marginLeft:10, fontSize: responsiveFontSize(1.5) }]}>
                        { 
                          status==0 ? "Belum Buwuh"
                          :
                          status==1 ? "Sudah Buwuh"
                          :
                          ""
                        }
                    </Text>}>
                        </Badge>
        {/* <Text style={{fontWeight: 'bold', marginLeft: 10, color: 'white'}}>
          {date}
        </Text> */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 5,
          }}>
          <Icon
            name={'ios-person'}
            style={{marginLeft: 10}}
            size={20}
            color={Colors.white}
          />
          <Text
            style={{
              marginTop: 0,
              marginLeft: 10,
              fontSize: 12,
              fontWeight: 'bold',
              color: Colors.white,
            }}>
            {name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            marginBottom: 10,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 5,
          }}>
            <Icon
              name={'ios-home'}
              style={{marginLeft: 10}}
              size={20}
              color={Colors.white}
            />
          <Text
            style={{
              marginTop: 0,
              marginLeft: 10,
              fontSize: 12,
              fontWeight: 'bold',
              color: Colors.white,
            }}>
            {alamat}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            marginBottom: 10,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 5,
          }}>
            <Icon
              name={'ios-mail-open'}
              style={{marginLeft: 10}}
              size={20}
              color={Colors.white}
            />
          <Text
            style={{
              marginTop: 0,
              marginLeft: 10,
              fontSize: 12,
              fontWeight: 'bold',
              color: Colors.white,
            }}>
            {status==1 ?
            jumlah
        :
        "-"}
          </Text>
        </View>
      </View>
    );
  }
  return (
      <View style={styles.container_main_absolute}>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#FF0066CC" translucent={true} />
      <View style={{ backgroundColor: '#FF0066CC', height: 60,justifyContent:'center',alignItems:'center' }}>
            
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold',marginTop:20 }}>Daftar Yang Sudah Buwuh</Text>
                    
          </View>
      <View style={{marginTop:10}}>
        <FlatList
        data={items}
        // onRefresh={this.handleRefreshJobList}
        // onEndReached={this.handleLoadMoreJobList}
        // onEndThreshold={0.75}
        // refreshing={this.state.isRefreshingJobList}
        renderItem={({item}) => <Item name={item.name} status={item.status} alamat={item.alamat} jumlah={item.jumlah} />}
        // ListFooterComponent={this.renderFooter}
        keyExtractor={item => item.id.toString()}
      />
      </View>
      <TouchableOpacity onPress={onClickAddTransaksi} style={{ position: 'absolute',
    bottom: 10,
    right: 10,}}>
    <View
      style={{
        backgroundColor: 'red',
        width: 50,
        height: 50,
        borderRadius: 45,
        justifyContent:'center',
        alignItems:'center'
      }}
    >
      <Icon
            name={'ios-add'}
            size={40}
            color={Colors.white}
          />
      </View>
  </TouchableOpacity>
      
    </View>
     );
};

export default ListTransaksi;
