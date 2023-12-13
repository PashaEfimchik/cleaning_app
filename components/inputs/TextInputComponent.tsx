import React from "react";
import {KeyboardType, StyleSheet, TextInput, View} from "react-native";
import {SFProDisplayLight} from "../StyledText";

interface TextInputComponentProps {
    label: string;
    value: string;
    keyboardType: KeyboardType;
    width: any;
    handleValue: (newValue: string) => void;
}

export default function TextInputComponent (props: TextInputComponentProps) {
    return (
        <View style={[
            styles.container,
            {width: props.width}
        ]}>
            <View style={styles.bookTextInput__container_content_input_wrap}>
                <View style={styles.bookTextInput__container_content_input_label_wrap}>
                    <SFProDisplayLight style={styles.bookTextInput__container_content_input_label_text}>
                        {props.label}
                    </SFProDisplayLight>
                </View>
                <View style={styles.bookTextInput__container_content_input}>
                    <TextInput
                        style={styles.bookTextInput__container_content_input_text}
                        onChangeText={(text) => props.handleValue(text)}
                        value={props.value}
                        keyboardType={props.keyboardType}
                    />
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
    bookTextInput__container_content_input_wrap: {

    },
    bookTextInput__container_content_input_label_wrap: {
        width: "100%",
    },
    bookTextInput__container_content_input_label_text: {
        fontSize: 16,
        lineHeight: 24,
        color: "#3A3A3A",
        fontWeight: "300",
        letterSpacing: 0.48,
    },
    bookTextInput__container_content_input: {
        marginTop: 5,
        height: 58,
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#E8E7E7",
        borderStyle: "solid",
    },
    bookTextInput__container_content_input_text: {
        fontSize: 18,
        color: "#3A3A3A",
    },
});