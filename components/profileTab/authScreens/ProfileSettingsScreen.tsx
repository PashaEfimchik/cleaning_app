import React from "react";
import { StyleSheet } from 'react-native';
import { View } from "../../Themed";
import ProfileHeaderComponent from "../../header/ProfileHeaderComponent";
import ProfileItemComponent from "./components/ProfileItemComponent";

interface ProfileSettingsComponentProps {
    navigation: any;
}
export default function ProfileSettingsScreen (props: ProfileSettingsComponentProps) {
    return (
        <View style={styles.container}>
            <View style={styles.profile__title_wrap}>
                <ProfileHeaderComponent
                    title="Settings"
                    handleNavigateTo={() => {
                        props.navigation.removeListener
                        props.navigation.goBack();
                    }}
                />
            </View>
            <View style={styles.profileSettings__content_wrap}>
                <ProfileItemComponent
                    title="Change password"
                    handleItemPress={() => {
                        props.navigation.removeListener
                        props.navigation.navigate('ProfileChangePassword')
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profile__title_wrap: {

    },
    profileSettings__content_wrap: {
        flex: 1,
        //backgroundColor: "#8a5353",
        paddingTop: 20,
        paddingLeft: 16,
        paddingRight: 16,
    },
});