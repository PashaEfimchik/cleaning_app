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

const bedroomCountData: any[] = [
    {id: 0, count: 0, label: 0 + " bedroom", value: 0 + " bedroom", price: 0},
    {id: 1, count: 1, label: 1 + " bedroom", value: 1 + " bedroom", price: 10},
    {id: 2, count: 2, label: 2 + " bedroom", value: 2 + " bedroom", price: 12},
    {id: 3, count: 3, label: 3 + " bedroom", value: 3 + " bedroom", price: 14},
    {id: 4, count: 4, label: 4 + " bedroom", value: 4 + " bedroom", price: 16},
    {id: 5, count: 5, label: 5 + " bedroom", value: 5 + " bedroom", price: 18}
];

const cleaningFrequencyTypeData: any[] = [
    {id: 0, label: "Once", value: "Once", price: 0},
    {id: 1, label: "Every week", value: "Every week", price: 30},
    {id: 2, label: "Every 2 weeks", value: "Every 2 weeks", price: 20},
    {id: 3, label: "Every 4 weeks", value: "Every 4 weeks", price: 10},
];

const bathroomCountData: any[] = [
    {id: 0, count: 0, label: 0 + " bathroom", value: 0 + " bathroom", price: 0},
    {id: 1, count: 1, label: 1 + " bathroom", value: 1 + " bathroom", price: 14},
    {id: 2, count: 2, label: 2 + " bathroom", value: 2 + " bathroom", price: 16},
    {id: 3, count: 3, label: 3 + " bathroom", value: 3 + " bathroom", price: 18},
    {id: 4, count: 4, label: 4 + " bathroom", value: 4 + " bathroom", price: 20},
    {id: 5, count: 5, label: 5 + " bathroom", value: 5 + " bathroom", price: 22}
];

const dirtyDegreeData: any[] = [
    {id: 0, label: "Light", value: "Light", price: 0},
    {id: 1, label: "Medium", value: "Medium", price: 10},
    {id: 2, label: "Heavy", value: "Heavy", price: 20},
];

interface PropertyInformationComponentProps {
    bedRoomCount: number;
    bedRoomCountPrice: number;
    cleaningFrequencyType: string;
    cleaningFrequencyTypePrice: number;
    bathRoomCount: number;
    bathRoomCountPrice: number;
    dirtyDegree: string;
    dirtyDegreePrice: number;
    totalPrice: number;
    subTotalPrice: number;
    taxPrice: number;
    serviceType: string;
    serviceTypePrice: number;
    onUpdatePrices: (totalPrice: number, subTotalPrice: number, taxPrice: number) => void;
    handleBedRoomCount: (newRoomCount: number) => void;
    handleBedRoomCountPrice: (newRoomCountPrice: number) => void;
    handleCleaningFrequencyType: (newCleaningFrequencyType: string) => void;
    handleCleaningFrequencyTypePrice: (newCleaningFrequencyTypePrice: number) => void;
    handleBathRoomCount: (newBathRoomCount: number) => void;
    handleBathRoomCountPrice: (newBathRoomCountPrice: number) => void;
    handleDirtyDegree: (newDirtyDegree: string) => void;
    handleDirtyDegreePrice: (newDirtyDegreePrice: number) => void;
    handleIsNavigateToServiceType: () => void;
    handleIsNavigateToExtraServices: () => void;
}

