import React from "react";
import {View, StyleSheet, TouchableHighlight, Alert} from "react-native";
import {SFProDisplayLight, SFProDisplayRegular} from "../StyledText";
import Svg, {Path} from "react-native-svg";

interface HeaderComponentProps {
    title: string;
    isNotStartBookScreen: boolean;
    handleNavigateTo: () => void;
}

export default function HeaderComponent(props: HeaderComponentProps) {

    return (
        <View style={styles.container}>
            <View style={styles.header__container_content}>
                {
                    props.isNotStartBookScreen && (
                        <TouchableHighlight
                            style={styles.header__container_button_wrap}
                            onPress={props.handleNavigateTo}
                            underlayColor="transparent"
                        >
                            <Svg
                                width="24"
                                height="25"
                                fill="none"
                            >
                                <Path
                                    d="M14 18L8 12L14 6"
                                    stroke="black"
                                    stroke-linecap="round"
                                />
                            </Svg>
                        </TouchableHighlight>
                    )
                }
                <View style={styles.header__container_title_wrap}>
                    <SFProDisplayRegular style={styles.header__container_title_text}>{props.title}</SFProDisplayRegular>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        paddingTop: 44,
        height: 100,
    },
    header__container_content: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    header__container_button_wrap: {
        position: "absolute",
        left: 16,
        backgroundColor: "transparent"
    },
    header__container_title_wrap: {
        alignItems: "center",
    },
    header__container_title_text: {
        fontSize: 20,
        color: "#3D3C42",
        fontWeight: "400",
        letterSpacing: 0.4,
    }
});