import {View} from "../../Themed";
import {Dimensions, StyleSheet, TouchableHighlight} from "react-native";
import React, {useEffect, useState} from "react";
import {SFProDisplayBold, SFProDisplayLight, SFProDisplayRegular, SFProDisplaySemibold} from "../../StyledText";
import Svg, {Path} from "react-native-svg";
import { Shadow } from 'react-native-shadow-2';

interface PriceDropdownComponentProps {
    priceComponents: {value: string, price: number}[],
    currentPrice: number,
    totalPrice: number,
    subTotalPrice: number,
    taxPrice: number,
    handleTotalPrice: () => void,
    handleSubTotalPrice: () => void,
    handleTaxPrice: () => void,
}

export default function PriceDropdownComponent (props: PriceDropdownComponentProps) {
    const [isOpenFullPriceList, setIsOpenFullPriceList] = useState(false as boolean);

    const { height } = Dimensions.get('window');
    const { width } = Dimensions.get('window');

    useEffect(() => {
        console.log("-------------------------");
        console.log(" - PriceDropdown start - ");
        console.log("priceComponents[]: ", props.priceComponents);
        console.log("currentPrice: ", props.currentPrice);
        console.log("totalPrice: ", props.totalPrice);
        console.log("subTotalPrice: ", props.subTotalPrice);
        console.log("taxPrice: ", props.taxPrice);
        console.log(" - PriceDropdown end - ");
        console.log("-------------------------");
    }, [props.currentPrice]);

    return (
        <View style={styles.container}>
            {
                isOpenFullPriceList && (
                    <View style={{}}>

                    </View>
                )
            }
            <View style={styles.priceDropdown__container_price_wrap}>
                {
                isOpenFullPriceList ?
                    (
                        <View
                            style={[styles.priceDropdown__container_price_content_open, {
                                height: props.priceComponents.length > 0 ? 270 : 230,
                                marginTop: props.priceComponents.length > 0 ? -266 : -236,
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
                                        €{isNaN(props.subTotalPrice) ? '' : props.subTotalPrice.toFixed(2)}
                                    </SFProDisplayRegular>
                                </View>
                            </View>
                            <View style={styles.priceDropdown__container_price_content_open_tax_price_wrap}>
                                {
                                    props.priceComponents.length > 0 && (
                                        <View style={styles.priceDropdown__container_price_content_open_service_type}>
                                            <SFProDisplayBold style={styles.priceDropdown__container_price_content_open_service_type_text}>
                                                {
                                                    props.priceComponents[0].value
                                                }
                                            </SFProDisplayBold>
                                            <SFProDisplayBold style={styles.priceDropdown__container_price_content_open_service_type_text}>
                                                €{
                                                props.priceComponents[0].price
                                                }
                                            </SFProDisplayBold>
                                        </View>
                                    )
                                }
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
                                            €{isNaN(props.subTotalPrice) ? '' : props.subTotalPrice.toFixed(2)}
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
                                            €{isNaN(props.taxPrice) ? '' : props.taxPrice.toFixed(2)}
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
                                        €{isNaN(props.totalPrice) ? '' : props.totalPrice.toFixed(2)}
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
                                    €{isNaN(props.subTotalPrice) ? '' : props.subTotalPrice.toFixed(2)}
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
    },

    priceDropdown__container_price_content_open_service_type: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 10,
/*
        paddingBottom: 10,
*/
    },
    priceDropdown__container_price_content_open_service_type_text: {
        color: "#3A3A3A",
        fontWeight: "700",
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