export default function PropertyInformationComponent (props: PropertyInformationComponentProps) {
    const [roomCount, setRoomCount] = useState(0);
    const [cleaningFrequencyTypeCount, setCleaningFrequencyTypeCount] = useState(0);
    const [bathRoomCount, setBathRoomCount] = useState(0);
    const [dirtyDegreeCount, setDirtyDegreeCount] = useState(0);

    const [isOpenDropdown, setIsOpenDropdown] = useState(false as boolean);


    const { height } = Dimensions.get('window');
    const contentHeight = height > 750 ? height - 243 : height - 225;

    const handleBedRoomCount = (newRoomCount: any) => {
        props.onUpdatePrices(
            props.totalPrice,
            props.subTotalPrice,
            props.taxPrice);
        console.log("newRoomCount: ", newRoomCount);

        props.handleBedRoomCount(newRoomCount);
        if (newRoomCount > 0) {
            props.handleBedRoomCountPrice(bedroomCountData[newRoomCount].price);
        }
        if (newRoomCount === 0) {
            props.handleBedRoomCountPrice(bedroomCountData[0].price);
        }
        setRoomCount(newRoomCount);
    }

    const handleCleaningFrequencyCount = (newCleaningFrequencyCount: any) => {
        props.onUpdatePrices(
            props.totalPrice,
            props.subTotalPrice,
            props.taxPrice);
        console.log("newCleaningFrequencyCount: ", newCleaningFrequencyCount);


        if (newCleaningFrequencyCount > 0) {
            props.handleCleaningFrequencyType(cleaningFrequencyTypeData[newCleaningFrequencyCount]);
            props.handleCleaningFrequencyTypePrice(cleaningFrequencyTypeData[newCleaningFrequencyCount].price);
        }
        if (newCleaningFrequencyCount === 0) {

            props.handleCleaningFrequencyTypePrice(cleaningFrequencyTypeData[0].price);
        }
        setCleaningFrequencyTypeCount(newCleaningFrequencyCount);
    }

    const handleBathRoomCount = (newBathRoomCount: any) => {
        props.onUpdatePrices(
            props.totalPrice,
            props.subTotalPrice,
            props.taxPrice);
        console.log("newBathRoomCount: ", newBathRoomCount);

        props.handleBathRoomCount(newBathRoomCount);
        if (newBathRoomCount > 0) {
            props.handleBathRoomCountPrice(bathroomCountData[newBathRoomCount].price);
        }
        if (newBathRoomCount === 0) {
            props.handleBathRoomCountPrice(bathroomCountData[0].price);
        }
        setBathRoomCount(newBathRoomCount);
    }

    const handleDirtyDegreeCount = (newDirtyDegreeCount: any) => {
        props.onUpdatePrices(
            props.totalPrice,
            props.subTotalPrice,
            props.taxPrice);
        console.log("newDirtyDegreeCount: ", newDirtyDegreeCount);

        props.handleDirtyDegree(newDirtyDegreeCount);
        if (newDirtyDegreeCount > 0) {
            props.handleDirtyDegreePrice(dirtyDegreeData[newDirtyDegreeCount].price);
        }
        if (newDirtyDegreeCount === 0) {
            props.handleDirtyDegreePrice(dirtyDegreeData[0].price);
        }
        setDirtyDegreeCount(newDirtyDegreeCount);
    }

    const handleScrollToY = (y: number) => {
        console.log("y: ", y);

    }

    useEffect(() => {
        console.log("height: ", height);
        console.log("contentHeight: ", contentHeight);
        handleBedRoomCount(roomCount);
        handleCleaningFrequencyCount(cleaningFrequencyTypeCount);
        handleBathRoomCount(bathRoomCount);
        handleDirtyDegreeCount(dirtyDegreeCount);
    }, [isOpenDropdown]);

    return (
        <View style={styles.container}>
            <View style={styles.propertyInformation__container_header}>
                <HeaderComponent
                    title={"Book"}
                    isNotStartBookScreen={true}
                    handleNavigateTo={props.handleIsNavigateToServiceType}
                    />
            </View>
            <View style={{height: contentHeight}}>
                <ScrollView>
                    <View style={styles.propertyInformation__container_content_below_header_wrap}>
                        <BookBelowHeaderComponent
                            numberOfPage={3}
                            numberOfPages={9}
                            title={"Property information"}
                        />
                    </View>
                    <View style={styles.propertyInformation__container_content}>
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

                        <View style={styles.propertyInformation__container_content_frequency_count_wrap}>
                            <BookDropdownPropertyComponent
                                title="How often?"
                                data={cleaningFrequencyTypeData}
                                value={cleaningFrequencyTypeData[cleaningFrequencyTypeCount - 1] ? cleaningFrequencyTypeData[cleaningFrequencyTypeCount].value : cleaningFrequencyTypeData[0].value}
                                placeholder={cleaningFrequencyTypeData[0].label}
                                handleValue={handleCleaningFrequencyCount}
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
            <View style={styles.propertyInformation__container_content_price_wrap}>
                <View style={styles.propertyInformation__container_content_price}>
                    <PriceDropdownComponent
                        priceComponents={[
                            {
                                value: props.serviceType,
                                price: props.serviceTypePrice,
                            }]}
                        currentPrice={props.subTotalPrice}
                        totalPrice={props.totalPrice/* + bedroomCountData[roomCount -1] ? bedroomCountData[roomCount - 1].price : bedroomCountData[0].price + (props.totalPrice + bedroomCountData[roomCount -1] ? bedroomCountData[roomCount - 1].price : bedroomCountData[0].price) * 0.21*/}
                        subTotalPrice={props.subTotalPrice/* + bedroomCountData[roomCount -1] ? bedroomCountData[roomCount - 1].price : bedroomCountData[0].price*/}
                        taxPrice={props.taxPrice/* + bedroomCountData[roomCount -1] ? bedroomCountData[roomCount - 1].price : bedroomCountData[0].price) * 0.21*/}
                        handleTotalPrice={() => {}/*props.handleTotalPrice*/}
                        handleSubTotalPrice={() => {}/*props.handleSubTotalPrice*/}
                        handleTaxPrice={() => {}/*props.handleTaxPrice*/}
                    />
                </View>
                <View style={styles.propertyInformation__container_next_button_wrap}>
                    <BookButtonComponent
                        backgroundButtonColor={"#268664"}
                        textButtonColor={"#fff"}
                        textButtonContent={"Next"}
                        handleNavigateTo={props.handleIsNavigateToExtraServices}
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

    },
    propertyInformation__container_content_wrap: {

    },
    propertyInformation__container_content_below_header_wrap: {

    },
    propertyInformation__container_content: {
        marginTop: 20,
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

    propertyInformation__container_content_frequency_count_wrap: {
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

    },
    propertyInformation__container_content_price: {

    },
    propertyInformation__container_next_button_wrap: {

    },
})