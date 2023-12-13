import {View} from "../../Themed";
import {Dimensions, LayoutAnimation, StyleSheet, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from "react";
import {SFProDisplayBold, SFProDisplayLight, SFProDisplayRegular, SFProDisplaySemibold} from "../../StyledText";
import Svg, {Path} from "react-native-svg";
import { Shadow } from 'react-native-shadow-2';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {setValue} from "../../../reducers/bookReducer";

interface PriceDropdownProps {
    navigation: any;
}

export default function PriceDropdownComponent (props: PriceDropdownProps) {
    const dispatch = useDispatch();
    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;

    const [isOpenFullPriceList, setIsOpenFullPriceList] = useState(false as boolean);

    const serviceType = useSelector((state: RootState) => state.book.serviceType);
    const serviceTypePrice = useSelector((state: RootState) => state.book.serviceTypePrice);
    const extraServices = useSelector((state: RootState) => state.book.extraServices);
    const extraServicesPrice = useSelector((state: RootState) => state.book.extraServicesPrice);

    const executionSpeedPrice = useSelector((state: RootState) => state.book.executionSpeedPrice);

    const subTotalPrice =
        serviceTypePrice +
        extraServicesPrice +
        executionSpeedPrice
    ;
    const taxPrice = subTotalPrice * 0.21;
    const totalPrice = subTotalPrice + taxPrice;

    useEffect(() => {
        dispatch(setValue({ key: "subTotalPrice", value: subTotalPrice }));
        dispatch(setValue({ key: "taxPrice", value: taxPrice }));
        dispatch(setValue({ key: "totalPrice", value: totalPrice }));
    }, [dispatch, subTotalPrice, taxPrice, totalPrice, props.navigation, serviceType, extraServices]);

    const handleToggleFullPriceList = () => {
        LayoutAnimation.configureNext({
            duration: 200,
            create: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.opacity,
            },
            update: {
                type: LayoutAnimation.Types.linear,
            },
            delete: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.opacity,
            }
        });
        setIsOpenFullPriceList(!isOpenFullPriceList);
    }

    /*const handleCloseFullPriceList = () => {
        LayoutAnimation.configureNext({
            duration: 200,
            create: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.opacity,
            },
            update: {
                type: LayoutAnimation.Types.linear,
            },
            delete: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.opacity,
            }
        });
        setIsOpenFullPriceList(false);
    }*/

    return (
        <View style={styles.container}>
            {
                isOpenFullPriceList && (
                    <View style={{
                        width: width,
                        backgroundColor: "rgba(0, 0, 0, 0.50)",
                        height:
                            serviceType ? extraServices.length > 1 ? height -226 - (extraServices.length -1) * 28 : height - 226 : height - 196,
                        position: "absolute",
                        top: 105 - height, //97
                        left: 0,
                    }}
                          onTouchStart={() => handleToggleFullPriceList()}
                    >
                    </View>
                )
            }
            <View style={styles.priceDropdown__container_price_wrap}>
                {
                    !isOpenFullPriceList && (
                        <Shadow
                            startColor={"#efefef"}
                            endColor={"rgba(255,255,255,0)"}
                            distance={60}
                            offset={[0, -64]}
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
                        />
                    )
                }

                <TouchableOpacity
                        activeOpacity={1}
                        style={[
                            styles.priceDropdown__container_price_content_close,
                            {
                                backgroundColor: "#fff",
                                marginTop:
                                    isOpenFullPriceList ?
                                        serviceType ?
                                            executionSpeedPrice > 0 ?
                                                extraServices.length > 1 ?
                                                    -256 - (extraServices.length - 1) * 32
                                                    :
                                                    -246
                                                :
                                                extraServices.length > 1 ?
                                                    -216 - (extraServices.length - 1) * 32
                                                    :
                                                    -216
                                            :
                                            -186
                                        : -84,
                                height: "auto",
                            }
                        ]}
                        onPress={() => handleToggleFullPriceList()}
                    >
                    <View style={styles.priceDropdown__container_price_content_button_wrap}>
                        <View
                            style={styles.priceDropdown__container_price_content_close_button_wrap}>
                            <Svg
                                width="24"
                                height="24"
                                fill="none"
                            >
                                {
                                    isOpenFullPriceList ? (
                                        <Path
                                            d="M6 14.5L12 8.5L18 14.5"
                                            stroke="black"
                                        />
                                    ) : (
                                        <Path
                                            d="M6 10L12 16L18 10"
                                            stroke="black"
                                        />
                                    )
                                }
                            </Svg>
                        </View>
                        <SFProDisplayBold
                            style={styles.priceDropdown__container_price_content_close_text}>
                            Total
                        </SFProDisplayBold>
                        <View
                            style={{
                                marginLeft: 5,
                                backgroundColor: 'rgb(232,231,231)',
                                borderRadius: 4,
                                height: 1,
                                flex: 1,
                                alignItems: 'flex-end',
                                marginTop: 22,
                            }}>
                        </View>
                        <View style={styles.priceDropdown__container_price_content_close_price_cost}>
                            <SFProDisplaySemibold
                                style={styles.priceDropdown__container_price_content_close_price_cost_text}
                            >
                                €{isNaN(totalPrice) ? '' : totalPrice.toFixed(2)}
                            </SFProDisplaySemibold>
                        </View>
                    </View>
                    {
                        isOpenFullPriceList && (
                            <View
                                style={styles.priceDropdown__container_price_content_open}>
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

                                <View style={styles.priceDropdown__container_price_content_open_tax_price_wrap}>
                                    {
                                        serviceType && (
                                            <View style={styles.priceDropdown__container_price_content_open_service_type}>
                                                <View style={styles.priceDropdown__container_price_content_open_service_type_wrap}>
                                                    <SFProDisplayLight style={styles.priceDropdown__container_price_content_open_service_type_text}>{
                                                        serviceType
                                                    } </SFProDisplayLight>
                                                </View>
                                                <SFProDisplayLight style={styles.priceDropdown__container_price_content_open_service_type_text}>
                                                    €{serviceTypePrice.toFixed(2)}
                                                </SFProDisplayLight>
                                            </View>
                                        )
                                    }
                                    <View>
                                        {
                                            extraServices.length > 1 && (
                                                <View style={styles.priceDropdown__container_price_content_open_extra_service_type}>
                                                    {
                                                        extraServices.map((extra: any, index: any) => (
                                                            <View key={index} style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: 10, }}>
                                                                {
                                                                    extra.value && (
                                                                        <>
                                                                            <SFProDisplayLight style={styles.priceDropdown__container_price_content_open_extra_service_type_text}>
                                                                                {extra.value}
                                                                            </SFProDisplayLight>

                                                                            <SFProDisplayLight style={styles.priceDropdown__container_price_content_open_extra_service_type_text}>
                                                                                €{extra.price.toFixed(2)}
                                                                            </SFProDisplayLight>
                                                                        </>
                                                                    )
                                                                }
                                                            </View>
                                                        ))
                                                    }
                                                </View>
                                            )
                                        }
                                    </View>
                                    <View>
                                        {
                                            executionSpeedPrice > 0 && (
                                                <View style={styles.priceDropdown__container_price_content_open_service_type}>
                                                    <View style={styles.priceDropdown__container_price_content_open_service_type_wrap}>
                                                        <SFProDisplayLight style={styles.priceDropdown__container_price_content_open_service_type_text}>
                                                            How fast
                                                        </SFProDisplayLight>
                                                    </View>
                                                    <SFProDisplayLight style={styles.priceDropdown__container_price_content_open_service_type_text}>
                                                        €{executionSpeedPrice.toFixed(2)}
                                                    </SFProDisplayLight>
                                                </View>
                                            )
                                        }
                                    </View>
                                </View>
                            </View>
                        )
                    }


                    </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        backgroundColor: "#da33ff",
        borderRadius: 4,
    },

    priceDropdown__container_price_content_open_service_type: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 10,
