import {View} from "../../Themed";
import {Dimensions, StyleSheet} from "react-native";
import React, {useEffect, useState} from "react";
import {SFProDisplayBold, SFProDisplayLight, SFProDisplayRegular, SFProDisplaySemibold} from "../../StyledText";
import Svg, {Path} from "react-native-svg";
import { Shadow } from 'react-native-shadow-2';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {setValue} from "../../../reducers/bookReducer";

export default function PriceDropdownComponent () {
    const dispatch = useDispatch();
    const [isOpenFullPriceList, setIsOpenFullPriceList] = useState(false as boolean);

    const apartmentSizePrice = useSelector((state: RootState) => state.book.apartmentSizePrice);
    const serviceType = useSelector((state: RootState) => state.book.serviceType);
    const serviceTypePrice = useSelector((state: RootState) => state.book.serviceTypePrice);
    const extraServicesPrice = useSelector((state: RootState) => state.book.extraServicesPrice);

    const bedroomCountPrice = useSelector((state: RootState) => state.book.bedroomCountPrice);
    const kitchenCountPrice = useSelector((state: RootState) => state.book.kitchenCountPrice);
    const bathroomCountPrice = useSelector((state: RootState) => state.book.bathroomCountPrice);
    const dirtyDegreePrice = useSelector((state: RootState) => state.book.dirtyDegreePrice);

    const cleaningFrequencyType = useSelector((state: RootState) => state.book.cleaningFrequencyType);

    const subTotalPrice =
        apartmentSizePrice +
        serviceTypePrice +
        extraServicesPrice +
        bedroomCountPrice +
        kitchenCountPrice +
        bathroomCountPrice +
        dirtyDegreePrice
    ;
    const taxPrice = subTotalPrice * 0.21;
    const totalPrice = subTotalPrice + taxPrice;

    useEffect(() => {
        dispatch(setValue({ key: "subTotalPrice", value: subTotalPrice }));
        dispatch(setValue({ key: "taxPrice", value: taxPrice }));
        dispatch(setValue({ key: "totalPrice", value: totalPrice }));
    }, [totalPrice]);

    //const totalPrice = useSelector((state: RootState) => state.book.totalPrice);
    //const subTotalPrice = useSelector((state: RootState) => state.book.subTotalPrice);
    //const taxPrice = useSelector((state: RootState) => state.book.taxPrice);

    const { height } = Dimensions.get('window');
    const { width } = Dimensions.get('window');

    return (
        <View style={styles.container}>
            {
                isOpenFullPriceList && (
                    <View style={{
                        width: width,
                        backgroundColor: "rgba(0, 0, 0, 0.50)",
                        height: height - 333,
                        position: "absolute",
                        top: 105 - height, //97
                        left: 0,
                    }}
                          onTouchStart={() => setIsOpenFullPriceList(false)}
                    >
                    </View>
                )
            }
            <View style={styles.priceDropdown__container_price_wrap}>
                {
                isOpenFullPriceList ?
                    (
                        <View
                            style={[styles.priceDropdown__container_price_content_open, {
                                height: extraServicesPrice > 0 ? 270 : 230,
                                marginTop: extraServicesPrice > 0 ? -276 : -246,
                            }]}
                            onTouchStart={() => setIsOpenFullPriceList(false)}
                        >
                            <View style={styles.priceDropdown__container_price_content_open_price_wrap}>
                                <View
                                    style={styles.priceDropdown__container_price_content_open_button_wrap}>
                                    <Svg
                                        width="24"
                                        height="24"
                                        fill="none"
                                    >
                                        <Path
                                            d="M6 14.5L12 8.5L18 14.5"
                                            stroke="black"
                                        />
                                    </Svg>
                                </View>
                                <SFProDisplayLight
                                    style={styles.priceDropdown__container_price_content_close_text}>
                                    Price
                                </SFProDisplayLight>
                                <View
                                    style={{
                                        backgroundColor: 'rgb(232,231,231)',
                                        borderRadius: 4,
                                        height: 1,
                                        flex: 1,
                                        alignItems: 'flex-end',
                                        marginTop: 22,
                                    }}>
                                </View>
                                <View style={styles.priceDropdown__container_price_content_close_price_cost}>
                                    <SFProDisplayRegular
                                        style={styles.priceDropdown__container_price_content_close_price_cost_text}
                                    >
                                        €{isNaN(subTotalPrice) ? '' : subTotalPrice.toFixed(2)}
                                    </SFProDisplayRegular>
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
                                <View>
                                    {
                                        extraServicesPrice > 0 && (
                                            <View style={styles.priceDropdown__container_price_content_open_extra_service_type}>
                                                <SFProDisplayLight style={styles.priceDropdown__container_price_content_open_extra_service_type_text}>
                                                    Extra services
                                                </SFProDisplayLight>
                                                <SFProDisplayLight style={styles.priceDropdown__container_price_content_open_extra_service_type_text}>
                                                    €{
                                                    extraServicesPrice
                                                }
                                                </SFProDisplayLight>
                                            </View>
                                        )
                                    }
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
                            </View>
                            <View style={[
                                styles.priceDropdown__container_price_content_open_total_price_wrap,
                                {
                                    paddingBottom: height > 750 ? 20 : 0,
                                }
                            ]}>
                                <SFProDisplayBold
                                    style={styles.priceDropdown__container_price_content_open_total_price_text}>
                                    Total
                                </SFProDisplayBold>
                                <View style={styles.priceDropdown__container_price_content_open_total_price_cost}>
                                    <SFProDisplaySemibold
                                        style={styles.priceDropdown__container_price_content_open_total_price_cost_text}
                                    >
                                        €{isNaN(totalPrice) ? '' : totalPrice.toFixed(2)}
                                    </SFProDisplaySemibold>
                                </View>
                            </View>
                        </View>
                    ) : (
                        <Shadow
                            startColor={"#efefef"}
                            endColor={"rgba(255,255,255,0)"}
                            distance={60}
                            offset={[0, -84]}
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
                        <View
                            style={styles.priceDropdown__container_price_content_close}
                            onTouchStart={() => setIsOpenFullPriceList(true)}
                        >
                            <View
                                style={styles.priceDropdown__container_price_content_close_button_wrap}>
                                <Svg
                                    width="24"
                                    height="24"
                                    fill="none"
                                >
                                    <Path
                                        d="M6 10L12 16L18 10"
                                        stroke="black"
                                    />
                                </Svg>
                            </View>
                            <SFProDisplayLight
                                style={styles.priceDropdown__container_price_content_close_text}>
                                Price
                            </SFProDisplayLight>
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
                                <SFProDisplayRegular
                                    style={styles.priceDropdown__container_price_content_close_price_cost_text}
                                >
                                    €{isNaN(subTotalPrice) ? '' : subTotalPrice.toFixed(2)}
                                </SFProDisplayRegular>
                            </View>
                        </View>
                        </Shadow>
                    )
                }
            </View>
</View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        //backgroundColor: "#8f8",
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
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 10,
    },
    priceDropdown__container_price_content_open_service_type_text: {
        color: "#3A3A3A",
        fontWeight: "700",
        fontSize: 18,
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
        height: 84,
        marginTop: -84,
        paddingTop: 20,
        paddingBottom: 40,
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 1,
        //backgroundColor: '#7a126c',
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
        color: '#000',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '300',
        lineHeight: 24,
    },
    priceDropdown__container_price_content_close_price_cost: {
        marginTop: 5,
        marginLeft: 5,
        backgroundColor: "transparent",
    },
    priceDropdown__container_price_content_close_price_cost_text: {
        color: '#000',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 24,

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