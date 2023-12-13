import React, {useState} from "react";
import {KeyboardType, StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import {SFProDisplayLight} from "../StyledText";
import Svg, {Circle, Path} from "react-native-svg";

interface PasswordInputComponentProps {
    label: string;
    value: string;
    keyboardType: KeyboardType;
    width: any;
    handleValue: (newValue: string) => void;
}

export default function PasswordInputComponent (props: PasswordInputComponentProps) {
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    return (
        <View style={[
            styles.container,
            {width: props.width}
        ]}>
            <View style={styles.passwordInput__container_content_input_wrap}>
                <View style={styles.passwordInput__container_content_input_label_wrap}>
                    <SFProDisplayLight style={styles.passwordInput__container_content_input_label_text}>
                        {props.label}
                    </SFProDisplayLight>
                </View>
                <View style={styles.passwordInput__container_content_input}>
                    <TextInput
                        style={styles.passwordInput__container_content_input_text}
                        onChangeText={(text) => props.handleValue(text)}
                        value={props.value}
                        keyboardType={"default"}
                        secureTextEntry={secureTextEntry}
                        autoCorrect={false}
                        autoCapitalize={"none"}

                    />
                    <TouchableOpacity
                        style={styles.passwordInput__content_eye_icon_wrap}
                        onPress={() => setSecureTextEntry(!secureTextEntry)}
                    >
                        {
                            secureTextEntry ? (
                                <Svg
                                    style={styles.passwordInput__content_eye_icon}
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <Path
                                        d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z"
                                        stroke="#6E6E6E"
                                        stroke-opacity="0.5"
                                    />
                                    <Circle
                                        cx="12" cy="12" r="3"
                                        stroke="#6E6E6E"
                                        stroke-opacity="0.5"
                                    />
                                    <Path
                                        d="M3 21L20 4"
                                        stroke="#6E6E6E"
                                        stroke-opacity="0.5"
                                    />
                                </Svg>
                            ) : (
                                <Svg
                                    style={styles.passwordInput__content_eye_icon}
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <Path
                                        d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z"
                                        stroke="#6E6E6E"
                                        stroke-opacity="0.5"
                                    />
                                    <Circle
                                        cx="12" cy="12" r="3"
                                        stroke="#6E6E6E"
                                        stroke-opacity="0.5"
                                    />
                                </Svg>
                            )
                        }
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //width: "100%",
        //flex: 1,
    },
    passwordInput__container_content_input_wrap: {

    },
    passwordInput__container_content_input_label_wrap: {
        width: "100%",
    },
    passwordInput__container_content_input_label_text: {
        fontSize: 16,
        lineHeight: 24,
        color: "#3A3A3A",
        fontWeight: "300",
        letterSpacing: 0.48,
    },
    passwordInput__container_content_input: {
        marginTop: 5,
        height: 58,
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 16,
        paddingRight: 42,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#E8E7E7",
        borderStyle: "solid",
        //flexDirection: "row",
        //justifyContent: "space-between",
        //alignItems: "center",
    },
    passwordInput__container_content_input_text: {
        fontSize: 18,
        color: "#3A3A3A",
    },
    passwordInput__content_eye_icon_wrap: {
        position: "absolute",
        right: 4,
        top: 4,
        width: 48,
        height: 48,
        //backgroundColor: "#8f8",
    },
    passwordInput__content_eye_icon: {
        left: 12,
        top: 12,
    },
});