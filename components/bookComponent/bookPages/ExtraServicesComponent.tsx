import React, {useState} from "react";
import {Alert, Dimensions, ScrollView, StyleSheet, TouchableHighlight, TouchableOpacity} from "react-native";
import {View} from "../../Themed";
import HeaderComponent from "../../header/HeaderComponent";
import BookBelowHeaderComponent from "../bookComponents/BookBelowHeaderComponent";
import BookButtonComponent from "../bookComponents/BookButtonComponent";
import PriceDropdownComponent from "../bookComponents/PriceDropdownComponent";
import {SFProDisplayLight} from "../../StyledText";
import Svg, {Path} from "react-native-svg";

interface ExtraServicesComponentProps {
    extraServices: string[];
    extraServicesPrice: number;
    totalPrice: number;
    subTotalPrice: number;
    taxPrice: number;
    handleExtraServices: (newExtraServices: string[]) => void;
    handleExtraServicesPrice: (newExtraServicesPrice: number) => void;
    handleTotalPrice: () => void;
    handleSubTotalPrice: () => void;
    handleTaxPrice: () => void;
    handleIsNavigateToPropertyInformation: () => void;
}

interface ExtraService {
    value: string;
    price: number;
}

export default function ExtraServicesComponent (props: ExtraServicesComponentProps) {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [selectPrice, setSelectPrice] = useState(0);
    const handleServiceToggle = (service: string, price: number) => {
        const isSelected = selectedServices.includes(service);

        if (isSelected) {
            setSelectedServices(selectedServices.filter((s) => s !== service));
            props.handleExtraServices(selectedServices.filter((s) => s !== service));
            props.handleExtraServicesPrice(props.extraServicesPrice - price);
            setSelectPrice(selectPrice - price);
        } else {
            setSelectedServices([...selectedServices, service]);
            props.handleExtraServicesPrice(props.extraServicesPrice + price);
            setSelectPrice(selectPrice + price);
            props.handleExtraServices([...selectedServices, service]);
        }
    };

    const dataExtraServices: ExtraService[] = ([
        {value: "Inside fridge", price: 10},
        {value: "Inside oven", price: 11},
        {value: "Inside dishwasher", price: 12},
        {value: "Inside washer/dryer", price: 13},
        {value: "Inside microwave", price: 14},
        {value: "Inside kitchen cabinets", price: 15},
        {value: "Inside windows", price: 16},
        {value: "Tile walls", price: 17},
    ])

    const { height } = Dimensions.get('window');
    const { width } = Dimensions.get('window');
    const contentHeight = height > 750 ? height - 243 : height - 225;
    const blockWidth = (width - 32 - 10) / 2;

    return (
        <View style={styles.container}>
            <View style={styles.extraServices__container_header}>
                <HeaderComponent
                    title={"Book"}
                    isNotStartBookScreen={true}
                    handleNavigateTo={props.handleIsNavigateToPropertyInformation}
                />
            </View>
            <View style={{height: contentHeight}}>
                <ScrollView>
                    <View style={styles.extraServices__container_content_below_header_wrap}>
                        <BookBelowHeaderComponent
                            numberOfPage={4}
                            numberOfPages={9}
                            title={"Extra services"}
                        />
                    </View>
                    <View style={styles.extraServices__container_content}>
                        {dataExtraServices.map((item) => {
                            const isSelected = selectedServices.includes(item.value);

                            return (
                                <TouchableOpacity
                                    key={item.value}
                                    onPress={() => handleServiceToggle(item.value, item.price)}
                                    style={[
                                        {
                                            width: blockWidth,
                                        },
                                        isSelected ?
                                            styles.extraServices__container_content_block_wrap_selected
                                            :
                                            styles.extraServices__container_content_block_wrap

                                        ]
                                    }
                                >
                                    <View style={styles.extraServices__container_content_block_title_wrap}>
                                        <SFProDisplayLight
                                            style={[
                                                {
                                                    fontWeight: isSelected ? '300' : '400',
                                                },
                                                styles.extraServices__container_content_block_title_text
                                            ]}
                                        >
                                            {item.value}
                                        </SFProDisplayLight>
                                    </View>
                                    <View style={styles.extraServices__container_content_block_price_wrap}>
                                        <SFProDisplayLight
                                            style={[
                                                {
                                                    fontWeight: isSelected ? '300' : '400',
                                                },
                                                styles.extraServices__container_content_block_title_text
                                            ]}
                                        >
                                            €{item.price}
                                        </SFProDisplayLight>
                                    </View>
                                    {
                                        isSelected && (
                                            <View style={styles.extraServices__container_content_block_selected_icon_wrap}>
                                                <Svg
                                                    width="20"
                                                    height="20"
                                                    fill="none"
                                                >
                                                    <Path
                                                        d="M7.49989 13.4768L4.02489 10.0018L2.84155 11.1768L7.49989 15.8352L17.4999 5.83516L16.3249 4.66016L7.49989 13.4768Z"
                                                        fill="white"
                                                    />
                                                </Svg>
                                            </View>
                                        )
                                    }
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </ScrollView>
            </View>
            <View style={styles.extraServices__container_content_price_wrap}>
                <View style={styles.extraServices__container_content_price}>
                    <PriceDropdownComponent
                        priceComponents={[]}
                        currentPrice={selectPrice}
                        totalPrice={props.totalPrice + selectPrice + (props.totalPrice + selectPrice) * 0.21}
                        subTotalPrice={props.totalPrice + selectPrice}
                        taxPrice={(props.totalPrice + selectPrice) * 0.21}
                        handleTotalPrice={props.handleTotalPrice}
                        handleSubTotalPrice={props.handleSubTotalPrice}
                        handleTaxPrice={props.handleTaxPrice}
                    />
                </View>
                <View style={styles.extraServices__container_next_button_wrap}>
                    <BookButtonComponent
                        backgroundButtonColor={"#268664"}
                        textButtonColor={"#fff"}
                        textButtonContent={"Next"}
                        handleNavigateTo={props.handleIsNavigateToPropertyInformation}
                        inputValue={dataExtraServices[0].value}
                    />
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
    extraServices__container_header: {

    },
    extraServices__container_content_below_header_wrap: {

    },
    extraServices__container_content: {
        paddingTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
    extraServices__container_content_block_wrap: {
        backgroundColor: "#FFFFFF19",
        height: 100,
        padding: 20,
        marginTop: 10,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#E8E7E7",
        borderStyle: "solid",
    },
    extraServices__container_content_block_wrap_selected: {
        backgroundColor: "#F4F9F7",
        height: 100,
        padding: 20,
        marginTop: 10,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#A7CBBE",
        borderStyle: "solid",
    },
    extraServices__container_content_block_title_wrap: {
        backgroundColor: "transparent",
        height: 24,
        justifyContent: "center",
    },
    extraServices__container_content_block_title_text: {
        color: "#3A3A3A",
        fontSize: 16,
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0.32,
    },
    extraServices__container_content_block_price_wrap: {
        marginTop: 10,
        backgroundColor: "transparent",
        height: 20,
        justifyContent: "center",
    },
    extraServices__container_content_block_selected_icon_wrap: {
        width: 24,
        height: 24,
        backgroundColor: "#268664",
        position: "absolute",
        top: 6,
        right: 5,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    extraServices__container_content_price_wrap: {
        flex: 1,
    },
    extraServices__container_content_price: {

    },
    extraServices__container_next_button_wrap: {

    },
})