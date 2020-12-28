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
const ListTamu = () => {
  const navigation = useNavigation();
const items = [
    {
      id: 1,
      name: 'Siswanto',
      status: 0,
      date: '',
    },
    {
      id: 2,
      name: 'Alex',
      status: 1,
      date: '19 Juni 2019, 19.30',
    },
    {
      id: 3,
      name: 'Andre',
      status: 2,
      date: '',
    },
  ];

  const onClickAddTamu = () => {
    // Called after te successful scanning of QRCode/Barcode
    navigation.navigate("FormTamu");
  };
  function Item({name,status,date}) {
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
                          status==0 ? "Belum Datang"
                          :
                          status==1 ? "Sudah Datang"
                          :
                          status==2 ? "Tidak Datang"
                          
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
            name={'ios-people'}
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
              name={'ios-time'}
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
            {
              status==0? "-"
              :
              status==1 ? date
              :
              "-"
            }
          </Text>
        </View>
      </View>
    );
  }
  return (
      <View style={styles.container_main_absolute}>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#FF0066CC" translucent={true} />
      <View style={{ backgroundColor: '#FF0066CC', height: 60,justifyContent:'center',alignItems:'center' }}>
            
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold',marginTop:20 }}>Daftar Tamu</Text>
                    
          </View>
      <View style={{marginTop:10}}>
        <FlatList
        data={items}
        // onRefresh={this.handleRefreshJobList}
        // onEndReached={this.handleLoadMoreJobList}
        // onEndThreshold={0.75}
        // refreshing={this.state.isRefreshingJobList}
        renderItem={({item}) => <Item name={item.name} status={item.status} date={item.date} />}
        // ListFooterComponent={this.renderFooter}
        keyExtractor={item => item.id.toString()}
      />
      </View>
      <TouchableOpacity onPress={onClickAddTamu} style={{ position: 'absolute',
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

export default ListTamu;
