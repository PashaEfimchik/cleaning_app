import React, {useEffect, useState} from "react";
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import ProfileHeaderComponent from "../../header/ProfileHeaderComponent";
import {SFProDisplayBold, SFProDisplayLight, SFProDisplaySemibold} from "../../StyledText";
import SignButtonComponent from "../../buttons/SignButtonComponent";
import Svg, {Path} from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { openInbox } from 'react-native-email-link'
import {Dropdown} from "react-native-element-dropdown";

const hearAboutUsOptions: any[] = [
    {id: 0, label: "Google", value: "Google"},
    {id: 1, label: "Facebook", value: "Facebook"},
    {id: 2, label: "Instagram", value: "Instagram"},
    {id: 3, label: "Friend", value: "Friend"},
    {id: 4, label: "Neighbour", value: "Neighbour"},
];

interface ProfileSignUpConfirmationProps {
    navigation: any;
}

export default function ProfileSignUpConfirmationScreen (props: ProfileSignUpConfirmationProps) {
    const [email, setEmail] = useState('' as string);
    const [isOpenDropdown, setIsOpenDropdown] = useState(false as boolean);
    const [selectedHearAboutUs, setSelectedHearAboutUs] = useState('' as any);
    const height = Dimensions.get('window').height;

    useEffect(() => {
        AsyncStorage.getItem('email').then((value) => {
            if (value !== null) {
                setEmail(value);
            }
        })
    }, []);


    return (
        <View style={styles.container}>
            <View style={styles.profileSignUpConfirmation__container_title_wrap}>
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
                    styles.profileSignUpConfirmation__container_content,
                    {
                        marginTop: height > 750 ? 80 : 40,
                    }
                ]}>
                    <View style={styles.profileSignUpConfirmation__container_content_login_status_wrap}>
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
                            style={styles.profileSignUpConfirmation__container_content_login_status_text}>
                            Sign up
                        </SFProDisplayBold>
                    </View>
                    <View style={styles.profileSignUpConfirmation__container_content_login_text_wrap}>
                        <SFProDisplayLight style={styles.profileSignUpConfirmation__container_content_login_text}>
                            We have sent a confirmation to your email.
                        </SFProDisplayLight>
                        <SFProDisplaySemibold style={styles.profileSignUpConfirmation__container_content_email_text}>
                            {email}
                        </SFProDisplaySemibold>
                    </View>
                </View>

                <View style={[styles.profileSignUpConfirmation__container_content_hear_about_us_wrap,
                    {
                        marginTop: height > 750 ? 170 : 140,
                    }
                ]}>
                    <View style={styles.profileSignUpConfirmation__container_content_select_wrap_label}>
                        <SFProDisplayLight style={styles.profileSignUpConfirmation__container_content_select_wrap_label_text}>
                            How did you hear about us?
                        </SFProDisplayLight>
                    </View>
                    <View style={styles.profileSignUpConfirmation__container_content_hear_about_us}>
                        <Dropdown
                            onFocus={() => setIsOpenDropdown(true)}
                            onBlur={() => setIsOpenDropdown(false)}
                            style={styles.dropdown__container_content}
                            data={hearAboutUsOptions.reverse()}
                            containerStyle={{
                                borderRadius: 4,
                                top: -8,
                            }}
                            dropdownPosition={"top"}
                            itemTextStyle={styles.dropdown__container_content_item_text}
                            placeholder={"Select"}
                            placeholderStyle={styles.dropdown__container_content_placeholder_text}
                            selectedTextStyle={styles.dropdown__container_content_item_selected_text}
                            labelField="label"
                            valueField="value"
                            value={selectedHearAboutUs}
                            onChange={(item) => setSelectedHearAboutUs(item)}
                        />
                    </View>

                </View>
            </ScrollView>

            <View style={[
                styles.profileSignUpConfirmation__container_content_button_wrap,
                {
                    marginTop: height > 750 ? 0 : height - 115,
                }
            ]}>
                <SignButtonComponent
                    backgroundButtonColor={"#268664"}
                    textButtonColor={"#fff"}
                    textButtonContent={"Go to Email"}
                    inputValue={"Go to Email"}
                    handleNavigateTo={() => {
                        openInbox().then(r => console.log(r));
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

    profileSignUpConfirmation__container_title_wrap: {

    },
    profileSignUpConfirmation__container_content: {
        flexDirection: "column",
        alignItems: "center",
        paddingLeft: 16,
        paddingRight: 16
    },
    profileSignUpConfirmation__container_content_login_status_wrap: {
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
    },
    profileSignUpConfirmation__container_content_login_status_text: {
        color: "#3A3A3A",
        fontSize: 34,
        fontWeight: "600",
        letterSpacing: 0.68,
    },
    profileSignUpConfirmation__container_content_login_text_wrap: {
        marginTop: 50,
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
    },
    profileSignUpConfirmation__container_content_login_text: {
        color: "#3A3A3A",
        fontSize: 24,
        fontWeight: "300",
        letterSpacing: 1.2,
        textAlign: "center",
    },
    profileSignUpConfirmation__container_content_email_text: {
        marginTop: 20,
        color: "#3A3A3A",
        fontSize: 18,
        fontWeight: "600",
        letterSpacing: 0.9,
        textAlign: "center",
    },
    profileSignUpConfirmation__container_content_hear_about_us_wrap: {
        alignItems: "flex-start",
        paddingLeft: 16,
        paddingRight: 16,
    },
    profileSignUpConfirmation__container_content_hear_about_us: {
        width: "100%",
        marginTop: 5,
    },
    profileSignUpConfirmation__container_content_select_wrap_label: {

    },
    profileSignUpConfirmation__container_content_select_wrap_label_text: {
        color: "#3A3A3A",
        fontSize: 16,
        fontWeight: "300",
        letterSpacing: 0.32,
    },
    dropdown__container_content: {
        height: 60,
        // backgroundColor: "#f3f",
        borderRadius: 4,
        borderStyle: "solid",
        borderColor: "#E8E7E7",
        borderWidth: 1,
        paddingTop: 18,
        paddingRight: 16,
        paddingBottom: 18,
        paddingLeft: 16,
    },
    dropdown__container_content_item_text: {
        color: "#3A3A3A",
        fontSize: 20,
        fontWeight: "400",
        fontStyle: "normal",
        height: 20,
    },
    dropdown__container_content_placeholder_text: {
        color: "#92A1A9",
        fontSize: 20,
        fontWeight: "400",
        fontStyle: "normal",
    },
    dropdown__container_content_item_selected_text: {
        color: "#3A3A3A",
        fontSize: 20,
        fontWeight: "400",
        fontStyle: "normal",
    },
    profileSignUpConfirmation__container_content_button_wrap: {
        flex: 1,
        position: "absolute",
        width: "100%",
    }
});