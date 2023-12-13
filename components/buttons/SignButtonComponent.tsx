import {Alert, Dimensions, StyleSheet, TouchableHighlight} from "react-native";
import React from "react";
import {Shadow} from "react-native-shadow-2";
import {View} from "../Themed";
import {SFProDisplayMedium} from "../StyledText";

interface SignButtonProps {
    backgroundButtonColor: string;
    textButtonColor: string;
    textButtonContent: string;
    inputValue: string;
    handleNavigateTo: () => void;
}

export default function SignButtonComponent (props: SignButtonProps) {

    const { height } = Dimensions.get('window');
    const contentHeight = height - 60 - 100 - 10 - 45 - 84;

    return (
        <View style={styles.container}>
            <TouchableHighlight
                style={{...styles.bookButton__container_content_button, backgroundColor: props.backgroundButtonColor}}
                underlayColor={"#256951CC"}
                onPress={() => {
                    if (props.inputValue) {
                        props.handleNavigateTo();
                    }
                }}
                disabled={!props.inputValue}
            >
                <SFProDisplayMedium
                    style={{...styles.bookButton__container_content_button_text, color: props.textButtonColor}}
                >
                    {props.textButtonContent}
                </SFProDisplayMedium>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        //marginTop: -50,
    },
    bookButton__container_content_wrap: {

    },
    bookButton__container_content: {

    },
    bookButton__container_content_button: {
        alignItems: 'center',
        paddingLeft: 75,
        paddingRight: 75,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 4,
        height: 45,
        zIndex: 2,
    },
    bookButton__container_content_button_text: {
        /*color: '#fff',*/
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 21,
        letterSpacing: 0.9,
    },
});