/*
        paddingBottom: 10,
*/

    },
    priceDropdown__container_price_content_open_service_type_wrap: {
        flexDirection: "row",

    },
    priceDropdown__container_price_content_open_extra_service_type: {
        flexDirection: "column",
        //paddingTop: 10,
    },
    priceDropdown__container_price_content_open_service_type_text: {
        color: "#3A3A3A",
        fontWeight: "300",
        fontSize: 18,
        lineHeight: 24,
        letterSpacing: 0.36,
    },
    priceDropdown__container_price_content_open_extra_service_type_text: {
        color: "#3A3A3A",
        fontWeight: "300",
        fontSize: 18,
        letterSpacing: 0.36,

    },
    priceDropdown__container_price_wrap: {
/*
        height: 84,
*/
        /*paddingTop: 20,
        paddingBottom: 40,*/
/*        marginTop: -84,*/
        width: '100%',

    },
    priceDropdown__container_price_content_open_price_wrap: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 10,
        //borderTopLeftRadius: 4,
        //borderTopRightRadius: 4,
        //paddingLeft: 16,
        //paddingRight: 16,
    },
    priceDropdown__container_price_content_button_wrap: {
        width: "100%",
        flexDirection: "row",
        paddingLeft: 16,
        paddingRight: 16,
    },
    priceDropdown__container_price_content_close_button_wrap: {
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
        marginTop: 3,
    },
    priceDropdown__container_price_content_close_button: {

    },
    priceDropdown__container_price_content_open_button_wrap: {
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
        marginTop: 4,
    },
    priceDropdown__container_price_content_open_tax_price_wrap: {
        flexDirection: 'column',

    },
    priceDropdown__container_price_content_open_total_price_wrap: {
        // backgroundColor: "#F3f",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    priceDropdown__container_price_content_close: {
        /*height: 24,*/
        //height: 84,
        //marginTop: -84,
        paddingTop: 24,
        paddingBottom: 34,
        flexDirection: 'column',
        flex: 1,
        width: "100%",
        //paddingLeft: 16,
        //paddingRight: 16,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        overflow: "hidden",
    },

    priceDropdown__container_price_content_open: {
/*
        height: 24,
*/
        /*height: 230,
        marginTop: -230,*/
        justifyContent: 'flex-start',
        flexDirection: 'column',
        flex: 1,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        paddingLeft: 16,
        paddingRight: 16,
        // backgroundColor: '#1258bb',
    },
    priceDropdown__container_price_content_close_text: {
        marginTop: 5,
        color: "#3A3A3A",
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 24,
        letterSpacing: 0.36,
    },
    priceDropdown__container_price_content_close_price_cost: {
        marginTop: 5,
        marginLeft: 5,
        backgroundColor: "transparent",
    },
    priceDropdown__container_price_content_close_price_cost_text: {
        color: "#3A3A3A",
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 24,
        letterSpacing: 0.36,
    },

    priceDropdown__container_price_content_open_subTotal_price: {
        // backgroundColor: "#a60a9e",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,

    },
    priceDropdown__container_price_content_open_tax_price: {
        // backgroundColor: "#270aa6",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
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
});