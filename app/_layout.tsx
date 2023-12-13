import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import React, { useEffect } from 'react';
import {Dimensions, useColorScheme} from 'react-native';
import {Provider} from "react-redux";
import store from "../store/store";
import {createStackNavigator} from "@react-navigation/stack";
import HomeTabs from './tabs_layout';

export {
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'HomeTabs',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  if (!loaded) {
    return null;
  }
  return (
      <Provider store={store}>
        <RootLayoutNav />
      </Provider>
  );
}

const RootStack = createStackNavigator();



function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={/*colorScheme === 'dark' ? DarkTheme : */DefaultTheme}>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen name={"tabs_layout"} component={HomeTabs}/>
            {/*<RootStack.Screen name="(tabs)" options={{ headerShown: false }} />*/}
        </RootStack.Navigator>
    </ThemeProvider>
  );
}
