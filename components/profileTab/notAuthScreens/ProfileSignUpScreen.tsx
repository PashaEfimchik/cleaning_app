import React, {useEffect, useRef, useState} from "react";
import {Alert, Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import ProfileHeaderComponent from "../../header/ProfileHeaderComponent";
import {SFProDisplayLight} from "../../StyledText";
import PhoneInput from "react-native-phone-input";
import TextInputComponent from "../../inputs/TextInputComponent";
import PasswordInputComponent from "../../inputs/PasswordInputComponent";
import BookButtonComponent from "../../bookTab/bookComponents/BookButtonComponent";
import SignButtonComponent from "../../buttons/SignButtonComponent";
import {Shadow} from "react-native-shadow-2";
import AsyncStorage from "@react-native-async-storage/async-storage";


interface ProfileSignUpScreenProps {
    navigation: any;
}

export default function ProfileSignUpScreen (props: ProfileSignUpScreenProps) {
    const phoneRef = useRef(null as any);
    const [name, setName] = useState('' as string);
    const [surname, setSurname] = useState('' as string);
    const [phone, setPhone] = useState('' as string);
    const [email, setEmail] = useState('' as string);
    const [password, setPassword] = useState('' as string);
    const [confirmPassword, setConfirmPassword] = useState('' as string);

    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    const contentHeight = height > 750 ? height - 243 : height - 310;


    return (
        <View style={styles.container}>
            <View style={styles.profileSignUp__container_title_wrap}>
                <ProfileHeaderComponent
                    title="Sign up"
                    handleNavigateTo={() => {
                        props.navigation.removeListener
                        props.navigation.goBack();
                    }}
                />
            </View>

            <View style={{ height: height - 225 }}>
                <ScrollView>
                    <View style={[styles.profileSignUp__content_wrap,
                        {
                            //height: width <= 320 ? 400 : 500,
                        }
                    ]}>
                        <View style={[styles.profileSignUp__container_content_input_wrap,
                            {
                                height: height + 150,
                            }
                        ]}>
                            <View style={styles.profileChangePassword__container_content_input_current_wrap}>
                                <TextInputComponent
                                    label={"Name"}
                                    value={name}
                                    keyboardType={"default"}
                                    width={"100%"}
                                    handleValue={(newValue) => setName(newValue)}
                                />
                            </View>

                            <View style={styles.profileChangePassword__container_content_input_current_wrap}>
                                <TextInputComponent
                                    label={"Surname"}
                                    value={surname}
                                    keyboardType={"default"}
                                    width={"100%"}
                                    handleValue={(newValue) => setSurname(newValue)}
                                />
                            </View>

                            <View style={styles.profileSignUp__container_content_input_phone_wrap}>
                                <View style={styles.profileSignUp__container_content_input_label_wrap}>
                                    <SFProDisplayLight style={styles.profileSignUp__container_content_input_label_text}>
                                        Phone nr
                                    </SFProDisplayLight>
                                </View>
                                <View style={styles.profileSignUp__container_content_input}>
                                    <PhoneInput
                                        style={styles.profileSignUp__container_content_input_phone}
                                        textStyle={styles.profileSignUp__container_content_input_phone_text}
                                        ref={(ref: any) => {
                                            phoneRef.current = ref;
                                        }}
                                        onChangePhoneNumber={(text) => {
                                            setPhone(text);
                                        }}
                                        initialCountry={'by'}
                                        autoFormat={true}
                                        textProps={{placeholder: 'Phone nr'}}
                                    />
                                </View>
                            </View>

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

                            <View style={styles.profileChangePassword__container_content_input_current_wrap}>
                                <PasswordInputComponent
                                    label={"Confirm password"}
                                    value={confirmPassword}
                                    keyboardType={"default"}
                                    width={"100%"}
                                    handleValue={(newValue) => setConfirmPassword(newValue)}
                                />
                            </View>

                            <View style={styles.profileChangePassword__container_content_sign_integration_wrap}>
                                <View style={styles.profileChangePassword__container_content_sign_up_text_wrap}>
                                    <SFProDisplayLight style={styles.profileChangePassword__container_content_sign_up_text}>
                                        Or registration via
                                    </SFProDisplayLight>
                                </View>

                                <View style={styles.profileChangePassword__container_content_sign_up_icons_wrap}>
                                    <TouchableOpacity
                                        onPress={() => Alert.alert("Google")}
                                    >
                                        <Image
                                            style={styles.profileChangePassword__container_content_sign_up_google_icon}
                                            source={require('../../../assets/icons/google-icon.png')}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => Alert.alert("Apple")}
                                    >
                                        <Image
                                            style={styles.profileChangePassword__container_content_sign_up_apple_icon}
                                            source={require('../../../assets/icons/apple-icon.png')}
                                        />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.profileChangePassword__container_content_link_to_login_wrap}>
                                    <SFProDisplayLight style={styles.profileChangePassword__container_content_link_to_login_text}>
                                        I have an account. Go to {}
                                    </SFProDisplayLight>
                                    <TouchableOpacity
                                        onPress={() => props.navigation.navigate("ProfileSignIn")}
                                    >
                                        <SFProDisplayLight style={styles.profileChangePassword__container_content_link_to_login}>
                                            Log in
                                        </SFProDisplayLight>
                                    </TouchableOpacity>
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
                    backgroundButtonColor={name === '' || surname === '' || phone === '' || email === '' || password === '' || confirmPassword === '' ? "#256951cc" : "#268664"}
                    textButtonColor={name === '' || surname === '' || phone === '' || email === '' || password === '' || confirmPassword === '' ? "#00000033" : "#fff"}
                    textButtonContent={"Create an account"}
                    inputValue={name === '' || surname === '' || phone === '' || email === '' || password === '' || confirmPassword === '' ? '' : name}
                    handleNavigateTo={() => {
                        if (email) {
                            AsyncStorage.setItem('email', email).then();
                            props.navigation.navigate("ProfileSignUpConfirmation");
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
    profileSignUp__container_title_wrap: {

    },
    profileSignUp__content_wrap: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
    },
    profileSignUp__container_content_input_wrap: {

    },

    profileChangePassword__container_content_input_current_wrap: {
        marginTop: 10,
    },
    profileSignUp__container_content_input_phone_wrap: {

    },
    profileSignUp__container_content_input_label_wrap: {
        width: "100%",
    },
    profileSignUp__container_content_input_label_text: {
        fontSize: 16,
        lineHeight: 24,
        color: "#3A3A3A",
        fontWeight: "300",
        letterSpacing: 0.48,
    },
    profileSignUp__container_content_input: {

    },
    profileSignUp__container_content_input_phone: {
        marginTop: 5,
        height: 58,
        //paddingTop: 18,
        //paddingBottom: 18,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#E8E7E7",
        borderStyle: "solid",
    },
    profileSignUp__container_content_input_phone_text: {
//marginTop: -10,
        fontSize: 18,
        //lineHeight: 24,
        color: "#3A3A3A",
        fontWeight: "400",
        letterSpacing: 0.48,
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
        marginTop: 50,
        alignItems: "center",
    },
    profileChangePassword__container_content_sign_up_text_wrap: {

    },
    profileChangePassword__container_content_sign_up_text: {
        fontSize: 16,
        lineHeight: 16,
        color: "#3A3A3A",
        fontWeight: "300",
        letterSpacing: 0.8,
    },
    profileChangePassword__container_content_sign_up_icons_wrap: {
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    profileChangePassword__container_content_sign_up_google_icon: {
        width: 30,
        height: 30,
    },
    profileChangePassword__container_content_sign_up_apple_icon: {
        width: 30,
        height: 30,
    },
    profileChangePassword__container_content_link_to_login_wrap: {
        marginTop: 50,
        flexDirection: "row",
    },
    profileChangePassword__container_content_link_to_login_text: {
        fontSize: 16,
        lineHeight: 16,
        color: "#3A3A3A",
        fontWeight: "300",
        letterSpacing: 0.8,
    },
    profileChangePassword__container_content_link_to_login: {
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