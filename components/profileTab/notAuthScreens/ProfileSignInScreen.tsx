import React, {useRef, useState} from "react";
import {Alert, Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import ProfileHeaderComponent from "../../header/ProfileHeaderComponent";
import {SFProDisplayLight} from "../../StyledText";
import TextInputComponent from "../../inputs/TextInputComponent";
import PasswordInputComponent from "../../inputs/PasswordInputComponent";
import SignButtonComponent from "../../buttons/SignButtonComponent";
import {Shadow} from "react-native-shadow-2";
import AsyncStorage from "@react-native-async-storage/async-storage";


interface ProfileSignInScreenProps {
    navigation: any;
}

export default function ProfileSignInScreen (props: ProfileSignInScreenProps) {
    const phoneRef = useRef(null as any);
    const [email, setEmail] = useState('' as string);
    const [password, setPassword] = useState('' as string);
    const [typeOfLogin, setTypeOfLogin] = useState('email' as string);

    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    const contentHeight = height > 750 ? height - 243 : height - 310;


    return (
        <View style={styles.container}>
            <View style={styles.profileSignIn__container_title_wrap}>
                <ProfileHeaderComponent
                    title="Log in"
                    handleNavigateTo={() => {
                        props.navigation.removeListener
                        props.navigation.goBack();
                    }}
                />
            </View>

            <View style={{ height: height - 225 }}>
                <ScrollView>
                    <View style={styles.profileSignIn__content_wrap}>
                        <View style={[styles.profileSignIn__container_content_input_wrap,
                            {
                                height: height - 150,
                                //backgroundColor: "#22f"
                            }
                        ]}>

                            <View style={styles.profileChangePassword__container_content_input_current_wrap}>
                                <TextInputComponent
                                    label={"Email address"}
                                    value={email}
                                    keyboardType={"email-address"}
                                    width={'100%'}
                                    handleValue={(newValue) => setEmail(newValue)}
                                />
                            </View>

                            <View style={styles.profileChangePassword__container_content_input_current_wrap}>
                                <PasswordInputComponent
                                    label={"Password"}
                                    value={password}
                                    keyboardType={"default"}
                                    width={"100%"}
                                    handleValue={(newValue) => setPassword(newValue)}
                                />
                            </View>

                            <View style={styles.profileChangePassword__container_content_label_after_password}>
                                <SFProDisplayLight style={styles.profileChangePassword__container_content_label_after_password_text}>
                                    The password must contain at least 6 characters. Use only Latin alphabet and numbers
                                </SFProDisplayLight>
                            </View>


                            <View style={[
                                styles.profileChangePassword__container_content_sign_integration_wrap,
                                {
                                    marginTop: height > 750 ? 235 : 100,
                                }
                            ]}>
                                <View style={styles.profileChangePassword__container_content_sign_In_text_wrap}>
                                    <SFProDisplayLight style={styles.profileChangePassword__container_content_sign_In_text}>
                                        Or registration via
                                    </SFProDisplayLight>
                                </View>

                                <View style={styles.profileChangePassword__container_content_sign_In_icons_wrap}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setTypeOfLogin("google");
                                            Alert.alert("Google");
                                        }}
                                    >
                                        <Image
                                            style={styles.profileChangePassword__container_content_sign_In_google_icon}
                                            source={require('../../../assets/icons/google-icon.png')}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setTypeOfLogin("apple");
                                            Alert.alert("Apple");
                                        }}                                    >
                                        <Image
                                            style={styles.profileChangePassword__container_content_sign_In_apple_icon}
                                            source={require('../../../assets/icons/apple-icon.png')}
                                        />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.profileChangePassword__container_content_link_to_signup_wrap}>
                                    <SFProDisplayLight style={styles.profileChangePassword__container_content_link_to_signup_text}>
                                        I have an account. Go to {}
                                    </SFProDisplayLight>
                                    <SFProDisplayLight style={styles.profileChangePassword__container_content_link_to_signup}>
                                        Sign up
                                    </SFProDisplayLight>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={[
                styles.profileContactInfo__container_content_button_wrap,
                {
                    marginTop: height > 750 ? 0 : height - 115,
                }
            ]}>
                <View style={{
                    width: "100%",
                    paddingLeft: 16,
                    paddingRight: 16,
                }}>
                    <Shadow
                        startColor={"#efefef"}
                        endColor={"rgba(255,255,255,0)"}
                        distance={60}
                        offset={[0, -10]}
                        paintInside={false}
                        style={{
                            width: "100%",
                        }}
                        sides={{
                            start: true,
                            end: false,
                            top: true,
                            bottom: false,
                        }}
                        corners={{
                            topStart: true,
                            topEnd: true,
                            bottomStart: false,
                            bottomEnd: false,
                        }}
                    >
                    </Shadow>
                </View>
                <SignButtonComponent
                    backgroundButtonColor={email === '' || password === '' ? "#256951cc" : "#268664"}
                    textButtonColor={email === '' || password === '' ? "#00000033" : "#fff"}
                    textButtonContent={"Log in"}
                    inputValue={email === '' || password === '' ? '' : email}
                    handleNavigateTo={() => {
                        if (email) {
                            AsyncStorage.setItem('email', email).then();
                            AsyncStorage.setItem('loginType', typeOfLogin === 'email' ? 'Email' : typeOfLogin === 'google' ? 'Google' : 'Apple').then();
                            props.navigation.navigate("ProfileSignInConfirmation");
                        }
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#fff"
    },
    profileSignIn__container_title_wrap: {

    },
    profileSignIn__content_wrap: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
    },
    profileSignIn__container_content_input_wrap: {

    },

    profileChangePassword__container_content_input_current_wrap: {
        marginTop: 10,
    },

    profileSignIn__container_content_input: {

    },
    profileChangePassword__container_content_label_after_password: {
        marginTop: 5,
    },
    profileChangePassword__container_content_label_after_password_text: {
        fontSize: 14,
        lineHeight: 20,
        color: "#3A3A3A",
        fontWeight: "300",
        letterSpacing: 0.42,
    },
    profileChangePassword__container_content_sign_integration_wrap: {
        alignItems: "center",
    },
    profileChangePassword__container_content_sign_In_text_wrap: {

    },
    profileChangePassword__container_content_sign_In_text: {
        fontSize: 16,
        lineHeight: 16,
        color: "#3A3A3A",
        fontWeight: "300",
        letterSpacing: 0.8,
    },
    profileChangePassword__container_content_sign_In_icons_wrap: {
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    profileChangePassword__container_content_sign_In_google_icon: {
        width: 30,
        height: 30,
    },
    profileChangePassword__container_content_sign_In_apple_icon: {
        width: 30,
        height: 30,
    },
    profileChangePassword__container_content_link_to_signup_wrap: {
        marginTop: 50,
        flexDirection: "row",
    },
    profileChangePassword__container_content_link_to_signup_text: {
        fontSize: 16,
        lineHeight: 16,
        color: "#3A3A3A",
        fontWeight: "300",
        letterSpacing: 0.8,
    },
    profileChangePassword__container_content_link_to_signup: {
        fontSize: 16,
        lineHeight: 16,
        color: "#92A1A9",
        fontWeight: "300",
        letterSpacing: 0.8,
    },

    profileContactInfo__container_content_button_wrap: {
        flex: 1,
        position: "absolute",
        width: "100%",
    },
});