import React, {useState} from "react";
import {Alert, Dimensions, ScrollView, StyleSheet, TouchableHighlight} from "react-native";
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


interface EditSummaryComponentProps {
    navigation: any;
}

export default function EditSummaryComponent (props: EditSummaryComponentProps) {
    const [isCheckedCancellationPolicy, setIsCheckedCancellationPolicy] = useState(false as boolean);
    const serviceType = useSelector((state: RootState) => state.book.serviceType);
    const extraServicesPrice = useSelector((state: RootState) => state.book.extraServicesPrice);
    const extraServices = useSelector((state: RootState) => state.book.extraServices);
    const executionSpeed = useSelector((state: RootState) => state.book.executionSpeed);

    const cleaningDate = useSelector((state: RootState) => state.book.cleaningDate);
    const cleaningTime = useSelector((state: RootState) => state.book.cleaningTime);

    const address = useSelector((state: RootState) => state.book.address);
    const secondAddress = useSelector((state: RootState) => state.book.secondAddress);
    const postalCode = useSelector((state: RootState) => state.book.postalCode);
    const city = useSelector((state: RootState) => state.book.city);
    const province = useSelector((state: RootState) => state.book.province);

    const { height } = Dimensions.get('window');
    const contentHeight = height > 750 ? height - 243 : height - 225;

    const { width } = Dimensions.get('window');
    const buttonWidth = (width - 36 - 10) / 2;


    const extraServicesUnique = extraServices.filter((item, index, self) => {
        return index === self.findIndex((t) => t.value === item.value) && item.value.trim() !== '';
    });

    return (
        <View style={styles.container}>
            <View style={styles.summary__container_header}>
                <HeaderComponent
                    title={"Summary edit"}
                    isNotStartBookScreen={true}
                    numberOfPage={8}
                    numberOfPages={8}
                    handleNavigateTo={() => props.navigation.goBack()}
                />
            </View>
            <View style={{
                height: height - 280,
                //marginTop: 100,
            }}>
                <ScrollView style={styles.summary__container_content_wrap}>
                    <View style={[
                        styles.summary__container_content_detailed_data_wrap,
                        {
                            //marginTop: isEdit ? 24 : 60,
                        }
                    ]}>
                        <View style={styles.summary__container_content_detailed_data_date}>
                                    <View style={styles.summary__container_content_detailed_data_pen_wrap}>
                                        <TouchableHighlight
                                            style={styles.bookButton__container_content_button_pen_wrap}
                                            underlayColor={"transparent"}
                                            onPress={() => props.navigation.navigate("DateTime")}
                                        >
                                            <Svg
                                                width="24"
                                                height="24"
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
                                        </TouchableHighlight>
                                        <View style={[
                                            styles.summary__container_content_detailed_data_date_wrap,
                                            {
                                                marginLeft: 34,
                                            }
                                        ]}>
                                            <SFProDisplaySemibold style={styles.summary__container_content_detailed_data_date_time_text}>Date</SFProDisplaySemibold>
                                        </View>
                                    </View>

                            <SFProDisplaySemibold style={styles.summary__container_content_detailed_data_date_time_text}>{cleaningDate}</SFProDisplaySemibold>
                        </View>

                        <View style={styles.summary__container_content_detailed_data_time}>
                                    <View style={styles.summary__container_content_detailed_data_pen_wrap}>
                                        <TouchableHighlight
                                            style={styles.bookButton__container_content_button_pen_wrap}
                                            underlayColor={"transparent"}
                                            onPress={() => props.navigation.navigate("DateTime")}
                                        >
                                            <Svg
                                                width="24"
                                                height="24"
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
                                        </TouchableHighlight>
                                        <View style={[
                                            styles.summary__container_content_detailed_data_date_wrap,
                                            {
                                                marginLeft: 34,
                                            }
                                        ]}>
                                            <SFProDisplaySemibold style={styles.summary__container_content_detailed_data_date_time_text}>Time</SFProDisplaySemibold>
                                        </View>
                                    </View>

                            <SFProDisplaySemibold style={styles.summary__container_content_detailed_data_date_time_text}>{cleaningTime}</SFProDisplaySemibold>
                        </View>

                        <View style={styles.summary__container_content_detailed_data_address}>
                                    <View style={styles.summary__container_content_detailed_data_pen_wrap}>
                                        <TouchableHighlight
                                            style={styles.bookButton__container_content_button_pen_wrap}
                                            underlayColor={"transparent"}
                                            onPress={() => props.navigation.navigate("PropertyAddress")}
                                        >
                                            <Svg
                                                width="24"
                                                height="24"
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
                                        </TouchableHighlight>
                                        <View style={[
                                            styles.summary__container_content_detailed_data_date_wrap,
                                            {
                                                marginLeft: 34,
                                            }
                                        ]}>
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

                        <View style={styles.summary__container_content_detailed_data_service_type}>
                            {
                                    <View style={styles.summary__container_content_detailed_data_pen_wrap}>
                                        <TouchableHighlight
                                            style={styles.bookButton__container_content_button_pen_wrap}
                                            underlayColor={"transparent"}
                                            onPress={() => props.navigation.navigate("ServiceType")}
                                        >
                                            <Svg
                                                width="24"
                                                height="24"
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
                                        </TouchableHighlight>
                                        <View style={[
                                            styles.summary__container_content_detailed_data_date_wrap,
                                            {
                                                marginLeft: 34,
                                            }
                                        ]}>
                                            <SFProDisplayLight style={[
                                                styles.summary__container_content_detailed_data_service_type_text,
                                                {
                                                    lineHeight: 24,
                                                }
                                            ]}>Service type</SFProDisplayLight>
                                        </View>
                                    </View>
                            }
                            <SFProDisplayLight style={styles.summary__container_content_detailed_data_service_type_text}>{serviceType}</SFProDisplayLight>
                        </View>

                        {
                            extraServicesUnique.length > 0 && (
                                <View style={styles.summary__container_content_detailed_data_service_type}>
                                    <View style={styles.summary__container_content_detailed_data_pen_wrap}>
                                        <TouchableHighlight
                                            style={styles.bookButton__container_content_button_pen_wrap}
                                            underlayColor={"transparent"}
                                            onPress={() => props.navigation.navigate("ExtraServices")}
                                        >
                                            <Svg
                                                width="24"
                                                height="24"
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
                                        </TouchableHighlight>
                                        <View style={[
                                            styles.summary__container_content_detailed_data_date_wrap,
                                            {
                                                marginLeft: 34,
                                            }
                                        ]}>
                                            <SFProDisplayLight style={[
                                                styles.summary__container_content_detailed_data_service_type_text,
                                                {
                                                    lineHeight: 24,
                                                }
                                            ]}>Extra services</SFProDisplayLight>
                                        </View>
                                    </View>

                                    <View style={styles.summary__container_content_detailed_data_extra_services_wrap}>
                                        {
                                            extraServicesUnique?.map((item: any, index: number) => {
                                                return (
                                                    <SFProDisplayLight key={index} style={styles.summary__container_content_detailed_data_service_type_text}>{item.value}</SFProDisplayLight>
                                                )
                                            })
                                        }
                                    </View>
                                </View>
                            )
                        }

                        <View style={styles.summary__container_content_detailed_data_service_type}>
                            <View style={styles.summary__container_content_detailed_data_pen_wrap}>
                                <TouchableHighlight
                                    style={styles.bookButton__container_content_button_pen_wrap}
                                    underlayColor={"transparent"}
                                    onPress={() => props.navigation.navigate("ExecutionSpeed")}
                                >
                                    <Svg
                                        width="24"
                                        height="24"
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
                                </TouchableHighlight>
                                <View style={[
                                    styles.summary__container_content_detailed_data_date_wrap,
                                    {
                                        marginLeft: 34,
                                    }
                                ]}>
                                    <SFProDisplayLight style={[
                                        styles.summary__container_content_detailed_data_service_type_text,
                                        {
                                            lineHeight: 24,
                                        }
                                    ]}>How fast</SFProDisplayLight>
                                </View>
                            </View>
                            <SFProDisplayLight style={styles.summary__container_content_detailed_data_service_type_text}>x{executionSpeed}</SFProDisplayLight>
                        </View>

                    </View>
                </ScrollView>
            </View>

            <View style={[
                styles.summary__container_content_next_wrap,
                {marginTop: height > 750 ? 0 : height - 190}
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
                        <BookCheckBox
                            title={"I understand and accept"}
                            isChecked={isCheckedCancellationPolicy}
                            link={"The Cancellation Policy"}
                            onLinkPress={() => Alert.alert("Navigate to Cancellation Policy")}
                            onPress={() => setIsCheckedCancellationPolicy(!isCheckedCancellationPolicy)}
                        />
                    </View>
                </Shadow>
                        <View style={styles.summary__container_content_next_button_wrap}>
                            <View style={{width: "100%"}}>
                                <TouchableHighlight
                                    style={[
                                        styles.bookButton__container_content_button,
                                        {
                                            backgroundColor: isCheckedCancellationPolicy ? "#268664" : "#256951cc",
                                        }
                                    ]}
                                    underlayColor={"#256951CC"}
                                    onPress={() => {
                                        if (isCheckedCancellationPolicy) {
                                            Alert.alert("Save order");
                                            //setIsEdit(false);
                                        } else {
                                            Alert.alert("Please, accept the Cancellation Policy")
                                        }
                                    }}
                                >
                                    <SFProDisplayMedium
                                        style={[styles.bookButton__container_content_button_text,
                                            {
                                                color: isCheckedCancellationPolicy ? "#fff" : "#00000033",
                                            }
                                        ]}
                                    >
                                        Save
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
    priceDropdown__container_price_content_open_extra_service_type: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 10,
    },
    priceDropdown__container_price_content_open_extra_service_type_text: {
        color: "#3A3A3A",
        fontWeight: "300",
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
        lineHeight: 25,
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
        marginTop: 10,
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
    summary__container_content_detailed_data_pen_wrap: {
        flexDirection: 'row',

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
        lineHeight: 24,
        letterSpacing: 0.32,
    },
    summary__container_content_detailed_data_service_type: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    summary__container_content_detailed_data_service_type_text: {
        color: "#000",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "300",
        //lineHeight: 16,
        letterSpacing: 0.32,
    },
    summary__container_content_detailed_data_extra_services_wrap: {
        alignItems: "flex-end",
    },
    apartmentSize__container_content_label_square: {

    },
    apartmentSize__container_content_label_text_square: {
        fontSize: 10,
        lineHeight: 10,
        position: "absolute",
        top: -14,
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
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 20,
        paddingBottom: 25,
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
    bookButton__container_content_button_pen_wrap: {
        position: "absolute",
        width: 25,
        height: 25,
        borderRadius: 12,
    },
});
