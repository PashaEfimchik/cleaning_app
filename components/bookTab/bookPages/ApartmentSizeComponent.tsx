import {View} from "../../Themed";
import HeaderComponent from "../../header/HeaderComponent";
import React, {useEffect, useState} from "react";
import {Alert, Dimensions, ScrollView, StyleSheet, TextInput} from "react-native";
import {SFProDisplayLight} from "../../StyledText";
import PriceDropdownComponent from "../bookComponents/PriceDropdownComponent";
import BookButtonComponent from "../bookComponents/BookButtonComponent";
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from "../../../store/store";
import {setValue} from "../../../reducers/bookReducer";
import BookDropdownPropertyComponent from "../bookComponents/BookDropdownPropertyComponent";

const bedroomCountData: any[] = [
    {id: 0, count: 0, label: 0 + " bedroom", value: 0 + " bedroom", price: 0},
    {id: 1, count: 1, label: 1 + " bedroom", value: 1 + " bedroom", price: 10},
    {id: 2, count: 2, label: 2 + " bedroom", value: 2 + " bedroom", price: 12},
    {id: 3, count: 3, label: 3 + " bedroom", value: 3 + " bedroom", price: 14},
    {id: 4, count: 4, label: 4 + " bedroom", value: 4 + " bedroom", price: 16},
];

const kitchenCountData: any[] = [
    {id: 0, count: 0, label: 0 + " kitchen", value: 0 + " kitchen", price: 0},
    {id: 1, count: 1, label: 1 + " kitchen", value: 1 + " kitchen", price: 10},
    {id: 2, count: 2, label: 2 + " kitchen", value: 2 + " kitchen", price: 12},
    {id: 3, count: 3, label: 3 + " kitchen", value: 3 + " kitchen", price: 14},
];

const bathroomCountData: any[] = [
    {id: 0, count: 0, label: 0 + " bathroom", value: 0 + " bathroom", price: 0},
    {id: 1, count: 1, label: 1 + " bathroom", value: 1 + " bathroom", price: 14},
    {id: 2, count: 2, label: 2 + " bathroom", value: 2 + " bathroom", price: 16},
    {id: 3, count: 3, label: 3 + " bathroom", value: 3 + " bathroom", price: 18},
    {id: 4, count: 4, label: 4 + " bathroom", value: 4 + " bathroom", price: 20},
];


interface ApartmentSizeProps {
    navigation: any;
    //handleIsNavigateToServiceType: () => void;
}

