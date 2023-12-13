import React, {useState} from "react";
import {Alert, Dimensions, ScrollView, StyleSheet, TextInput} from 'react-native';
import { View } from "../../Themed";
import ProfileHeaderComponent from "../../header/ProfileHeaderComponent";
import {InterLight, SFProDisplayLight} from "../../StyledText";
import TextInputComponent from "../../inputs/TextInputComponent";
import BookButtonComponent from "../../bookTab/bookComponents/BookButtonComponent";

interface ContactUsProps {
    navigation: any;
}

export default function ContactUsScreen (props: ContactUsProps) {
    const [name, setName] = useState('' as string);
    const [email, setEmail] = useState('' as string);
    const [textMessage, setTextMessage] = useState('' as string);

    const height = Dimensions.get('window').height;

    return (
        <View style={styles.container}>
            <View style={styles.contactUs__title_wrap}>
                <ProfileHeaderComponent
                    title="Contact Us"
                    handleNavigateTo={() => {
                        props.navigation.removeListener
                        props.navigation.goBack();
                    }}
                />
            </View>
            <View style={{
                height: height - 235,
            }}>
                <ScrollView
                >
                    <View style={[
                        styles.contactUs__content_wrap,
                        {
                            height: "auto",
                            paddingBottom: 50,
                        }
                    ]}>
                        <View style={styles.contactUs__content_label}>
                            <InterLight style={styles.contactUs__content_label_text}>
                                Fill in the text field and we will contact you by email
                            </InterLight>
                        </View>

                        <View style={styles.contactUs__content_input_wrap}>

                            <View style={styles.contactUs__content_input_name_wrap}>
                                <TextInputComponent
                                    label={"Name"}
                                    value={name}
                                    keyboardType={"default"}
                                    width={'100%'}
                                    handleValue={(newValue) => setName(newValue)}
                                />
                            </View>

                            <View style={styles.contactUs__content_input_email_wrap}>
                                <TextInputComponent
                                    label={"Email"}
                                    value={email}
                                    keyboardType={"email-address"}
                                    width={'100%'}
                                    handleValue={(newValue) => setEmail(newValue)}
                                />
                            </View>

                            <View style={styles.contactUs__content_input_text_message_wrap}>
                                <View style={styles.contactUs__content_input_label_wrap}>
                                    <SFProDisplayLight style={styles.contactUs__content_input_label_text}>
                                        Text
                                    </SFProDisplayLight>
                                </View>
                                <View style={styles.contactUs__content_input}>
                                    <TextInput
                                        style={styles.contactUs__content_input_text}
                                        onChangeText={(text) => setTextMessage(text)}
                                        value={textMessage}
                                        keyboardType={"default"}
                                        multiline = {true}
                                        numberOfLines = {4}
                                    />
                                </View>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={[
                styles.contactUs__content_button_wrap,
                {
                    marginTop: height > 750 ? 0 : height - 125,
                }
            ]}>
                <BookButtonComponent
                    backgroundButtonColor={name === '' || email === '' || textMessage === '' ? "#256951cc" : "#268664"}
                    textButtonColor={name === '' || email === '' || textMessage === '' ? "#00000033" : "#fff"}
                    textButtonContent={"Send"}
                    inputValue={name === '' || email === '' || textMessage === '' ? '' : name}
                    handleNavigateTo={() => Alert.alert("Send")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contactUs__title_wrap: {

    },
    contactUs__content_wrap: {
        paddingTop: 10,
        paddingLeft: 16,
        paddingRight: 16,
    },
    contactUs__content_label: {
        marginTop: 40,
    },
    contactUs__content_label_text: {
        fontSize: 20,
        lineHeight: 26,
        color: "#000",
        fontWeight: "300",
        letterSpacing: 0.2,
    },
    contactUs__content_input_wrap: {
        marginTop: 30,
    },
    contactUs__content_input_name_wrap: {
    },
    contactUs__content_input_email_wrap: {
        marginTop: 10,
    },
    contactUs__content_input_text_message_wrap: {
        marginTop: 10,
    },
    contactUs__content_input_label_wrap: {
        width: "100%",
    },
    contactUs__content_input_label_text: {
        fontSize: 16,
        lineHeight: 24,
        color: "#3A3A3A",
        fontWeight: "300",
        letterSpacing: 0.48,
    },
    contactUs__content_input: {
        marginTop: 5,
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#E8E7E7",
        borderStyle: "solid",
        height: "auto",
        flexWrap: "wrap",
        minHeight: 116,
    },
    contactUs__content_input_text: {
        fontSize: 18,
        color: "#3A3A3A",
        width: "100%",
        minHeight: 84,
    },
    contactUs__content_button_wrap: {
        flex: 1,
        position: "absolute",
        width: "100%",
    },
});