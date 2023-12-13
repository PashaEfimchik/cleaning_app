import React, {useEffect} from "react";
import {Alert, Dimensions, ScrollView, StyleSheet} from 'react-native';
import {View} from "../Themed";
import {SFProDisplayLight, SFProDisplayRegular} from "../StyledText";
import BookButtonComponent from "../bookTab/bookComponents/BookButtonComponent";

interface ProfileScreenNotAuthProps {
    navigation: any;
}

export default function ProfileScreenNotAuth (props: ProfileScreenNotAuthProps) {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    return (
        <View style={styles.container}>
            <View style={styles.profileNotAuth__title_wrap}>
                <SFProDisplayRegular style={styles.profileNotAuth__title}>
                    Profile
                </SFProDisplayRegular>
            </View>
            <View style={[
                styles.profileNotAuth__content_wrap,
                {
                    height: height,
                }
            ]}>
                <ScrollView>
                    <View style={styles.profileNotAuth__content_text_wrap}>
                        <SFProDisplayLight style={styles.profileNotAuth__content_text}>
                            Information will be available after authorization
                        </SFProDisplayLight>
                    </View>
                </ScrollView>

                <View style={[
                    styles.profileNotAuth__content_button_wrap,
                    {
                        marginTop: height > 750 ? 0 : height - 340,
                    }
                ]}>
                    <View style={styles.profileNotAuth__container_content_button_login_wrap}>
                        <BookButtonComponent
                            backgroundButtonColor={"#268664"}
                            textButtonColor={"#fff"}
                            textButtonContent={"Log in"}
                            inputValue={"Log in"}
                            handleNavigateTo={() => props.navigation.navigate("ProfileSignIn")}
                        />
                    </View>

                    <View style={styles.profileNotAuth__container_content_button_signup_wrap}>
                        <BookButtonComponent
                            backgroundButtonColor={"#268664"}
                            textButtonColor={"#fff"}
                            textButtonContent={"Sign up"}
                            inputValue={"Sign up"}
                            handleNavigateTo={() => props.navigation.navigate("ProfileSignUp")}
                        />
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    profileNotAuth__title_wrap: {
        paddingTop: 60,
        height: 100,
        alignItems: 'center',
    },
    profileNotAuth__title: {
        fontSize: 20,
        color: "#3D3C42",
        fontWeight: "400",
        letterSpacing: 0.4,
    },
    profileNotAuth__content_wrap: {
        flex: 1,
        //backgroundColor: "#0d3496",
        //paddingLeft: 16,
        //paddingRight: 16,
        paddingBottom: 85,
        flexDirection: "column",
    },
    profileNotAuth__content_text_wrap: {
        //backgroundColor: "#960d0d",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 170,
        paddingLeft: 40,
        paddingRight: 40,
    },
    profileNotAuth__content_text: {
        color: "#92A1A9",
        fontSize: 18,
        fontWeight: "300",
        lineHeight: 24,
        letterSpacing: 0.9,
        textAlign: "center",
    },
    profileNotAuth__content_button_wrap: {
        flex: 1,
        position: "absolute",
        width: "100%",
    },
    profileNotAuth__container_content_button_login_wrap: {
        paddingBottom: 10,
    },
    profileNotAuth__container_content_button_signup_wrap: {

    },
});