export default function ApartmentSizeComponent (props: ApartmentSizeProps) {
    const dispatch = useDispatch();

    const apartmentSize = useSelector((state: RootState) => state.book.apartmentSize);
    const [inputValue, setInputValue] = useState(apartmentSize.toString());

    const [roomCount, setRoomCount] = useState(1);
    const [kitchenCount, setKitchenCount] = useState(1);
    const [bathRoomCount, setBathRoomCount] = useState(1);

    const [isOpenDropdown, setIsOpenDropdown] = useState(false as boolean);

    const { height } = Dimensions.get('window');
    /*const contentHeight = height - 60 - 100 - 10 - 45 - 10*/ /*- 84*/
    const contentHeight = height > 750 ? height - 243 : height - 225;

    const handleApartmentSize = (newApartmentSize: string) => {
        setInputValue(newApartmentSize);

        const parsedSize = parseFloat(newApartmentSize);

        if (!isNaN(parsedSize)) {
            dispatch(setValue({ key: "apartmentSize", value: parsedSize }));
            dispatch(setValue({ key: "apartmentSizePrice", value: parsedSize * 0.25 }));
            //recalculateTotalPrice(parsedSize);
        } else {
            dispatch(setValue({ key: "apartmentSize", value: 0 }));
            dispatch(setValue({ key: "apartmentSizePrice", value: 0 }));
            //recalculateTotalPrice(0);
        }
    };

    const handleBedRoomCount = (newRoomCount: any) => {
        dispatch(setValue({ key: "bedroomCount", value: newRoomCount}));

        if (newRoomCount > 0) {
            dispatch(setValue({ key: "bedroomCountPrice", value: bedroomCountData[newRoomCount].price}))
        }
        if (newRoomCount === 0) {
            dispatch(setValue({ key: "bedroomCountPrice", value: bedroomCountData[0].price}))
        }

        setRoomCount(newRoomCount);
    }

    const handleKitchenCount = (newKitchenCount: any) => {
        dispatch(setValue({ key: "kitchenCount", value: newKitchenCount}));

        if (newKitchenCount > 0) {
            dispatch(setValue({ key: "kitchenCountPrice", value: kitchenCountData[newKitchenCount].price}))
        }
        if (newKitchenCount === 0) {
            dispatch(setValue({ key: "kitchenCountPrice", value: kitchenCountData[0].price}))
        }
        setKitchenCount(newKitchenCount);
    }

    const handleBathRoomCount = (newBathRoomCount: any) => {
        dispatch(setValue({ key: "bathroomCount", value: newBathRoomCount}));

        if (newBathRoomCount > 0) {
            dispatch(setValue({ key: "bathroomCountPrice", value: bathroomCountData[newBathRoomCount].price}))
        }
        if (newBathRoomCount === 0) {
            dispatch(setValue({ key: "bathroomCountPrice", value: bathroomCountData[0].price}))
        }

        setBathRoomCount(newBathRoomCount);
    }

    useEffect(() => {
        handleBedRoomCount(roomCount);
        handleKitchenCount(kitchenCount);
        handleBathRoomCount(bathRoomCount);
    }, [isOpenDropdown]);

    /*const recalculateTotalPrice = (newApartmentSize: number) => {
        dispatch(setValue({ key: "subTotalPrice", value: newApartmentSize * 0.25 }));
        dispatch(setValue({ key: "taxPrice", value: newApartmentSize * 0.25 * 0.21 }));
        dispatch(setValue({ key: "totalPrice", value: newApartmentSize * 0.25 + newApartmentSize * 0.25 * 0.21 }));
    };*/

    useEffect(() => {
        handleApartmentSize(apartmentSize.toString());
    }, []);


    return (
        <View style={styles.container}>
            <View style={styles.apartmentSize__container_header}>
                <HeaderComponent
                    title={"Property information"}
                    isNotStartBookScreen={true}
                    numberOfPage={1}
                    numberOfPages={8}
                    handleNavigateTo={() => Alert.alert("Go back to main Book screen")}
                />
            </View>
            <View style={{
                height: contentHeight - 85,
                //paddingLeft: 16,
                //paddingRight: 16,
            }}>
                <ScrollView style={styles.apartmentSize__container_content_wrap}>
                    <View style={[styles.apartmentSize__container_content,
                        {
//                            height: height > 750 ? height - 243 : height - 225,
                            //paddingLeft: 16,
                            //paddingRight: 16,
                        }
                    ]}>
                        <View style={styles.apartmentSize__container_content_apartment_size}>
                            <View style={styles.apartmentSize__container_content_label}>
                                <SFProDisplayLight style={styles.apartmentSize__container_content_label_text}>
                                    Apartment size, m<View style={styles.apartmentSize__container_content_label_square}><SFProDisplayLight style={styles.apartmentSize__container_content_label_text_square}>2</SFProDisplayLight></View>
                                </SFProDisplayLight>
                            </View>
                            <View style={styles.apartmentSize__container_content_input_wrap}>
                                <TextInput
                                    style={styles.apartmentSize__container_content_input}
                                    onChangeText={handleApartmentSize}
                                    value={apartmentSize === 0 ? '' : inputValue}
                                    keyboardType="number-pad"
                                />
                            </View>
                        </View>

                        <View style={[
                            styles.apartmentSize__container_content_property_information,
                            {
                                height: contentHeight,
                                width: "100%",
                            }
                        ]}>
                            <View style={[styles.apartmentSize__container_content_bedrooms_count_wrap]}>
                                <BookDropdownPropertyComponent
                                    title="How many bedrooms?"
                                    data={bedroomCountData}
                                    value={bedroomCountData[roomCount - 1] ? bedroomCountData[roomCount].value : bedroomCountData[0].value}
                                    placeholder={bedroomCountData[0].label}
                                    handleValue={handleBedRoomCount}
                                    handleIsOpenDropdown={setIsOpenDropdown}
                                />
                            </View>

                            <View style={styles.apartmentSize__container_content_kitchen_count_wrap}>
                                <BookDropdownPropertyComponent
                                    title="How many kitchens?"
                                    data={kitchenCountData}
                                    value={kitchenCountData[kitchenCount - 1] ? kitchenCountData[kitchenCount].value : kitchenCountData[0].value}
                                    placeholder={kitchenCountData[0].label}
                                    handleValue={handleKitchenCount}
                                    handleIsOpenDropdown={setIsOpenDropdown}
                                />
                            </View>

                            <View style={styles.apartmentSize__container_content_bathrooms_count_wrap}>
                                <BookDropdownPropertyComponent
                                    title="How many bathrooms?"
                                    data={bathroomCountData}
                                    value={bathroomCountData[bathRoomCount - 1] ? bathroomCountData[bathRoomCount].value : bathroomCountData[0].value}
                                    placeholder={bathroomCountData[0].label}
                                    handleValue={handleBathRoomCount}
                                    handleIsOpenDropdown={setIsOpenDropdown}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={[
                styles.apartmentSize__container_content_price_wrap,
                {marginTop: height > 750 ? 0 : height - 115}
            ]}>
                <View style={styles.apartmentSize__container_content_price}>
                    <PriceDropdownComponent navigation={props.navigation}/>
                </View>
                <View style={styles.apartmentSize__container_next_button_wrap}>
                    <BookButtonComponent
                        backgroundButtonColor={apartmentSize === 0 ? "#256951cc" : "#268664"}
                        textButtonColor={apartmentSize === 0 ? "#00000033" : "#fff"}
                        textButtonContent={"Next"}
                        handleNavigateTo={() => props.navigation.navigate('ServiceType')/*props.handleIsNavigateToServiceType*/}
                        inputValue={apartmentSize === 0 ? '' : apartmentSize.toString()}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "flex-start",
        flexDirection: "column",
        flex: 1,
    },
    apartmentSize__container_header: {
        width: "100%",
        backgroundColor: "#fff",
        paddingLeft: 16,
        paddingRight: 16,
    },
    apartmentSize__container_content_wrap: {
        //flex: 1,
    },
    apartmentSize__container_content_below_header_wrap: {

    },
    apartmentSize__container_content: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 16,
        paddingRight: 16,
    },

    apartmentSize__container_content_apartment_size: {

    },
    apartmentSize__container_content_property_information: {
        marginTop: 10,
        //backgroundColor: "#0f8a08",
        //height: 630,
        justifyContent: "flex-start",
    },
    apartmentSize__container_content_bedrooms_count_wrap: {
        position: "relative",
        height: 85,
    },
    apartmentSize__container_content_kitchen_count_wrap: {
        marginTop: 10,
        height: 85,
    },
    apartmentSize__container_content_bathrooms_count_wrap: {
        position: "relative",
        height: 85,
        marginTop: 10,
    },
    apartmentSize__container_content_bathrooms_count_wrap_label_text: {
        color: "#3A3A3A",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "300",
        letterSpacing: 0.48,
    },
    apartmentSize__container_content_label: {

    },
    apartmentSize__container_content_label_text: {
        fontSize: 16,
        lineHeight: 24,
        color: "#3A3A3A",
        fontWeight: "300",
        letterSpacing: 0.48,
    },
    apartmentSize__container_content_label_square: {

    },
    apartmentSize__container_content_label_text_square: {
        fontSize: 10,
        lineHeight: 10,
        position: "absolute",
        top: -14,
    },
    apartmentSize__container_content_input_wrap: {
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
    apartmentSize__container_content_input: {
        fontSize: 18,
        color: "#3A3A3A",
    },
    apartmentSize__container_content_price_wrap: {
        flex: 1,
        position: "absolute",
        width: "100%",
        //top: 300,
    },
    apartmentSize__container_content_price: {
        /*width: "100%",*/
    },
    apartmentSize__container_next_button_wrap: {
    }
});