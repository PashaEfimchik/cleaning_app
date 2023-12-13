import React, {useState} from "react";
import {StyleSheet, TouchableOpacity, LayoutAnimation, Dimensions,} from 'react-native';
import { View } from "../../../Themed";
import Svg, {Path} from "react-native-svg";
import {SFProDisplayRegular} from "../../../StyledText";


interface InfoItemProps {
    title: string;
    description: string;
    time?: string;
}

export default function InfoItemComponent (props: InfoItemProps) {
    const [isOpenDescription, setIsOpenDescription] = useState(false);

    const width = Dimensions.get('window').width;

    const handleOpenDescription = () => {
        LayoutAnimation.configureNext({
            duration: 300,
            create: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.opacity,
            },
            update: {
                type: LayoutAnimation.Types.linear,
            },
            delete: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.opacity,
            }

        });
        setIsOpenDescription(!isOpenDescription);
    }

    return (
        <View style={[
            styles.container,
            {
                borderColor: isOpenDescription ? "#268664" : "#E8E7E7",
            }
        ]}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => handleOpenDescription()}
                style={styles.infoItem__container_content}
            >
                <View style={styles.infoItem__container_title_wrap}>
                    <View style={[
                        styles.infoItem__container_title,
                        {
                            width: width - 106,
                        }
                    ]}>
                        <SFProDisplayRegular style={styles.infoItem__container_title_text}>
                            {props.title}
                        </SFProDisplayRegular>
                    </View>
                    <View style={styles.infoItem__container_icon_wrap}>
                        <Svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            {
                                isOpenDescription ? (
                                    <Path
                                        d="M6 14L12 8L18 14"
                                        stroke="black"
                                    />
                                ) : (
                                    <Path
                                        d="M6 10L12 16L18 10"
                                        stroke="black"
                                    />
                                )
                            }
                        </Svg>
                    </View>
                </View>
                {
                    isOpenDescription && (
                        <View style={[
                            styles.infoItem__container_added_data_wrap,
                            {
                                width: width - 106,
                            }
                        ]}>
                            <View style={styles.infoItem__container_description_wrap}>
                                <SFProDisplayRegular style={styles.infoItem__container_description_text}>
                                    {props.description}
                                </SFProDisplayRegular>
                            </View>
                        </View>
                    )
                }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        //backgroundColor: "#edf6f3",
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: "solid",
        marginTop: 10,
    },

    infoItem__container_content: {
        padding: 20,
        overflow: "hidden",

    },
    infoItem__container_title_wrap: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",

    },
    infoItem__container_title: {

    },
    infoItem__container_title_text: {
        color: "#3A3A3A",
        fontSize: 22,
        lineHeight: 22,
        fontWeight: "400",
        letterSpacing: 0.44,
    },
    infoItem__container_icon_wrap: {

    },
    infoItem__container_added_data_wrap: {

    },
    infoItem__container_description_wrap: {
        paddingTop: 20,
    },
    infoItem__container_description_text: {
        color: "#3A3A3A",
        fontSize: 16,
        lineHeight: 22,
        fontWeight: "400",
        letterSpacing: 0.32,
    },
    infoItem__container_time_wrap: {
        paddingTop: 20,
    },
    infoItem__container_time_text: {
        color: "#3A3A3A",
        fontSize: 18,
        lineHeight: 18,
        fontWeight: "300",
        letterSpacing: 0.36,
    },
});