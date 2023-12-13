import React, {useEffect, useState} from "react";
import {Alert, Dimensions, ScrollView, StyleSheet, TouchableHighlight, TouchableOpacity} from "react-native";
import {View} from "../../Themed";
import HeaderComponent from "../../header/HeaderComponent";
import BookBelowHeaderComponent from "../bookComponents/BookBelowHeaderComponent";
import BookButtonComponent from "../bookComponents/BookButtonComponent";
import PriceDropdownComponent from "../bookComponents/PriceDropdownComponent";
import {SFProDisplayLight} from "../../StyledText";
import Svg, {Path} from "react-native-svg";
import {useDispatch} from "react-redux";
import {setExtraService, setValue} from "../../../reducers/bookReducer";
import {Button} from "@ui-kitten/components";

interface ExtraServicesComponentProps {
    navigation: any;
    //handleIsNavigateToServiceType: () => void;
    //handleIsNavigateToExecutionSpeed: () => void;
}

interface ExtraService {
    value: string;
    price: number;
    count: number;
}

const dataExtraServices: ExtraService[] = ([
    {value: "Inside fridge", price: 10, count: 1},
    {value: "Inside oven", price: 11, count: 1},
    {value: "Inside dishwasher", price: 12, count: 1},
    {value: "Inside washer/dryer", price: 13, count: 1},
    {value: "Inside microwave", price: 14, count: 1},
    {value: "Inside kitchen cabinets", price: 15, count: 1},
    {value: "Inside windows", price: 16, count: 1},
    {value: "Tile walls", price: 17, count: 1},
])

