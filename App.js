import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'; 
import { navigationRef } from './RootNavigation';

import HomePage from './Home';
import Header from './Header';
import Footer from './Footer';

const stack = createStackNavigator();

export default function App() {
  let[fontsLoaded] = useFonts({
    'OpenSans': require('./assets/fonts/OpenSAns-Regular.ttf')
  });

  if(!fontsLoaded) {
    return <AppLoading/>;
  }
  
  return (
    <NavigationContainer
      style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}
      ref={navigationRef}
    >
      <stack.Navigator initialRouteName='HomePage' headerMode="screen">
        <stack.Screen name='HomePage' component={HomePage} options={{header: () => <Header headerDisplay="GloboMantics" /> }}/>
      </stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}

