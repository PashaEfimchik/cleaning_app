import React, {useCallback, useEffect, useRef, useState} from "react";
import {Alert, Dimensions, ScrollView, StyleSheet, TextInput} from 'react-native';
import { View } from "../../Themed";
import ProfileHeaderComponent from "../../header/ProfileHeaderComponent";
import TextInputComponent from "../../inputs/TextInputComponent";
import PhoneInput from 'react-native-phone-input';
import {SFProDisplayLight} from "../../StyledText";
import BookButtonComponent from "../../bookTab/bookComponents/BookButtonComponent";

interface ProfileContactInfoComponentProps {
    navigation: any;
}
export default function ProfileContactInfoScreen (props: ProfileContactInfoComponentProps) {
    const [username, setUsername] = useState('' as string);
    const [phone, setPhone] = useState('' as string);
    const [email, setEmail] = useState('' as string);
    const phoneRef = useRef(null as any);

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    /*useEffect(() => {
        console.log(phone);
    }, [phone]);*/

    return (
        <View style={styles.container}>
            <View style={styles.profileContactInfo__container_title_wrap}>
                <ProfileHeaderComponent
                    title="Contacts Info"
                    handleNavigateTo={() => {
                        props.navigation.removeListener
                        props.navigation.goBack();
                    }}
                />
            </View>
            <ScrollView>
                <View
                    style={[styles.profileContactInfo__container_content_wrap,
                        {
                            height: width <= 320 ? 400 : 500,
                        }
                    ]}>
                    <View style={styles.profileContactInfo__container_content_input_username_wrap}>
                        <TextInputComponent
                            label={"User name"}
                            value={username}
                            keyboardType={"default"}
                            width={'100%'}
                            handleValue={(newValue) => setUsername(newValue)}
                        />
                    </View>

                    <View style={styles.profileContactInfo__container_content_input_phone_wrap}>
                        <View style={styles.profileContactInfo__container_content_input_label_wrap}>
                            <SFProDisplayLight style={styles.profileContactInfo__container_content_input_label_text}>
                                Phone nr
                            </SFProDisplayLight>
                        </View>
                        <View style={styles.profileContactInfo__container_content_input}>
                            <PhoneInput
                                style={styles.profileContactInfo__container_content_input_phone}
                                textStyle={styles.profileContactInfo__container_content_input_phone_text}
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

                    <View style={styles.profileContactInfo__container_content_input_email_wrap}>
                        <TextInputComponent
                            label={"Email"}
                            value={email}
                            keyboardType={"email-address"}
                            width={'100%'}
                            handleValue={(newValue) => setEmail(newValue)}
                        />
                    </View>
                </View>
            </ScrollView>

            <View style={[
                styles.profileContactInfo__container_content_button_wrap,
                {
                    marginTop: height > 750 ? 0 : height - 125,
                }
            ]}>
                <BookButtonComponent
                    backgroundButtonColor={username === '' || phone === '' || email === '' ? "#256951cc" : "#268664"}
                    textButtonColor={username === '' || phone === '' || email === '' ? "#00000033" : "#fff"}
                    textButtonContent={"Save"}
                    inputValue={username === '' || phone === '' || email === '' ? '' : username}
                    handleNavigateTo={() => Alert.alert("Save")}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileContactInfo__container_title_wrap: {

    },
    profileContactInfo__container_content_wrap: {
        paddingLeft: 16,
        paddingRight: 16,
        width: "100%",
    },
    profileContactInfo__container_content_input_username_wrap: {
        paddingBottom: 20,
    },
    profileContactInfo__container_content_input_phone_wrap: {
        paddingBottom: 20,
    },
    profileContactInfo__container_content_input_email_wrap: {

    },
    profileContactInfo__container_content_input_label_wrap: {
        width: "100%",
    },
    profileContactInfo__container_content_input_label_text: {
        fontSize: 16,
        lineHeight: 24,
        color: "#3A3A3A",
        fontWeight: "300",
        letterSpacing: 0.48,
    },
    profileContactInfo__container_content_input: {

    },
    profileContactInfo__container_content_input_phone: {
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
    profileContactInfo__container_content_input_phone_text: {
        //marginTop: -10,
        fontSize: 18,
        //lineHeight: 24,
        color: "#3A3A3A",
        fontWeight: "400",
        letterSpacing: 0.48,
    },
    profileContactInfo__container_content_button_wrap: {
        flex: 1,
        position: "absolute",
        width: "100%",
    },
});