export default function ExtraServicesComponent (props: ExtraServicesComponentProps) {
    const dispatch = useDispatch();
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [selectPrice, setSelectPrice] = useState(0);

    const [countDataExtraService, setCountDataExtraService] = useState<ExtraService[]>(dataExtraServices.map((item) => {
        return {
            ...item,
            count: 1,
        }
    }));


    const handleServiceToggle = (service: string, price: number) => {
        const isSelected = selectedServices.includes(service);

        if (isSelected) {
            setSelectedServices(selectedServices.filter((s) => s !== service));
            dispatch(setValue({ key: "extraServicesPrice", value: selectPrice - price}));
            setSelectPrice(selectPrice - price);
        } else {
            setSelectedServices([...selectedServices, service]);
            dispatch(setExtraService({ value: service, price: selectPrice + price}));
            dispatch(setValue({ key: "extraServicesPrice", value: selectPrice + price}));
            setSelectPrice(selectPrice + price);
        }
    };

    useEffect(() => {
        handleServiceToggle("", 0);
    }, []);



    const { height } = Dimensions.get('window');
    const { width } = Dimensions.get('window');
    //const contentHeight = /*height > 750 ? height - 243 : height - 225*/;

    return (
        <View style={styles.container}>
            <View style={styles.extraServices__container_header}>
                <HeaderComponent
                    title={"Extra services"}
                    isNotStartBookScreen={true}
                    numberOfPage={3}
                    numberOfPages={8}
                    handleNavigateTo={() => props.navigation.goBack()}
                />
            </View>
            <View style={{height: height - 310}}>
                <ScrollView style={styles.extraServices__container_content_wrap}>
                    <View style={[
                        styles.extraServices__container_content,
                        {
                            height: height - 120,
                        }
                    ]}>
                        {dataExtraServices.map((item, index) => {
                            const isSelected = selectedServices.includes(item.value);

                            return (
                                <TouchableOpacity
                                    key={item.value}
                                    onPress={() => handleServiceToggle(item.value, item.price)}
                                    style={[
                                        {
                                            width: "100%",
                                        },
                                        isSelected ?
                                            styles.extraServices__container_content_block_wrap_selected
                                            :
                                            styles.extraServices__container_content_block_wrap

                                        ]
                                    }
                                >
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
                                    {/*<View style={styles.extraServices__container_content_block_price_wrap}>
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
                                    </View>*/}

                                    {
                                        isSelected && (
                                            <View style={styles.extraServices__container_content_block_selected_count_services_wrap}>
                                                <View style={styles.extraServices__container_content_block_selected_count_services}>
                                                    <TouchableOpacity
                                                        style={styles.extraServices__container_content_block_selected_count_inc}
                                                        onPress={() => {
                                                            setCountDataExtraService(countDataExtraService.map((item, i) => {
                                                                if (i === index) {
                                                                    if (item.count < 1) {
                                                                        handleServiceToggle(item.value, item.price);
                                                                    }
                                                                    return {
                                                                        ...item,
                                                                        count: item.count > 0 ? item.count - 1 : item.count,
                                                                    }
                                                                }
                                                                return item;
                                                            }));
                                                        }}
                                                    >
                                                        <Svg
                                                            style={{
                                                                top: 11,
                                                            }}
                                                            width="24"
                                                            height="24"
                                                            fill="none"
                                                        >
                                                            <Path
                                                                d="M17 1H1"
                                                                stroke="#BCC0BE"
                                                            />
                                                        </Svg>
                                                    </TouchableOpacity>
                                                    <View style={styles.extraServices__container_content_block_count_wrap}>
                                                        <SFProDisplayLight
                                                            style={styles.extraServices__container_content_block_count_text}
                                                        >
                                                            {
                                                                countDataExtraService[index].count === 0 ?
                                                                    item.count
                                                                    :
                                                                    countDataExtraService[index].count
                                                            }
                                                        </SFProDisplayLight>
                                                    </View>
                                                    <TouchableOpacity
                                                        style={styles.extraServices__container_content_block_selected_count_dec}
                                                        onPress={() => {
                                                            setCountDataExtraService(countDataExtraService.map((item, i) => {
                                                                if (i === index) {
                                                                    return {
                                                                        ...item,
                                                                        count: item.count + 1,
                                                                    }
                                                                }
                                                                return item;
                                                            }));
                                                        }}
                                                    >
                                                        <Svg
                                                            width="24"
                                                            height="24"
                                                            fill="none"
                                                        >
                                                            <Path d="M20 12H4" stroke="#BCC0BE" stroke-linecap="round"/>
                                                            <Path d="M12 20V4" stroke="#BCC0BE" stroke-linecap="round"/>
                                                        </Svg>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        )
                                    }
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </ScrollView>
            </View>
            <View style={[
                styles.extraServices__container_content_price_wrap,
                {marginTop: height > 750 ? 0 : height - 115}
            ]}>
                <View style={styles.extraServices__container_content_price}>
                    <PriceDropdownComponent />
                </View>
                <View style={styles.extraServices__container_next_button_wrap}>
                    <BookButtonComponent
                        backgroundButtonColor={"#268664"}
                        textButtonColor={"#fff"}
                        textButtonContent={"Next"}
                        handleNavigateTo={() => props.navigation.navigate('ExecutionSpeed')}
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
        paddingLeft: 16,
        paddingRight: 16,
    },
    extraServices__container_content_below_header_wrap: {

    },
    extraServices__container_content_wrap: {

    },
    extraServices__container_content: {
        marginTop: 10,
        flexDirection: "column",
        //justifyContent: "space-between",
        flexWrap: "wrap",
        paddingLeft: 16,
        paddingRight: 16,
    },
    extraServices__container_content_block_wrap: {
        backgroundColor: "#FFFFFF19",
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 18,
        paddingRight: 20,
        paddingBottom: 18,
        paddingLeft: 20,
        marginTop: 10,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#E8E7E7",
        borderStyle: "solid",
    },
    extraServices__container_content_block_wrap_selected: {
        backgroundColor: "#F4F9F7",
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 18,
        paddingRight: 20,
        paddingBottom: 18,
        paddingLeft: 54,
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
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "300",
        lineHeight: 20,
        letterSpacing: 0.4,
    },
    extraServices__container_content_block_count_wrap: {
    },
    extraServices__container_content_block_count_text: {
        color: "#000",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "300",
        lineHeight: 20,
        letterSpacing: 0.4,
        position: "absolute",
        alignSelf: "center",
        top: 3,
    },
    extraServices__container_content_block_price_wrap: {
        //marginTop: 10,
        backgroundColor: "transparent",
        height: 24,
        justifyContent: "center",
    },
    extraServices__container_content_block_selected_count_services_wrap: {
        backgroundColor: "transparent",
    },
    extraServices__container_content_block_selected_count_services: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 80,
        backgroundColor: "transparent",
    },
    extraServices__container_content_block_selected_count_inc: {
        position: "absolute",
        left: 0,
        top: -18,
        height: 60,
        width: 36,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    extraServices__container_content_block_selected_count_dec: {
        position: "absolute",
        right: 0,
        top: -18,
        height: 60,
        width: 36,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    extraServices__container_content_block_selected_icon_wrap: {
        width: 24,
        height: 24,
        backgroundColor: "#268664",
        position: "absolute",
        top: 18,
        left: 20,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    extraServices__container_content_price_wrap: {
        flex: 1,
        position: "absolute",
        width: "100%",
    },
    extraServices__container_content_price: {

    },
    extraServices__container_next_button_wrap: {

    },
})