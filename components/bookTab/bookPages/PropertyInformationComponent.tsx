import React, {useEffect, useState} from "react";
import {Alert, Dimensions, ScrollView, StyleSheet} from "react-native";
import {View} from "../../Themed";
import {SFProDisplayLight} from "../../StyledText";
import HeaderComponent from "../../header/HeaderComponent";
import BookBelowHeaderComponent from "../bookComponents/BookBelowHeaderComponent";
import BookButtonComponent from "../bookComponents/BookButtonComponent";
import PriceDropdownComponent from "../bookComponents/PriceDropdownComponent";
import BookDropdownProperty from "../bookComponents/BookDropdownProperty";
import BookDropdownPropertyComponent from "../bookComponents/BookDropdownPropertyComponent";
import {useDispatch} from "react-redux";
import {setValue} from "../../../reducers/bookReducer";

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

const dirtyDegreeData: any[] = [
    {id: 0, label: "Light", value: "Light", price: 0},
    {id: 1, label: "Medium", value: "Medium", price: 10},
    {id: 2, label: "Heavy", value: "Heavy", price: 20},
];

interface PropertyInformationComponentProps {
    handleIsNavigateToExtraServices: () => void;
    handleIsNavigateToDateTime: () => void;
}

export default function PropertyInformationComponent (props: PropertyInformationComponentProps) {
    const dispatch = useDispatch();

    const [roomCount, setRoomCount] = useState(0);
    const [kitchenCount, setKitchenCount] = useState(0);
    const [bathRoomCount, setBathRoomCount] = useState(0);
    const [dirtyDegreeCount, setDirtyDegreeCount] = useState(0);

    const [isOpenDropdown, setIsOpenDropdown] = useState(false as boolean);


    const { height } = Dimensions.get('window');
    //const contentHeight = height > 750 ? height - 243 : height - 225;

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

    const handleDirtyDegreeCount = (newDirtyDegreeCount: any) => {
        if (newDirtyDegreeCount > 0) {
            dispatch(setValue({ key: "dirtyDegree", value: dirtyDegreeData[newDirtyDegreeCount].value}));
            dispatch(setValue({ key: "dirtyDegreePrice", value: dirtyDegreeData[newDirtyDegreeCount].price}))
        }
        if (newDirtyDegreeCount === 0) {
            dispatch(setValue({ key: "dirtyDegree", value: dirtyDegreeData[newDirtyDegreeCount].value}));
            dispatch(setValue({ key: "dirtyDegreePrice", value: dirtyDegreeData[0].price}))
        }

        setDirtyDegreeCount(newDirtyDegreeCount);
    }


    useEffect(() => {
        handleBedRoomCount(roomCount);
        handleKitchenCount(kitchenCount);
        handleBathRoomCount(bathRoomCount);
        handleDirtyDegreeCount(dirtyDegreeCount);
    }, [isOpenDropdown]);

    return (
        <View style={styles.container}>
            <View style={styles.propertyInformation__container_header}>
                <HeaderComponent
                    title={"Property information"}
                    isNotStartBookScreen={true}
                    numberOfPage={4}
                    numberOfPages={10}
                    handleNavigateTo={props.handleIsNavigateToExtraServices}
                    />
            </View>
            <View style={{
                height: height - 310,
                marginTop: 100,
            }}>
                <ScrollView style={styles.propertyInformation__container_content_wrap}>
                    <View style={[
                        styles.propertyInformation__container_content,
                        {
                            height: height - 300,
                        }
                    ]}>
                        <View style={[styles.propertyInformation__container_content_bedrooms_count_wrap,
                            {
                                //backgroundColor: "#21d37a",
                                //height: 270,
                            }
                        ]}>
                            <BookDropdownPropertyComponent
                                title="How many bedrooms?"
                                data={bedroomCountData}
                                value={bedroomCountData[roomCount - 1] ? bedroomCountData[roomCount].value : bedroomCountData[0].value}
                                placeholder={bedroomCountData[0].label}
                                handleValue={handleBedRoomCount}
                                handleIsOpenDropdown={setIsOpenDropdown}
                                />
                        </View>

                        <View style={styles.propertyInformation__container_content_kitchen_count_wrap}>
                            <BookDropdownPropertyComponent
                                title="How many kitchens?"
                                data={kitchenCountData}
                                value={kitchenCountData[kitchenCount - 1] ? kitchenCountData[kitchenCount].value : kitchenCountData[0].value}
                                placeholder={kitchenCountData[0].label}
                                handleValue={handleKitchenCount}
                                handleIsOpenDropdown={setIsOpenDropdown}
                            />
                        </View>

                        <View style={styles.propertyInformation__container_content_bathrooms_count_wrap}>
                            <BookDropdownPropertyComponent
                                title="How many bathrooms?"
                                data={bathroomCountData}
                                value={bathroomCountData[bathRoomCount - 1] ? bathroomCountData[bathRoomCount].value : bathroomCountData[0].value}
                                placeholder={bathroomCountData[0].label}
                                handleValue={handleBathRoomCount}
                                handleIsOpenDropdown={setIsOpenDropdown}
                                />
                        </View>

                        <View style={styles.propertyInformation__container_content_dirty_degree_count_wrap}>
                            <BookDropdownPropertyComponent
                                title="How dirty?"
                                data={dirtyDegreeData}
                                value={dirtyDegreeData[dirtyDegreeCount - 1] ? dirtyDegreeData[dirtyDegreeCount].value : dirtyDegreeData[0].value}
                                placeholder={dirtyDegreeData[0].label}
                                handleValue={handleDirtyDegreeCount}
                                handleIsOpenDropdown={setIsOpenDropdown}
                                />
                        </View>

                    </View>
                </ScrollView>
            </View>
            <View style={[
                styles.propertyInformation__container_content_price_wrap,
                {marginTop: height > 750 ? 0 : height - 125}
            ]}>
                <View style={styles.propertyInformation__container_content_price}>
                    <PriceDropdownComponent/>
                </View>
                <View style={styles.propertyInformation__container_next_button_wrap}>
                    <BookButtonComponent
                        backgroundButtonColor={"#268664"}
                        textButtonColor={"#fff"}
                        textButtonContent={"Next"}
                        handleNavigateTo={props.handleIsNavigateToDateTime}
                        inputValue={bedroomCountData[0].label}
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
    propertyInformation__container_header: {
        paddingLeft: 16,
        paddingRight: 16,
    },
    propertyInformation__container_content_wrap: {
        paddingLeft: 16,
        paddingRight: 16,
    },
    propertyInformation__container_content_below_header_wrap: {

    },
    propertyInformation__container_content: {
        marginTop: 30,
        // backgroundColor: "#0f8a08",
        height: 630,
        justifyContent: "flex-start",
    },
    propertyInformation__container_content_bedrooms_count_wrap: {
        position: "relative",
        height: 85,
    },
    propertyInformation__container_content_bedrooms_count_wrap_label: {

    },
    propertyInformation__container_content_bedrooms_count_wrap_label_text: {
        color: "#3A3A3A",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "300",
        letterSpacing: 0.48,
    },
    propertyInformation__container_content_bedrooms_wrap_dropdown: {
        marginTop: 5,
        height: 85,
    },

    propertyInformation__container_content_kitchen_count_wrap: {
        marginTop: 10,
        height: 85,
    },

    propertyInformation__container_content_dirty_degree_count_wrap: {
        marginTop: 10,
        height: 85,
    },

    propertyInformation__container_content_bathrooms_count_wrap: {
        marginTop: 20,
        height: 85,
    },

    propertyInformation__container_content_price_wrap: {
        flex: 1,
        position: "absolute",
        width: "100%",
    },
    propertyInformation__container_content_price: {

    },
    propertyInformation__container_next_button_wrap: {

    },
})