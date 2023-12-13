import React, {useEffect, useState} from "react";
import {Alert, Dimensions, ScrollView, StyleSheet, TextInput} from "react-native";
import {View} from "../../Themed";
import HeaderComponent from "../../header/HeaderComponent";
import {SFProDisplayLight} from "../../StyledText";
import BookTextInputComponent from "../../inputs/BookTextInputComponent";
import PriceDropdownComponent from "../bookComponents/PriceDropdownComponent";
import BookButtonComponent from "../bookComponents/BookButtonComponent";
import {useDispatch, useSelector} from "react-redux";
import {setValue} from "../../../reducers/bookReducer";
import {RootState} from "../../../store/store";
import BookCheckBox from "../../checkbox/BookCheckbox";

interface PropertyAddressComponentProps {
    navigation: any;
    //handleIsNavigateToExecutionSpeed: () => void;
    //handleIsNavigateToSummary: () => void;
}

export default function PropertyAddressComponent (props: PropertyAddressComponentProps) {
    const dispatch = useDispatch();

    const getAddress = useSelector((state: RootState) => state.book.address);
    const getSecondAddress = useSelector((state: RootState) => state.book.secondAddress);
    const getPostalCode = useSelector((state: RootState) => state.book.postalCode);
    const getCity = useSelector((state: RootState) => state.book.city);
    const getProvince = useSelector((state: RootState) => state.book.province);
    const getSpecialInstructions = useSelector((state: RootState) => state.book.specialInstructions);


    const [address, setAddress] = useState('' as string);
    const [secondAddress, setSecondAddress] = useState('' as string);
    const [postalCode, setPostalCode] = useState('' as string);
    const [city, setCity] = useState('' as string);
    const [province, setProvince] = useState('' as string);
    const [specialInstructions, setSpecialInstructions] = useState('' as string);

    const [isCheckedAddressFuture, setIsCheckedAddressFuture] = useState(false as boolean);

    const areRequiredFieldsFilled = address !== '' && postalCode !== '' && city !== '' && province !== '';


    const { height } = Dimensions.get('window');
    const width = Dimensions.get('window').width;

    const contentHeight = height > 750 ? height - 243 : height - 310;
    const postalWidth = (width - 36 - 10) / 2;

    useEffect(() => {
        setAddress(getAddress);
        setSecondAddress(getSecondAddress);
        setPostalCode(getPostalCode);
        setCity(getCity);
        setProvince(getProvince);
        setSpecialInstructions(getSpecialInstructions);
    }, []);

    const handlePropertyAddress = (newAddress: string, newSecondAddress: string, newPostalCode: string, newCity: string, newProvince: string, newSpecialInstructions: string) => {
        dispatch(setValue({ key: "address", value: newAddress}));
        dispatch(setValue({ key: "secondAddress", value: newSecondAddress}));
        dispatch(setValue({ key: "postalCode", value: newPostalCode}));
        dispatch(setValue({ key: "city", value: newCity}));
        dispatch(setValue({ key: "province", value: newProvince}));
        dispatch(setValue({ key: "specialInstructions", value: newSpecialInstructions}));

        //props.handlePropertyAddress(newAddress, newSecondAddress, newPostalCode, newCity, newProvince, newSpecialInstructions);
    }

    useEffect(() => {
        handlePropertyAddress(address, secondAddress, postalCode, city, province, specialInstructions);
    }, [address, secondAddress, postalCode, city, province, specialInstructions]);

    return (
        <View style={styles.container}>
            <View style={styles.propertyAddress__container_header}>
                <HeaderComponent
                    title={"Property address"}
                    isNotStartBookScreen={true}
                    numberOfPage={6}
                    numberOfPages={8}
                    handleNavigateTo={() => props.navigation.goBack()}
                />
            </View>
            <View style={{height: contentHeight}}>
                <ScrollView style={styles.propertyAddress__container_content_wrap}>
                    <View style={[styles.propertyAddress__container_content, {
//                            height: height - 200,
                        }
                    ]}>
                        <View style={[styles.propertyAddress__container_content_input_wrap,
                            {
                                height: height - 150,
                            }
                        ]}>
                            <View style={styles.propertyAddress__container_content_input_address_wrap}>
                                <BookTextInputComponent
                                    label={"Address"}
                                    value={address}
                                    keyboardType={"default"}
                                    width={"100%"}
                                    handleValue={(newValue) => setAddress(newValue)}
                                />
                            </View>
                            <View style={styles.propertyAddress__container_content_input_second_address_wrap}>
                                <View style={styles.propertyAddress__container_content_input}>
                                    <TextInput
                                        style={styles.propertyAddress__container_content_input_text}
                                        onChangeText={(text) => setSecondAddress(text)}
                                        value={secondAddress}
                                    />
                                </View>
                            </View>
                            <View style={styles.propertyAddress__container_content_input_postal_city_wrap}>
                                <View style={styles.propertyAddress__container_content_input_postal_wrap}>
                                    <BookTextInputComponent
                                        label={"Postal code"}
                                        value={postalCode}
                                        keyboardType={"number-pad"}
                                        width={postalWidth}
                                        handleValue={(newValue) => setPostalCode(newValue)}
                                    />
                                </View>
                                <View style={styles.propertyAddress__container_content_input_city_wrap}>
                                    <BookTextInputComponent
                                        label={"City"}
                                        value={city}
                                        keyboardType={"default"}
                                        width={postalWidth}
                                        handleValue={(newValue) => setCity(newValue)}
                                    />
                                </View>
                            </View>
                            <View style={styles.propertyAddress__container_content_input_province_wrap}>
                                <BookTextInputComponent
                                    label={"Province"}
                                    value={province}
                                    keyboardType={"default"}
                                    width={"100%"}
                                    handleValue={(newValue) => setProvince(newValue)}
                                />
                            </View>
                            <View style={styles.propertyAddress__container_content_input_special_instructions_wrap}>
                                <BookTextInputComponent
                                    label={"Special instructions"}
                                    value={specialInstructions}
                                    keyboardType={"default"}
                                    width={"100%"}
                                    handleValue={(newValue) => setSpecialInstructions(newValue)}
                                />
                            </View>
                            <View style={styles.propertyAddress__container_checkbox_future_address}>
                                <BookCheckBox
                                    title={"Save information for future"}
                                    isChecked={isCheckedAddressFuture}
                                    link={""}
                                    onLinkPress={() => Alert.alert("Save address for future")}
                                    onPress={() => setIsCheckedAddressFuture(!isCheckedAddressFuture)}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={[
                styles.propertyAddress__container_content_price_wrap,
                {marginTop: height > 750 ? 0 : height - 125}
            ]}>
                <View style={styles.propertyAddress__container_content_price}>
                    <PriceDropdownComponent/>
                </View>
                <View style={styles.propertyAddress__container_next_button_wrap}>
                    <BookButtonComponent
                        backgroundButtonColor={areRequiredFieldsFilled ? "#268664" : "#256951cc"}
                        textButtonColor={areRequiredFieldsFilled ? "#fff" : "#00000033"}
                        textButtonContent={"Next"}
                        handleNavigateTo={() => props.navigation.navigate('Summary')}
                        inputValue={
                            areRequiredFieldsFilled ?
                                address + secondAddress + postalCode + city + province + specialInstructions : ""
                        }
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
    },
    propertyAddress__container_header: {
        width: "100%",
        backgroundColor: "#fff",
        paddingLeft: 16,
        paddingRight: 16,
        height: 100,
    },
    propertyAddress__container_content_wrap: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
    },
    propertyAddress__container_content: {
        marginTop: 20,
    },
    propertyAddress__container_content_input_address_wrap: {

    },
    propertyAddress__container_content_input_second_address_wrap: {
        marginTop: 5,
    },
    propertyAddress__container_content_input_postal_city_wrap: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    propertyAddress__container_content_input_wrap: {

    },
    propertyAddress__container_content_input_label_wrap: {

    },
    propertyAddress__container_content_input_postal_wrap: {

    },
    propertyAddress__container_content_input_city_wrap: {

    },
    propertyAddress__container_content_input_province_wrap: {
        marginTop: 10,
    },
    propertyAddress__container_content_input_special_instructions_wrap: {
        marginTop: 10,
    },
    propertyAddress__container_content_input_label_text: {
        fontSize: 16,
        lineHeight: 20,
        color: "#3A3A3A",
        fontWeight: "300",
        letterSpacing: 0.48,
    },
    propertyAddress__container_content_input: {
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
    propertyAddress__container_checkbox_future_address: {
        marginTop: 10,
    },
    propertyAddress__container_content_price_wrap: {
        flex: 1,
        position: "absolute",
        width: "100%",
    },
    propertyAddress__container_content_price: {

    },
    propertyAddress__container_next_button_wrap: {

    }
});