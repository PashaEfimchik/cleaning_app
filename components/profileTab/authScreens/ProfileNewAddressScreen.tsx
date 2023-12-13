import React, {useEffect, useState} from "react";
import {Alert, Dimensions, ScrollView, StyleSheet, TextInput} from 'react-native';
import { View } from "../../Themed";
import ProfileHeaderComponent from "../../header/ProfileHeaderComponent";
import BookButtonComponent from "../../bookTab/bookComponents/BookButtonComponent";
import BookTextInputComponent from "../../inputs/BookTextInputComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ProfileNewAddressProps {
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

export default function ProfileNewAddressScreen (props: ProfileNewAddressProps) {
    const [newAddress, setNewAddress] = useState('' as string);
    const [newSecondAddress, setNewSecondAddress] = useState('' as string);
    const [newPostalCode, setNewPostalCode] = useState('' as string);
    const [newCity, setNewCity] = useState('' as string);
    const [newProvince, setNewProvince] = useState('' as string);

    const [editAddress, setEditAddress] = useState(false as boolean);

    const getObject = async (): Promise<AddressInterface | null> => {
        try {
            const serializedData = await AsyncStorage.getItem("DefaultAddress");
            if (serializedData !== null) {
                const parseData = JSON.parse(serializedData);
                if (parseData) {
                    setNewAddress(parseData.address);
                    setNewSecondAddress(parseData.secondAddress);
                    setNewPostalCode(parseData.postalCode);
                    setNewCity(parseData.city);
                    setNewProvince(parseData.province);
                    setEditAddress(true)
                }
                return JSON.parse(serializedData);
            }
        } catch (error) {
            console.error('Error getting object from AsyncStorage:', error);
        }
        return null;
    };

    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;

    const contentHeight = height > 750 ? height - 243 : height - 310;
    const postalWidth = (width - 36 - 10) / 2;

    useEffect(() => {
        getObject().then();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.profileNewAddress__title_wrap}>
                <ProfileHeaderComponent
                    title="New Address"
                    handleNavigateTo={() => {
                        props.navigation.removeListener
                        props.navigation.goBack();
                    }}
                />
            </View>
            <View style={{ height: contentHeight}}>
                <ScrollView>
                    <View style={[styles.profileNewAddress__container_content_wrap,
                        {
                            //height: width <= 320 ? 400 : 500,
                        }
                    ]}>
                        <View style={[styles.profileNewAddress__container_content_input_wrap,
                            {
                                height: height - 150,
                            }
                        ]}>
                            <View style={styles.profileNewAddress__container_content_input_address_wrap}>
                                <BookTextInputComponent
                                    label={"Address"}
                                    value={newAddress}
                                    keyboardType={"default"}
                                    width={"100%"}
                                    handleValue={(newValue) => setNewAddress(newValue)}
                                />
                            </View>
                            <View style={styles.profileNewAddress__container_content_input_second_address_wrap}>
                                <View style={styles.profileNewAddress__container_content_input}>
                                    <TextInput
                                        style={styles.propertyAddress__container_content_input_text}
                                        onChangeText={(text) => setNewSecondAddress(text)}
                                        value={newSecondAddress}
                                    />
                                </View>
                            </View>
                            <View style={styles.profileNewAddress__container_content_input_postal_city_wrap}>
                                <View style={styles.profileNewAddress__container_content_input_postal_wrap}>
                                    <BookTextInputComponent
                                        label={"Postal code"}
                                        value={newPostalCode}
                                        keyboardType={"number-pad"}
                                        width={postalWidth}
                                        handleValue={(newValue) => setNewPostalCode(newValue)}
                                    />
                                </View>
                                <View style={styles.profileNewAddress__container_content_input_city_wrap}>
                                    <BookTextInputComponent
                                        label={"City"}
                                        value={newCity}
                                        keyboardType={"default"}
                                        width={postalWidth}
                                        handleValue={(newValue) => setNewCity(newValue)}
                                    />
                                </View>
                            </View>
                            <View style={styles.profileNewAddress__container_content_input_province_wrap}>
                                <BookTextInputComponent
                                    label={"Province"}
                                    value={newProvince}
                                    keyboardType={"default"}
                                    width={"100%"}
                                    handleValue={(newValue) => setNewProvince(newValue)}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>

            <View style={[
                styles.profileNewAddress__container_content_button_wrap,
                {
                    marginTop: height > 750 ? 0 : height - 125,
                }
            ]}>
                <BookButtonComponent
                    backgroundButtonColor={newAddress === '' || newSecondAddress === '' || newPostalCode === '' || newCity === '' || newProvince === '' ? "#256951cc" : "#268664"}
                    textButtonColor={newAddress === '' || newSecondAddress === '' || newPostalCode === '' || newCity === '' || newProvince === '' ? "#00000033" : "#fff"}
                    textButtonContent={"Save"}
                    inputValue={newAddress === '' || newSecondAddress === '' || newPostalCode === '' || newCity === '' || newProvince === '' ? '' : newAddress}
                    handleNavigateTo={() => {
                        Alert.alert(editAddress ? "Address data updated" : "New address added", "", [
                            {text: 'OK', onPress: () => {
                                    setNewAddress('');
                                    setNewSecondAddress('');
                                    setNewPostalCode('0');
                                    setNewCity('');
                                    setNewProvince('');
                                    props.navigation.goBack();
                                    if (editAddress) {
                                        AsyncStorage.clear().then(() => console.log('Cleared'))
                                    }
                                }}
                        ]);
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
    profileNewAddress__title_wrap: {

    },
    profileNewAddress__container_content_wrap: {
        marginTop: 20,
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
    },

    profileNewAddress__container_content_input_wrap: {

    },
    profileNewAddress__container_content_input_address_wrap: {

    },
    profileNewAddress__container_content_input_second_address_wrap: {
        marginTop: 5,
    },
    profileNewAddress__container_content_input: {
        marginTop: 5,
        height: 58,
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#E8E7E7",
        borderStyle: "solid",
    },
    propertyAddress__container_content_input_text: {
        fontSize: 18,
        color: "#3A3A3A",
    },
    profileNewAddress__container_content_input_postal_city_wrap: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    profileNewAddress__container_content_input_postal_wrap: {

    },
    profileNewAddress__container_content_input_city_wrap: {

    },
    profileNewAddress__container_content_input_province_wrap: {
        marginTop: 10,
    },



    profileNewAddress__container_content_button_wrap: {
        flex: 1,
        position: "absolute",
        width: "100%",
    },
});