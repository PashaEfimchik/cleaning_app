import React, {useEffect, useState} from "react";
import {Alert, Dimensions, ScrollView, StyleSheet, TouchableHighlight} from 'react-native';
import { View } from "../../Themed";
import ProfileHeaderComponent from "../../header/ProfileHeaderComponent";
import Svg, {Path} from "react-native-svg";
import {SFProDisplayMedium} from "../../StyledText";
import ProfileAddressItemComponent from "./components/ProfileAddressItemComponent";
import {useDispatch} from "react-redux";
import ProfileAddressRadioButton from "./components/ProfileAddressRadioButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ProfileAddressProps {
    navigation: any;
}

interface AddressInterface {
    id: string;
    address: string;
    secondAddress: string;
    postalCode: string;
    city: string;
    province: string;
}

const tmpAddresses = [
    {
        id: '1',
        address: 'Address 1',
        secondAddress: 'Second address 1',
        postalCode: '111111',
        city: 'City 1',
        province: 'Province 1',
    },
    {
        id: '2',
        address: 'Address 2',
        secondAddress: 'Second address 2',
        postalCode: '222222',
        city: 'City 2',
        province: 'Province 2',
    },
    {
        id: '3',
        address: 'Address 3',
        secondAddress: 'Second address 3',
        postalCode: '3333333',
        city: 'City 3',
        province: 'Province 3',
    },
]

export default function ProfileAddressScreen (props: ProfileAddressProps) {
    const [selectedDefaultAddress, setSelectedDefaultAddress] = useState({});

    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;

    useEffect(() => {
        setSelectedDefaultAddress(tmpAddresses[0]);
    }, []);

    const handleChangeDefaultAddress = async (): Promise<void> => {
        try {
            const serializedAddress = JSON.stringify(selectedDefaultAddress);
            await AsyncStorage.setItem("DefaultAddress", serializedAddress);
            props.navigation.navigate("ProfileNewAddress");
        } catch (error) {
            console.error('Error saving object to AsyncStorage:', error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.profileAddress__title_wrap}>
                <ProfileHeaderComponent
                    title="Addresses"
                    handleNavigateTo={() => {
                        props.navigation.removeListener
                        props.navigation.goBack();
                    }}
                />
            </View>
            <ScrollView>
                <View style={[styles.profileAddress__container_content_wrap,
                    {
                        height: width <= 320 ? 400 : 500,
                    }
                ]}>
                    {
                        tmpAddresses.map((addressItem) => (
                            <ProfileAddressRadioButton
                                key={addressItem.id}
                                id={addressItem.id}
                                item={addressItem}
                                selected={addressItem === selectedDefaultAddress}
                                onPress={(item) => setSelectedDefaultAddress(item)}
                            >
                                <ProfileAddressItemComponent
                                    addressItem={addressItem}
                                    handleEditAddress={handleChangeDefaultAddress}
                                    handleDeleteAddress={() => Alert.alert("Delete address")}
                                />
                            </ProfileAddressRadioButton>
                        ))
                    }
                </View>
            </ScrollView>

            <View style={[
                styles.profileAddress__container_content_new_address_button_wrap,
                {
                    marginTop: height > 750 ? 0 : height - 125,
                }
            ]}>
                <View style={styles.profileAddress__container_content_wrap_button}>
                    <TouchableHighlight
                        style={styles.profileAddress__container_content_button}
                        underlayColor={"rgba(209,227,220,0.8)"}
                        onPress={() => {
                            props.navigation.navigate("ProfileNewAddress");
                        }}
                    >
                        <View style={styles.profileAddress__container_content_button_wrap}>
                            <Svg
                                width="25"
                                height="25"
                                fill="none"
                                style={{marginTop: -2, marginRight: 10}}
                            >
                                <Path
                                    d="M16.0858 4.91421C16.8668 4.13317 18.1332 4.13317 18.9142 4.91421L20.0858 6.08579C20.8668 6.86684 20.8668 8.13316 20.0858 8.91421L9.08579 19.9142C8.71071 20.2893 8.20201 20.5 7.67157 20.5L4.5 20.5L4.5 17.3284C4.5 16.798 4.71071 16.2893 5.08579 15.9142L16.0858 4.91421Z"
                                    stroke="#268664"
                                />

                                <Path
                                    d="M14.5 6.5L18.5 10.5"
                                    stroke="#268664"
                                />
                            </Svg>
                            <SFProDisplayMedium
                                style={{...styles.profileAddress__container_content_button_text}}
                            >
                                New address
                            </SFProDisplayMedium>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    profileAddress__title_wrap: {

    },
    profileAddress__container_content_wrap: {
        //backgroundColor: "#7f7",

    },

    profileAddress__container_content_new_address_button_wrap: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 16,
        paddingRight: 16,
        //flex: 1,
        position: "absolute",
    },
    profileAddress__container_content_wrap_button: {
        width: "100%",
    },
    profileAddress__container_content_button: {
        backgroundColor: "#fff",
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 4,
        height: 45,
        zIndex: 2,
        borderColor: "#268664",
        borderWidth: 1,
        borderStyle: "solid",
    },
    profileAddress__container_content_button_wrap: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "transparent",
        marginTop: -2,
    },
    profileAddress__container_content_button_text: {
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 21,
        letterSpacing: 0.9,
        color: "#268664",
    }
});