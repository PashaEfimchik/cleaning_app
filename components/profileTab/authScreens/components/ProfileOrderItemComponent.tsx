import React from "react";
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View} from "../../../Themed";
import {SFProDisplayLight, SFProDisplayRegular} from "../../../StyledText";
import Svg, {Path} from "react-native-svg";

interface ProfileOrderItemProps {
    navigation?: any;
    orderData?: any;
}

export default function ProfileOrderItemComponent (props: ProfileOrderItemProps) {
    const dateFormat = (date: string) => {
        const [year, month, day] = date.split('-');
        return `${day}.${month}.${year}`;
    }

    return (
        <View style={styles.container}>
            <View style={styles.profileItem__content}>
                {
                    props.orderData && (
                        <TouchableOpacity style={styles.profileItem__content_button}
                                          onPress={() => {
                                              //props.navigation.removeListener
                                              //props.navigation.goBack()
                                          }}
                        >
                            <View style={styles.profileItem__content_data_wrap}>
                                <SFProDisplayRegular style={styles.profileItem__content_serviceType_text}>
                                    {props.orderData.dataInfo.serviceType.value}
                                </SFProDisplayRegular>
                                {
                                    props.orderData.dataInfo.extraServices.length > 0 && (
                                        <View style={styles.profileItem__content_extraServices_wrap}>
                                            {
                                                props.orderData.dataInfo.extraServices.map((item: any, index: number) => {
                                                    return (
                                                        <SFProDisplayLight
                                                            key={index}
                                                            style={styles.profileItem__content_extraServices_text}
                                                        >
                                                            {index > 0 ? ', ' : ''}{item.value}
                                                        </SFProDisplayLight>
                                                    )
                                                })
                                            }
                                        </View>
                                    )
                                }
                                <SFProDisplayLight style={styles.profileItem__content_date_text}>
                                    {dateFormat(props.orderData.dataInfo.date)}
                                </SFProDisplayLight>
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
                    )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        //paddingBottom: 10,
    },
    profileItem__content: {
        flexDirection: 'row',
    },
    profileItem__content_button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',

    },
    profileItem__content_data_wrap: {

    },
    profileItem__content_serviceType_text: {
        color: "#000",
        fontSize: 18,
        fontWeight: "400",
        letterSpacing: 0.54,
        lineHeight: 24,
    },
    profileItem__content_extraServices_wrap: {
        flexDirection: "row",
    },
    profileItem__content_extraServices_text: {
        color: "#000",
        fontSize: 12,
        fontWeight: "300",
        letterSpacing: 0.36,
        lineHeight: 16,
    },
    profileItem__content_date_text: {
        color: "#000",
        fontSize: 12,
        fontWeight: "300",
        letterSpacing: 0.36,
        lineHeight: 16,
    },
    profileItem__content_arrow_wrap: {

    },
    profileItem__content_arrow: {

    },
});