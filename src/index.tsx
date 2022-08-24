// @ts-check

import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import MainScreen from './screens/main-screen';
import AboutScreen from './screens/about-screen';
import HeroScreen from './screens/hero-screen'
import Sidebar from './components/sidebar';

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={(props: JSX.IntrinsicAttributes & DrawerContentComponentProps) => <Sidebar {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        overlayColor: '#00000000'
      }}
    >
      <Drawer.Screen name="Main" component={MainScreen} />
      <Drawer.Screen name="Hero" component={HeroScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  )
};

export default App
