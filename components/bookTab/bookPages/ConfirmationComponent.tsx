import React, {useState} from "react";
import {Alert, Dimensions, ScrollView, StyleSheet, TouchableHighlight, TouchableOpacity} from "react-native";
import {View} from "../../Themed";
import HeaderComponent from "../../header/HeaderComponent";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {
    SFProDisplayBold,
    SFProDisplayLight,
    SFProDisplayMedium,
    SFProDisplayRegular,
    SFProDisplaySemibold
} from "../../StyledText";
import BookCheckBox from "../../checkbox/BookCheckbox";
import Svg, {Path} from "react-native-svg";
import { Shadow } from 'react-native-shadow-2';


interface ConfirmationComponentProps {
    navigation: any;
}

export default function ConfirmationComponent (props: ConfirmationComponentProps) {
    const serviceType = useSelector((state: RootState) => state.book.serviceType);
    const serviceTypePrice = useSelector((state: RootState) => state.book.serviceTypePrice);
    const extraServices = useSelector((state: RootState) => state.book.extraServices);
    const executionSpeedPrice = useSelector((state: RootState) => state.book.executionSpeedPrice);
    const cleaningDate = useSelector((state: RootState) => state.book.cleaningDate);
    const cleaningTime = useSelector((state: RootState) => state.book.cleaningTime);

    const cleaningFrequencyType = useSelector((state: RootState) => state.book.cleaningFrequencyType);

    const address = useSelector((state: RootState) => state.book.address);
    const secondAddress = useSelector((state: RootState) => state.book.secondAddress);
    const postalCode = useSelector((state: RootState) => state.book.postalCode);
    const city = useSelector((state: RootState) => state.book.city);
    const province = useSelector((state: RootState) => state.book.province);


    const subTotalPrice = useSelector((state: RootState) => state.book.subTotalPrice);
    const taxPrice = useSelector((state: RootState) => state.book.taxPrice);
    const totalPrice = useSelector((state: RootState) => state.book.totalPrice);

    const { height } = Dimensions.get('window');
    const contentHeight = height > 750 ? height - 243 : height - 310;

    const { width } = Dimensions.get('window');
    const buttonWidth = (width - 36 - 10) / 2;


    const extraServicesUnique = extraServices.filter((item, index, self) => {
        return index === self.findIndex((t) => t.value === item.value) && item.value.trim() !== '';
    });

    return (
        <View style={styles.container}>
            <View style={styles.summary__container_header}>
                <HeaderComponent
                    title={"Confirmation"}
                    isNotStartBookScreen={true}
                    numberOfPage={8}
                    numberOfPages={8}
                    handleNavigateTo={() => props.navigation.goBack()}
                />
            </View>
            <View style={{
                height: height - 250,
            }}>
                <ScrollView style={styles.summary__container_content_wrap}>
                    <View style={[
                        styles.summary__container_content_detailed_data_wrap,
                        {
                            height: height - 150,
                        }
                    ]}>
                        <View style={styles.summary__container_content_detailed_data_date}>
                            <View style={styles.summary__container_content_detailed_data_date_wrap}>
                                <SFProDisplaySemibold style={styles.summary__container_content_detailed_data_date_time_text}>Date</SFProDisplaySemibold>
                            </View>
                            <SFProDisplaySemibold style={styles.summary__container_content_detailed_data_date_time_text}>{cleaningDate}</SFProDisplaySemibold>
                        </View>

                        <View style={styles.summary__container_content_detailed_data_time}>
                            <View style={styles.summary__container_content_detailed_data_date_wrap}>
                                <SFProDisplaySemibold style={styles.summary__container_content_detailed_data_date_time_text}>Time</SFProDisplaySemibold>
                            </View>
                            <SFProDisplaySemibold style={styles.summary__container_content_detailed_data_date_time_text}>{cleaningTime}</SFProDisplaySemibold>
                        </View>

                        <View style={styles.summary__container_content_detailed_data_address}>
                            <View style={styles.summary__container_content_detailed_data_date_wrap}>
                                <SFProDisplayLight style={styles.summary__container_content_detailed_data_address_text}>
                                    {address}
                                </SFProDisplayLight>
                                <SFProDisplayLight style={styles.summary__container_content_detailed_data_address_text}>
                                    {secondAddress}
                                </SFProDisplayLight>
                                <SFProDisplayLight style={styles.summary__container_content_detailed_data_address_text}>
                                    {postalCode} {province}
                                </SFProDisplayLight>
                            </View>
                        </View>


                        <View style={{flexDirection: "row"}}>
                            <View
                                style={{
                                    backgroundColor: 'rgb(232,231,231)',
                                    borderRadius: 4,
                                    height: 1,
                                    flex: 1,
                                    alignItems: 'flex-end',
                                    marginTop: 20,
                                }}>
                            </View>
                        </View>

                        <View style={styles.priceDropdown__container_price_content_open_tax_price_wrap}>
                            {
                                serviceType && (
                                    <View style={styles.priceDropdown__container_price_content_open_service_type}>
                                        <View style={styles.priceDropdown__container_price_content_open_service_type_wrap}>
                                            <SFProDisplayBold style={styles.priceDropdown__container_price_content_open_service_type_text}>{
                                                serviceType
                                            } </SFProDisplayBold>
                                            {
                                                cleaningFrequencyType && (
                                                    <SFProDisplayBold style={styles.priceDropdown__container_price_content_open_service_type_text}>
                                                        ({cleaningFrequencyType})
                                                    </SFProDisplayBold>
                                                )
                                            }
                                        </View>
                                        <SFProDisplayBold style={styles.priceDropdown__container_price_content_open_service_type_text}>
                                            €{
                                            serviceTypePrice
                                        }
                                        </SFProDisplayBold>
                                    </View>
                                )
                            }




                            {
                                extraServicesUnique.length > 0 && (
                                    <View style={styles.summary__container_content_detailed_data_service_type}>
                                        <View style={styles.summary__container_content_detailed_data_extra_services_content_wrap}>
                                            <View style={styles.summary__container_content_detailed_data_date_wrap}>
                                                <SFProDisplayLight style={styles.summary__container_content_detailed_data_service_type_text}>Extra services</SFProDisplayLight>
                                            </View>
                                            <View style={styles.summary__container_content_detailed_data_extra_services_wrap}>
                                                {
                                                    extraServicesUnique?.map((item: any, index: number) => {
                                                        return (
                                                            <View
                                                                key={index}
                                                                style={styles.summary__container_content_detailed_data_extra_services_content}
                                                            >
                                                                <SFProDisplayLight style={styles.summary__container_content_detailed_data_extra_services_text}>{item.value}</SFProDisplayLight>
                                                                <SFProDisplayLight style={styles.summary__container_content_detailed_data_extra_services_text}>€{isNaN(item.price) ? '' : item.price.toFixed(2)}</SFProDisplayLight>
                                                            </View>
                                                        )
                                                    })
                                                }
                                            </View>
                                        </View>
                                    </View>
                                )
                            }

                            <View style={styles.summary__container_content_detailed_data_service_type}>
                                <View style={styles.summary__container_content_detailed_data_date_wrap}>
                                    <SFProDisplayLight style={styles.summary__container_content_detailed_data_service_type_text}>How fast</SFProDisplayLight>
                                </View>
                                <SFProDisplayLight style={styles.summary__container_content_detailed_data_service_type_text}>€{isNaN(executionSpeedPrice) ? '' : executionSpeedPrice.toFixed(2)}</SFProDisplayLight>
                            </View>

                            <View style={{flexDirection: "row"}}>
                                <View
                                    style={{
                                        backgroundColor: 'rgb(232,231,231)',
                                        borderRadius: 4,
                                        height: 1,
                                        flex: 1,
                                        alignItems: 'flex-end',
                                        marginTop: 20,
                                    }}>
                                </View>
                            </View>
                            <View style={styles.priceDropdown__container_price_content_open_subTotal_price}>
                                <SFProDisplayRegular
                                    style={styles.priceDropdown__container_price_content_open_tax_price_text}>
                                    Subtotal
                                </SFProDisplayRegular>
                                <View style={styles.priceDropdown__container_price_content_open_tax_price_cost}>
                                    <SFProDisplayRegular
                                        style={styles.priceDropdown__container_price_content_open_tax_price_cost_text}
                                    >
                                        €{isNaN(subTotalPrice) ? '' : subTotalPrice.toFixed(2)}
                                    </SFProDisplayRegular>
                                </View>
                            </View>
                            <View style={styles.priceDropdown__container_price_content_open_tax_price}>
                                <SFProDisplayRegular
                                    style={styles.priceDropdown__container_price_content_open_tax_price_text}>
                                    IVA 21%
                                </SFProDisplayRegular>
                                <View style={styles.priceDropdown__container_price_content_open_tax_price_cost}>
                                    <SFProDisplayRegular
                                        style={styles.priceDropdown__container_price_content_open_tax_price_cost_text}
                                    >
                                        €{isNaN(taxPrice) ? '' : taxPrice.toFixed(2)}
                                    </SFProDisplayRegular>
                                </View>
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <View
                                    style={{
                                        backgroundColor: 'rgb(232,231,231)',
                                        borderRadius: 4,
                                        height: 1,
                                        flex: 1,
                                        alignItems: 'flex-end',
                                        marginTop: 20,
                                    }}>
                                </View>
                            </View>
                            <View style={styles.priceDropdown__container_price_content_open_total_price_wrap}>
                                <View style={styles.priceDropdown__container_price_content_open_total_paid_status_wrap}>
                                    <Svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        style={{marginTop: -1, marginRight: 10}}
                                    >
                                            <Path
                                                d="M20 6.5L9 17.5L4 12.5"
                                                stroke="#268664"
                                            />
                                    </Svg>
                                    <SFProDisplayBold
                                        style={styles.priceDropdown__container_price_content_open_total_price_text}>
                                        Paid
                                    </SFProDisplayBold>
                                </View>

                                <View style={styles.priceDropdown__container_price_content_open_total_price_cost}>
                                    <SFProDisplaySemibold
                                        style={styles.priceDropdown__container_price_content_open_total_price_cost_text}
                                    >
                                        €{isNaN(totalPrice) ? '' : totalPrice.toFixed(2)}
                                    </SFProDisplaySemibold>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>

            <View style={[
                styles.summary__container_content_next_wrap,
                {marginTop: height > 750 ? 0 : height - 170}
            ]}>
                <Shadow
                    startColor={"#efefef"}
                    endColor={"rgba(255,255,255,0)"}
                    distance={50}
                    offset={[0, 0]}
                    paintInside={false}
                    style={{
                        width: "100%",
                        paddingLeft: 16,
                        paddingRight: 16,
                    }}
                    sides={{
                        start: false,
                        end: false,
                        top: true,
                        bottom: false,
                    }}
                    corners={{
                        topStart: true,
                        topEnd: true,
                        bottomStart: false,
                        bottomEnd: false,
                    }}
                >
                    <View style={styles.summary__container_content_policy_wrap}>
                        <TouchableOpacity onPress={() => Alert.alert("Navigate to Cancellation Policy")}>
                            <SFProDisplayRegular style={styles.summary__container_content_policy_link}>
                                The Cancellation Policy
                            </SFProDisplayRegular>
                        </TouchableOpacity>
                    </View>
                </Shadow>
                <View style={styles.summary__container_content_next_button_wrap}>
                    <View style={{width: "100%"}}>
                        <TouchableHighlight
                            style={styles.bookButton__container_content_button}
                            underlayColor={"#256951CC"}
                            onPress={() => {
                                    //props.handleIsNavigateToPayment;
                                    Alert.alert("Navigate to payment")
                            }}
                        >
                            <SFProDisplayMedium
                                style={styles.bookButton__container_content_button_text}
                            >
                                Ok
                            </SFProDisplayMedium>
                        </TouchableHighlight>
                    </View>
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
    summary__container_header: {
        width: "100%",
        backgroundColor: "#fff",
        paddingLeft: 16,
        paddingRight: 16,
    },
    summary__container_content_wrap: {
        paddingLeft: 16,
        paddingRight: 16,
    },
    priceDropdown__container_price_content_open_tax_price_wrap: {
        flexDirection: 'column',
        marginTop: 20,
        paddingBottom: 20,
        //backgroundColor: "#8f8",
    },
    priceDropdown__container_price_content_open_service_type: {
        flexDirection: "row",
        justifyContent: "space-between",
        //paddingTop: 10,
    },
    priceDropdown__container_price_content_open_service_type_wrap: {
        flexDirection: "row",
    },
    priceDropdown__container_price_content_open_service_type_text: {
        color: "#3A3A3A",
        fontWeight: "700",
        fontSize: 18,
        letterSpacing: 0.36,
    },
    priceDropdown__container_price_content_open_subTotal_price: {
        // backgroundColor: "#a60a9e",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    priceDropdown__container_price_content_open_tax_price_text: {
        color: '#000',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 25,
    },
    priceDropdown__container_price_content_open_tax_price_cost: {
        marginLeft: 5,
        backgroundColor: "transparent",
    },
    priceDropdown__container_price_content_open_tax_price_cost_text: {
        color: '#000',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 24,
    },
    priceDropdown__container_price_content_open_tax_price: {
        // backgroundColor: "#270aa6",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    priceDropdown__container_price_content_open_total_price_wrap: {
        // backgroundColor: "#F3f",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    priceDropdown__container_price_content_open_total_paid_status_wrap: {
        flexDirection: "row",
        alignItems: "center",
    },
    priceDropdown__container_price_content_open_total_price_text: {
        color: '#3a3a3a',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 25,
        letterSpacing: 0.36,
    },
    priceDropdown__container_price_content_open_total_price_cost: {

    },
    priceDropdown__container_price_content_open_total_price_cost_text: {
        color: '#3a3a3a',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 25,
        letterSpacing: 0.36,
    },
    summary__container_content_detailed_data_wrap: {
        marginTop: 20,
        //marginTop: 60,
        //backgroundColor: "#264fee",
    },
    summary__container_content_detailed_data_date: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    summary__container_content_detailed_data_time: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    summary__container_content_detailed_data_date_wrap: {

    },
    summary__container_content_detailed_data_date_time_text: {
        color: "#000",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: 16,
        letterSpacing: 0.32,
    },
    summary__container_content_detailed_data_service_type: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        //marginTop: 20,
    },
    summary__container_content_detailed_data_service_type_text: {
        color: "#000",
        fontSize: 18,
        fontStyle: "normal",
        fontWeight: "300",
        lineHeight: 18,
        letterSpacing: 0.32,
    },
    summary__container_content_detailed_data_extra_services_content_wrap: {
        flexDirection: "column",
        width: "100%",
        paddingTop: 20,
    },
    summary__container_content_detailed_data_extra_services_content: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",

    },
    summary__container_content_detailed_data_extra_services_text: {
        color: "#000",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "300",
        lineHeight: 24,
        letterSpacing: 0.32,
    },
    summary__container_content_detailed_data_extra_services_wrap: {
        alignItems: "flex-start",
        paddingLeft: 16,
        paddingTop: 10,
        paddingBottom: 10
    },
    summary__container_content_detailed_data_address: {
        marginTop: 20,
        //marginBottom: 60,
    },
    summary__container_content_detailed_data_address_text: {
        fontSize: 18,
        lineHeight: 24,
        color: "#000",
        fontWeight: "300",
        letterSpacing: 0.36,
    },


    summary__container_content_next_wrap: {
        flex: 1,
        position: "absolute",
        width: "100%",
    },
    summary__container_content_policy_wrap: {
        width: "100%",
        paddingTop: 20,
        paddingBottom: 25,
    },
    summary__container_content_policy_link: {
        fontSize: 12,
        color: "#000",
        marginLeft: 3,
        fontWeight: "400",
        letterSpacing: 0.6,
        textDecorationLine: "underline",
    },
    summary__container_content_next_button_wrap: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 16,
        paddingRight: 16,
    },

    bookButton__container_content_button: {
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 4,
        height: 45,
        zIndex: 2,
        backgroundColor: "#268664",

    },
    bookButton__container_content_button_text: {
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 21,
        letterSpacing: 0.9,
        color: "#fff",
    },
    bookButton__container_content_button_edit_wrap: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "transparent",
        marginTop: -2,
    },
    bookButton__container_content_button_edit: {
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
    bookButton__container_content_button_edit_text: {
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 21,
        letterSpacing: 0.9,
        color: "#268664",
    },
});
