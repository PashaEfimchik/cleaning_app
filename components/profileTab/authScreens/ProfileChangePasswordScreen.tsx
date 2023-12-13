import React, {useState} from "react";
import {Alert, Dimensions, ScrollView, StyleSheet, TextInput} from 'react-native';
import {View} from "../../Themed";
import ProfileHeaderComponent from "../../header/ProfileHeaderComponent";
import BookTextInputComponent from "../../inputs/BookTextInputComponent";
import BookButtonComponent from "../../bookTab/bookComponents/BookButtonComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ProfileChangePasswordProps {
    navigation: any;
}

export default function ProfileChangePasswordScreen (props: ProfileChangePasswordProps) {
    const [currentPassword, setCurrentPassword] = useState('' as string);
    const [newPassword, setNewPassword] = useState('' as string);
    const [confirmPassword, setConfirmPassword] = useState('' as string);
    const [isValidPassword, setIsValidPassword] = useState(false as boolean);

    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    const contentHeight = height > 750 ? height - 243 : height - 310;


    return (
        <View style={styles.container}>
            <View style={styles.profile__title_wrap}>
                <ProfileHeaderComponent
                    title="Change password"
                    handleNavigateTo={() => {
                        props.navigation.removeListener
                        props.navigation.goBack();
                    }}
                />
            </View>

            <View style={{ height: contentHeight}}>
                <ScrollView>
                    <View style={[styles.profileChangePassword__content_wrap,
                        {
                            //height: width <= 320 ? 400 : 500,
                        }
                    ]}>
                        <View style={[styles.profileChangePassword__container_content_input_wrap,
                            {
                                height: height - 150,
                            }
                        ]}>
                            <View style={styles.profileChangePassword__container_content_input_current_wrap}>
                                <BookTextInputComponent
                                    label={"Current password"}
                                    value={currentPassword}
                                    keyboardType={"default"}
                                    secureTextEntry={true}
                                    width={"100%"}
                                    handleValue={(newValue) => setCurrentPassword(newValue)}
                                />
                            </View>
                            <View style={styles.profileChangePassword__container_content_input_password_wrap}>
                                <BookTextInputComponent
                                    label={"Password"}
                                    value={newPassword}
                                    keyboardType={"default"}
                                    secureTextEntry={true}
                                    width={"100%"}
                                    handleValue={(newValue) => setNewPassword(newValue)}
                                />
                            </View>
                            <View style={styles.profileChangePassword__container_content_input_confirm_wrap}>
                                <BookTextInputComponent
                                    label={"Confirm password"}
                                    value={confirmPassword}
                                    keyboardType={"default"}
                                    secureTextEntry={true}
                                    width={"100%"}
                                    handleValue={(newValue) => setConfirmPassword(newValue)}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>

            <View style={[
                styles.profileChangePassword__container_content_button_wrap,
                {
                    marginTop: height > 750 ? 0 : height - 125,
                }
            ]}>
                <BookButtonComponent
                    backgroundButtonColor={newPassword === '' || confirmPassword === '' || newPassword !== confirmPassword ? "#256951cc" : "#268664"}
                    textButtonColor={newPassword === '' || confirmPassword === '' || newPassword !== confirmPassword ? "#00000033" : "#fff"}
                    textButtonContent={"Save"}
                    inputValue={newPassword === '' || confirmPassword === '' || newPassword !== confirmPassword ? '' : newPassword}
                    handleNavigateTo={() => {
                        Alert.alert("Password changing", "", [
                            {text: 'OK', onPress: () => {
                                setNewPassword('');
                                setConfirmPassword('');
                                props.navigation.goBack();
                            }}
                        ]);
                    }}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    profile__title_wrap: {

    },

    profileChangePassword__content_wrap: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
    },
    profileChangePassword__container_content_input_wrap: {

    },
    profileChangePassword__container_content_input_current_wrap: {
        marginTop: 20,
    },
    profileChangePassword__container_content_input_password_wrap: {
        marginTop: 20,
    },
    profileChangePassword__container_content_input_confirm_wrap: {
        marginTop: 20,
    },
    profileChangePassword__container_content_button_wrap: {
        flex: 1,
        position: "absolute",
        width: "100%",
    },
});