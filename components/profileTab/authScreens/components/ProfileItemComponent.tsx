import React from "react";
import {StyleSheet, TouchableOpacity} from 'react-native';
import { View } from "../../../Themed";
import {SFProDisplayRegular} from "../../../StyledText";
import Svg, {Path} from "react-native-svg";

interface ProfileItemComponentProps {
    title: string;
    handleItemPress: () => void;
}

export default function ProfileItemComponent (props: ProfileItemComponentProps) {
    return (
        <View style={styles.container}>
            <View style={styles.profileItem__content}>
                <TouchableOpacity style={styles.profileItem__content_button}
                    onPress={props.handleItemPress}
                >
                    <View style={styles.profileItem__content_title_wrap}>
                        <SFProDisplayRegular style={styles.profileItem__content_title_text}>
                            {props.title}
                        </SFProDisplayRegular>
                    </View>
                    <View style={styles.profileItem__content_arrow_wrap}>
                        <Svg
                            style={styles.profileItem__content_arrow}
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <Path
                                d="M9 5L15 11L9 17"
                                stroke="#000"
                            />
                        </Svg>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingBottom: 10,
    },
    profileItem__content: {
        flexDirection: 'row',
    },
    profileItem__content_button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
    },
    profileItem__content_title_wrap: {

    },
    profileItem__content_title_text: {
        color: '#3A3A3A',
        fontSize: 20,
        fontWeight: '400',
        letterSpacing: 0.6,
    },
    profileItem__content_arrow_wrap: {

    },
    profileItem__content_arrow: {

    },
});