import React from "react";
import { StyleSheet } from 'react-native';
import {View} from "../Themed";
import {SFProDisplayRegular} from "../StyledText";
import ProfileItemComponent from "./authScreens/components/ProfileItemComponent";

interface ProfileScreenAuthProps {
    navigation: any;
}

export default function ProfileScreenAuth (props: ProfileScreenAuthProps) {
    return (
        <View style={styles.container}>
            <View style={styles.profile__title_wrap}>
                <SFProDisplayRegular style={styles.profile__title_text}>
                    Profile
                </SFProDisplayRegular>
            </View>
            <View style={styles.profile__content_wrap}>
                <ProfileItemComponent
                    title="Contact Info"
                    handleItemPress={() => {
                        props.navigation.removeListener
                        props.navigation.navigate('ProfileContactInfo')
                    }}
                />
                <ProfileItemComponent
                    title="Addresses"
                    handleItemPress={() => {
                        props.navigation.removeListener
                        props.navigation.navigate('ProfileAddress')
                    }}
                />
                <ProfileItemComponent
                    title="Orders"
                    handleItemPress={() => {
                        props.navigation.removeListener
                        props.navigation.navigate('ProfileOrders')
                    }}
                />
                <ProfileItemComponent
                    title="Settings"
                    handleItemPress={() => {
                        props.navigation.removeListener
                        props.navigation.navigate('ProfileSettings')
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    profile__title_wrap: {
        paddingTop: 60,
        height: 100,
        alignItems: 'center',
    },
    profile__title_text: {
        fontSize: 20,
        color: "#3D3C42",
        fontWeight: "400",
        letterSpacing: 0.4,
    },
    profile__content_wrap: {
        flex: 1,
        //backgroundColor: "#8a5353",
        paddingTop: 20,
        paddingLeft: 16,
        paddingRight: 16,
    },
});