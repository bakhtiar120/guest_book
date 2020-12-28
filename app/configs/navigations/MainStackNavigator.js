import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Home from '../../views/home/Home';
import ListTamu from '../../views/tamu/ListTamu';
import ScanQr from '../../views/scan_qr/ScanQr';
import FormTamu from '../../views/tamu/FormTamu';
import ListBuwuhan from '../../views/transaksi/ListTransaksi';
import FormTransaksi from '../../views/transaksi/FormTransaksi';
import {transition_config} from '../transition_config';
const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: transition_config,
            close: transition_config,
          },
        }}
        name="Home"
        component={Home}
      />

      <Stack.Screen
        options={{
          title:'Daftar Tamu',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: transition_config,
            close: transition_config,
          },
        }}
        
        name="ListTamu"
        component={ListTamu}
      />
      <Stack.Screen
        options={{
          title:'Daftar Transaksi',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: transition_config,
            close: transition_config,
          },
        }}
        
        name="ListBuwuhan"
        component={ListBuwuhan}
      />
      <Stack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: transition_config,
            close: transition_config,
          },
        }}
        name="ScanQr"
        component={ScanQr}
      />
      <Stack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: transition_config,
            close: transition_config,
          },
        }}
        name="FormTamu"
        component={FormTamu}
      />
      <Stack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: transition_config,
            close: transition_config,
          },
        }}
        name="FormTransaksi"
        component={FormTransaksi}
      />
      
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
