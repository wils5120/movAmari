/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { getPopular } from './src/services/api';
import RouterMain from './src/routes/router';
import SesionScreen from './src/screens/Sesion/Sesion';


function App(): JSX.Element {
  return (
      <RouterMain />
  );
}

export default App;
