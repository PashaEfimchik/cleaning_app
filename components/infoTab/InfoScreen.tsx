import React from "react";
import { StyleSheet } from 'react-native';
import {View} from "../Themed";
import {SFProDisplayLight, SFProDisplayRegular} from "../StyledText";
import ProfileItemComponent from "../profileTab/authScreens/components/ProfileItemComponent";

interface InfoScreenProps {
    navigation: any;
}

export default function InfoScreen (props: InfoScreenProps) {
    return (
        <View style={styles.container}>
            <View style={styles.info__title_wrap}>
                <SFProDisplayRegular style={styles.info__title_text}>
                    Info
                </SFProDisplayRegular>
            </View>

            <View style={styles.info__content_wrap}>
                <ProfileItemComponent
                    title="Services"
                    handleItemPress={() => {
                        props.navigation.removeListener
                        props.navigation.navigate('InfoServices')
                    }}
                />

                <ProfileItemComponent
                    title="Cancellation Policy"
                    handleItemPress={() => {
                        props.navigation.removeListener
                        props.navigation.navigate('InfoCancellationPolicy')
                    }}
                />

                <ProfileItemComponent
                    title="FAQ"
                    handleItemPress={() => {
                        props.navigation.removeListener
                        props.navigation.navigate('InfoFAQ')
                    }}
                />

                <ProfileItemComponent
                    title="Contact us"
                    handleItemPress={() => {
                        props.navigation.removeListener
                        props.navigation.navigate('InfoContactUs')
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
    info__title_wrap: {
        paddingTop: 60,
        height: 100,
        alignItems: 'center',
    },
    info__title_text: {
        fontSize: 20,
        color: "#3D3C42",
        fontWeight: "400",
        letterSpacing: 0.4,
    },
    info__content_wrap: {
        flex: 1,
        //backgroundColor: "#8a5353",
        paddingTop: 20,
        paddingLeft: 16,
        paddingRight: 16,
    },
});