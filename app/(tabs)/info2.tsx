import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { LogBox } from 'react-native';
import InfoScreen from "../../components/infoTab/InfoScreen";
import ServicesScreen from "../../components/infoTab/infoScreens/ServicesScreen";
import FAQScreen from "../../components/infoTab/infoScreens/FAQScreen";
import CancellationPolicyScreen from "../../components/infoTab/infoScreens/CancellationPolicyScreen";
import ContactUsScreen from "../../components/infoTab/infoScreens/ContactUsScreen";

LogBox.ignoreLogs(['Sending `onAnimatedValueUpdate` with no listeners registered.']);

const InfoStack = createStackNavigator();

export default function TabInfoScreen() {
  return (
    <InfoStack.Navigator
        initialRouteName="InfoScreen"
        screenOptions={{
            headerShown: false,
        }}
    >
        <InfoStack.Screen name="InfoScreen" component={InfoScreen} />
        <InfoStack.Screen name="InfoServices" component={ServicesScreen} />
        <InfoStack.Screen name="InfoCancellationPolicy" component={CancellationPolicyScreen} />
        <InfoStack.Screen name="InfoFAQ" component={FAQScreen} />
        <InfoStack.Screen name="InfoContactUs" component={ContactUsScreen} />

    </InfoStack.Navigator>
  );
}

