import {useState} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { LogBox } from 'react-native';
import ProfileScreenAuth from "../components/profileTab/ProfileScreenAuth";
import ProfileContactInfoScreen from "../components/profileTab/authScreens/ProfileContactInfoScreen";
import ProfileAddressScreen from "../components/profileTab/authScreens/ProfileAddressScreen";
import ProfileNewAddressScreen from "../components/profileTab/authScreens/ProfileNewAddressScreen";
import ProfileOrdersScreen from "../components/profileTab/authScreens/ProfileOrdersScreen";
import ProfileOrderItemComponent from "../components/profileTab/authScreens/components/ProfileOrderItemComponent";
import ProfileSettingsScreen from "../components/profileTab/authScreens/ProfileSettingsScreen";
import ProfileChangePasswordScreen from "../components/profileTab/authScreens/ProfileChangePasswordScreen";
import ProfileScreenNotAuth from "../components/profileTab/ProfileScreenNotAuth";
import ProfileSignUpScreen from "../components/profileTab/notAuthScreens/ProfileSignUpScreen";
import ProfileSignUpConfirmationScreen from "../components/profileTab/notAuthScreens/ProfileSignUpConfirmationScreen";
import ProfileSignInScreen from "../components/profileTab/notAuthScreens/ProfileSignInScreen";
import ProfileSignInConfirmationScreen from "../components/profileTab/notAuthScreens/ProfileSignInConfirmationScreen";

LogBox.ignoreLogs(['Sending `onAnimatedValueUpdate` with no listeners registered.']);

const ProfileStack = createStackNavigator();

export default function TabProfileScreen() {
    const [isUserAuth, setIsUserAuth] = useState(false as boolean);

    return (
        <ProfileStack.Navigator
            initialRouteName={isUserAuth ? "ProfileScreenAuth" : "ProfileScreenNotAuth"}
            screenOptions={{
                headerShown: false,
            }}
        >
            {
                isUserAuth ?
                    (
                        <>
                            <ProfileStack.Screen name="ProfileScreenAuth" component={ProfileScreenAuth} />
                            <ProfileStack.Screen name="ProfileContactInfo" component={ProfileContactInfoScreen} />
                            <ProfileStack.Screen name="ProfileAddress" component={ProfileAddressScreen} />
                            <ProfileStack.Screen name="ProfileNewAddress" component={ProfileNewAddressScreen} />
                            <ProfileStack.Screen name="ProfileOrders" component={ProfileOrdersScreen} />
                            <ProfileStack.Screen name="ProfileSettings" component={ProfileSettingsScreen} />
                            <ProfileStack.Screen name="ProfileChangePassword" component={ProfileChangePasswordScreen} />
                            <ProfileStack.Screen name="ProfileOrderItem" component={ProfileOrderItemComponent} />
                        </>
                    ) : (
                        <>
                            <ProfileStack.Screen name="ProfileScreenNotAuth" component={ProfileScreenNotAuth} />
                            <ProfileStack.Screen name="ProfileSignUp" component={ProfileSignUpScreen} />
                            <ProfileStack.Screen name="ProfileSignUpConfirmation" component={ProfileSignUpConfirmationScreen} />
                            <ProfileStack.Screen name="ProfileSignIn" component={ProfileSignInScreen} />
                            <ProfileStack.Screen name="ProfileSignInConfirmation" component={ProfileSignInConfirmationScreen} />

                        </>
                    )
            }
        </ProfileStack.Navigator>
    );
}