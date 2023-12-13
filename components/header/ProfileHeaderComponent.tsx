import React from "react";
import {View, StyleSheet, TouchableHighlight, Alert} from "react-native";
import {SFProDisplayLight, SFProDisplayRegular} from "../StyledText";
import Svg, {Path} from "react-native-svg";

interface ProfileHeaderComponentProps {
    title: string;
    handleNavigateTo: () => void;
}

export default function ProfileHeaderComponent (props: ProfileHeaderComponentProps) {

    return (
        <View style={styles.container}>
            <View style={styles.profileHeader__container_content}>
                        <TouchableHighlight
                            style={styles.profileHeader__container_button_wrap}
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
                <View style={styles.profileHeader__container_title_wrap}>
                    <SFProDisplayRegular style={styles.profileHeader__container_title_text}>{props.title}</SFProDisplayRegular>
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
    profileHeader__container_content: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    profileHeader__container_button_wrap: {
        position: "absolute",
        left: 16,
        backgroundColor: "transparent"
    },
    profileHeader__container_title_wrap: {
        alignItems: "center",
    },
    profileHeader__container_title_text: {
        fontSize: 20,
        color: "#3D3C42",
        fontWeight: "400",
        letterSpacing: 0.4,
    },
});