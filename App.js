import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import MainStackNavigator from './app/configs/navigations/MainStackNavigator';
import {transition_config} from './app/configs/transition_config';
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
        <Stack.Screen
              name="MainStackNavigator"
              options={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                transitionSpec: {
                  open: transition_config,
                  close: transition_config,
                },
              }}
              component={MainStackNavigator}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;