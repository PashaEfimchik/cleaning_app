import {Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {SFProDisplayRegular} from "../StyledText";
import Svg, {Path, Rect} from "react-native-svg";

interface BookCheckBoxProps {
    title: string;
    isChecked: boolean;
    link: any;
    onLinkPress: () => void;
    onPress: () => void;
}

const BookCheckBox = (props: BookCheckBoxProps) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={props.onPress}>
                {
                    props.isChecked ? (
                        <Svg
                            width="20"
                            height="20"
                            fill="none"
                        >
                            <Rect
                                width="20"
                                height="20"
                                rx="4"
                                fill="#268664"
                            />
                            <Path
                                d="M14.6666 6.79199L8.24998 13.2087L5.33331 10.292"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </Svg>
                    ) : (
                        <Svg
                            width="20"
                            height="20"
                            fill="none">
                            <Rect
                                x={0.5}
                                y={0.5}
                                width={19}
                                height={19}
                                rx={3.5}
                                stroke={"#268664"}
                                />
                        </Svg>
                    )
                }
            </Pressable>
            <SFProDisplayRegular style={styles.title}>
                {
                    props.title
                }
            </SFProDisplayRegular>
            <TouchableOpacity onPress={props.onLinkPress}>
                <SFProDisplayRegular style={styles.link}>
                    {
                        props.link
                    }
                </SFProDisplayRegular>
            </TouchableOpacity>
            <SFProDisplayRegular style={styles.star}>{props.link ? '*' : ''}</SFProDisplayRegular>
        </View>
    );
};

export default BookCheckBox;

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
    },
    title: {
        fontSize: 12,
        color: "#000",
        marginLeft: 8,
        fontWeight: "400",
        letterSpacing: 0.6,
    },
    link: {
        fontSize: 12,
        color: "#000",
        marginLeft: 3,
        fontWeight: "400",
        letterSpacing: 0.6,
        textDecorationLine: "underline",
    },
    star: {
        fontSize: 12,
        color: "#000",
        fontWeight: "400",
        letterSpacing: 0.6,
    }
});