import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes/Routes';
import {AuthProvider} from './contexts/auth';

import MainNavigation from './routes/MainNavigation';
export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#4D2C91'} />
      <NavigationContainer>
        <AuthProvider>
          <MainNavigation />
        </AuthProvider>
      </NavigationContainer>
    </>
  );
}
