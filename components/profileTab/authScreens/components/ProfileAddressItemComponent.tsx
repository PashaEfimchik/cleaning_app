import React from "react";
import { StyleSheet, TouchableOpacity} from 'react-native';
import {View} from "../../../Themed";
import {SFProDisplayLight} from "../../../StyledText";
import Svg, {Path} from "react-native-svg";

interface ProfileAddressItemComponentProps {
    addressItem: {
        id: string;
        address: string;
        secondAddress: string;
        postalCode: string;
        city: string;
        province: string;
    };
    handleEditAddress: () => void;
    handleDeleteAddress: () => void;
}

export default function ProfileAddressItemComponent (props: ProfileAddressItemComponentProps) {
    return (
        <View style={styles.container}>
            <View style={styles.profileAddressItem__container_content_wrap}>
                <View style={styles.profileAddressItem__container_content}>
                    <View style={styles.profileAddressItem__container_content_address}>
                        <SFProDisplayLight style={styles.profileAddressItem__container_content_text}>
                            {props.addressItem.address}
                        </SFProDisplayLight>
                    </View>

                    <View style={styles.profileAddressItem__container_content_address}>
                        <SFProDisplayLight style={styles.profileAddressItem__container_content_text}>
                            {props.addressItem.secondAddress}
                        </SFProDisplayLight>
                    </View>

                    <View style={styles.profileAddressItem__container_content_city_wrap}>
                        <View style={styles.profileAddressItem__container_content_address}>
                            <SFProDisplayLight style={styles.profileAddressItem__container_content_text}>
                                {props.addressItem.postalCode}
                            </SFProDisplayLight>
                        </View>
                        <View style={styles.profileAddressItem__container_content_address}>
                            <SFProDisplayLight style={styles.profileAddressItem__container_content_text}>
                                {props.addressItem.city}
                            </SFProDisplayLight>
                        </View>

                    </View>

                    <View style={styles.profileAddressItem__container_content_address}>
                        <SFProDisplayLight style={styles.profileAddressItem__container_content_text}>
                            {props.addressItem.province}
                        </SFProDisplayLight>
                    </View>
                </View>

                <View style={styles.profileAddressItem__container_content_button_wrap}>
                    <View style={styles.profileAddressItem__container_content_edit_button_wrap}>
                        <TouchableOpacity style={styles.profileAddressItem__container_content_button}
                                          onPress={props.handleEditAddress}
                        >
                            <View style={styles.profileAddressItem__container_content_icon_wrap}>
                                <Svg
                                    style={styles.profileAddressItem__container_content_edit_icon}
                                    width={18}
                                    height={18}
                                    viewBox="0 0 18 18"
                                    fill="none"
                                >
                                    <Path
                                        d="M10.0002 3.33333C10.7365 2.59695 11.9305 2.59695 12.6668 3.33333V3.33333C13.4032 4.06971 13.4032 5.26362 12.6668 6L5.91928 12.7475C5.54421 13.1226 5.0355 13.3333 4.50507 13.3333L2.66683 13.3333L2.66683 11.4951C2.66683 10.9647 2.87754 10.456 3.25262 10.0809L10.0002 3.33333Z"
                                        stroke="#268664"
                                    />
                                    <Path
                                        d="M9.3335 4L12.0002 6.66667"
                                        stroke="#268664"
                                    />
                                </Svg>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.profileAddressItem__container_content_delete_button_wrap}>
                        <TouchableOpacity style={styles.profileAddressItem__container_content_button}
                                          onPress={props.handleDeleteAddress}
                        >
                            <View style={styles.profileAddressItem__container_content_icon_wrap}>
                                <Svg
                                    style={styles.profileAddressItem__container_content_delete_icon}
                                    width={18}
                                    height={18}
                                    viewBox="0 0 18 18"
                                    fill="none"
                                >
                                    <Path
                                        d="M12.6668 4.0026H3.3335"
                                        stroke="#268664"
                                    />
                                    <Path
                                        d="M9.33317 3.33073H6.6665"
                                        stroke="#268664"
                                    />
                                    <Path
                                        d="M4 6.66406V13.9974H12C12 13.3307 12 6.66406 12 6.66406"
                                        stroke="#268664"
                                    />
                                </Svg>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        //flex: 1,
        backgroundColor: "transparent",
    },
    profileAddressItem__container_content_wrap: {
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    profileAddressItem__container_content: {
        paddingLeft: 20,
        backgroundColor: "transparent",
    },
    profileAddressItem__container_content_address: {
        backgroundColor: "transparent",
    },
    profileAddressItem__container_content_city_wrap: {
        backgroundColor: "transparent",
        flexDirection: "row",
        gap: 10,

    },
    profileAddressItem__container_content_text: {
        color: "#3A3A3A",
        fontSize: 16,
        fontWeight: "300",
        letterSpacing: 0.32,
    },
    profileAddressItem__container_content_button_wrap: {
        backgroundColor: "transparent",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 30,
    },
    profileAddressItem__container_content_edit_button_wrap: {
        backgroundColor: "transparent",

    },
    profileAddressItem__container_content_delete_button_wrap: {
        backgroundColor: "transparent",

    },
    profileAddressItem__container_content_button: {

    },
    profileAddressItem__container_content_icon_wrap: {
        backgroundColor: "transparent",

    },
    profileAddressItem__container_content_edit_icon: {

    },
    profileAddressItem__container_content_delete_icon: {

    },
});