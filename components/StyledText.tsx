import { Text, TextProps } from './Themed';
import {useFonts} from "expo-font";

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}

export function SFProDisplayRegular(props: TextProps) {
  const [fontsLoaded] = useFonts({
    'SF-Pro-Display-Regular': require('../assets/fonts/SF-Pro-Display-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return <Text {...props} style={[props.style, { fontFamily: 'SF-Pro-Display-Regular'}]} />;
}

export function SFProDisplaySemibold(props: TextProps) {
  const [fontsLoaded] = useFonts({
    'SF-Pro-Display-Semibold': require('../assets/fonts/SF-Pro-Display-Semibold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return <Text {...props} style={[props.style, { fontFamily: 'SF-Pro-Display-Semibold'}]} />;
}

export function SFProDisplayBold(props: TextProps) {
  const [fontsLoaded] = useFonts({
    'SF-Pro-Display-Bold': require('../assets/fonts/SF-Pro-Display-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return <Text {...props} style={[props.style, { fontFamily: 'SF-Pro-Display-Bold'}]} />;
}

export function SFProDisplayMedium(props: TextProps) {
  const [fontsLoaded] = useFonts({
    'SF-Pro-Display-Medium': require('../assets/fonts/SF-Pro-Display-Medium.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return <Text {...props} style={[props.style, { fontFamily: 'SF-Pro-Display-Medium'}]} />;
}

export function SFProDisplayLight(props: TextProps) {
  const [fontsLoaded] = useFonts({
    'SF-Pro-Display-Light': require('../assets/fonts/SF-Pro-Display-Light.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return <Text {...props} style={[props.style, { fontFamily: 'SF-Pro-Display-Light'}]} />;
}

export function InterSemibold(props: TextProps) {
  const [fontsLoaded] = useFonts({
    'Inter-Semibold': require('../assets/fonts/Inter-SemiBold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return <Text {...props} style={[props.style, { fontFamily: 'Inter-Semibold'}]} />;
}

export function InterLight(props: TextProps) {
  const [fontsLoaded] = useFonts({
    'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return <Text {...props} style={[props.style, { fontFamily: 'Inter-Light'}]} />;
}