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
import NewsDetail from './NewsDetail';
import About from './About';
import Quote from './Quote';
import Catalog from './Catalog';
import CatalogDetail from './CatalogDetail';

const stack = createStackNavigator();

export default function App() {
  let[fontsLoaded] = useFonts({
    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf')
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
        <stack.Screen name='NewsDetail' component={NewsDetail} options={{header: () => <Header headerDisplay="News" /> }}/>
        <stack.Screen name='About' component={About} options={{header: () => <Header headerDisplay="About" /> }}/>
        <stack.Screen name='Quote' component={Quote} options={{header: () => <Header headerDisplay="Get a Quote" /> }}/>
        <stack.Screen name='Catalog' component={Catalog} options={{header: () => <Header headerDisplay="Catalog" /> }}/>
        <stack.Screen name='CatalogDetail' component={CatalogDetail} options={{header: () => <Header headerDisplay="CatalogDetail" /> }}/>
      </stack.Navigator>

      <Footer />
    </NavigationContainer>
  );
}

