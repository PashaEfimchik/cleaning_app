import React, {useEffect, useState} from "react";
import {Alert, Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import ProfileHeaderComponent from "../../header/ProfileHeaderComponent";
import {SFProDisplayBold, SFProDisplayLight} from "../../StyledText";
import SignButtonComponent from "../../buttons/SignButtonComponent";
import Svg, {Path} from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ProfileSignInConfirmationProps {
    navigation: any;
}

export default function ProfileSignInConfirmationScreen (props: ProfileSignInConfirmationProps) {
    const [typeOfLogin, setTypeOfLogin] = useState('' as string);

    const height = Dimensions.get('window').height;

    useEffect(() => {
        AsyncStorage.getItem('loginType').then((value) => {
            if (value !== null) {
                setTypeOfLogin(value);
            }
        })
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.profileSignInConfirmation__container_title_wrap}>
                <ProfileHeaderComponent
                    title="Log in"
                    handleNavigateTo={() => {
                        props.navigation.removeListener
                        props.navigation.goBack();
                    }}
                />
            </View>

            <ScrollView>
                <View style={[
                    styles.profileSignInConfirmation__container_content,
                    {
                        marginTop: height > 750 ? 200 : 150,
                    }
                ]}>
                    <View style={styles.profileSignInConfirmation__container_content_login_status_wrap}>
                        <Svg
                            width={30}
                            height={31}
                            viewBox="0 0 30 31"
                            fill="none"
                        >
                            <Path
                                d="M5 16.75L11.25 23L25 9.25"
                                stroke="#268664"
                            />
                        </Svg>
                        <SFProDisplayBold
                            style={styles.profileSignInConfirmation__container_content_login_status_text}>
                            Log in
                        </SFProDisplayBold>
                    </View>
                    <View style={styles.profileSignInConfirmation__container_content_login_text_wrap}>
                        <SFProDisplayLight style={styles.profileSignInConfirmation__container_content_login_text}>
                            You are logged in with {typeOfLogin}
                        </SFProDisplayLight>
                    </View>
                </View>
            </ScrollView>

            <View style={[
                styles.profileSignInConfirmation__container_content_button_wrap,
                {
                    marginTop: height > 750 ? 0 : height - 115,
                }
            ]}>
                <SignButtonComponent
                    backgroundButtonColor={"#268664"}
                    textButtonColor={"#fff"}
                    textButtonContent={"Ok"}
                    inputValue={"Ok"}
                    handleNavigateTo={() => {
                        Alert.alert("Log in - OK");
                        //props.navigation.navigate("");
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        backgroundColor: "#fff"
    },

    profileSignInConfirmation__container_title_wrap: {

    },
    profileSignInConfirmation__container_content: {
        flexDirection: "column",
        alignItems: "center",
    },
    profileSignInConfirmation__container_content_login_status_wrap: {
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
    },
    profileSignInConfirmation__container_content_login_status_text: {
        color: "#3A3A3A",
        fontSize: 34,
        fontWeight: "600",
        letterSpacing: 0.68,
    },
    profileSignInConfirmation__container_content_login_text_wrap: {
        marginTop: 50,
        alignItems: "center",
    },
    profileSignInConfirmation__container_content_login_text: {
        color: "#3A3A3A",
        fontSize: 24,
        fontWeight: "300",
        letterSpacing: 1.2,
    },
    profileSignInConfirmation__container_content_button_wrap: {
        flex: 1,
        position: "absolute",
        width: "100%",
    }
});