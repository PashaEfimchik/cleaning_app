import React, {useEffect, useMemo, useState} from "react";
import {View} from "../../Themed";
import {Alert, Dimensions, ScrollView, StyleSheet} from "react-native";
import RadioGroup from "../bookComponents/BookRadioGroup";
import {RadioButtonProps} from "../bookComponents/BookRadioButton";
import HeaderComponent from "../../header/HeaderComponent";
import BookBelowHeaderComponent from "../bookComponents/BookBelowHeaderComponent";
import PriceDropdownComponent from "../bookComponents/PriceDropdownComponent";
import BookButtonComponent from "../bookComponents/BookButtonComponent";


interface ServiceTypeComponentProps {
    serviceType: string;
    serviceTypePrice: number;
    totalPrice: number;
    subTotalPrice: number;
    taxPrice: number;
    onUpdatePrices: (totalPrice: number, subTotalPrice: number, taxPrice: number) => void;
    handleServiceType: (newServiceTypeSize: string) => void;
    handleServiceTypePrice: (newServiceTypePrice: number) => void;
    /*handleTotalPrice: () => void;
    handleSubTotalPrice: () => void;
    handleTaxPrice: () => void;
    */
    handleIsNavigateToApartmentSize: () => void;
    handleIsNavigateToPropertyInformation: () => void;
}

export default function ServiceTypeComponent (props: ServiceTypeComponentProps) {
    const [selectedServiceType, setSelectedServiceType] = useState('1' as string);

    const { height } = Dimensions.get('window');
    const contentHeight = height > 750 ? height - 243 : height - 225;

    // @ts-ignore
    const radioButtons: RadioButtonProps[] = useMemo(() => ([
        {
            id: '1',
            label: 'Basic',
            value: 'Basic',
            price: 49,
            clockwise: '',
        },
        {
            id: '2',
            label: 'Detailed',
            value: 'Detailed',
            price: 15,
            clockwise: '/h',
        },
        {
            id: '3',
            label: 'Move in/out',
            value: 'Move in/out',
            price: 17,
            clockwise: '/h',
        },
        {
            id: '4',
            label: 'After building',
            value: 'After building',
            price: 18,
            clockwise: '/h',
        },
        {
            id: '5',
            label: 'After party',
            value: 'After party',
            price: 19,
            clockwise: '/h',
        },

    ]), []);

    const handleServiceType = (newServiceType: string) => {
        props.onUpdatePrices(
            props.totalPrice,
            props.subTotalPrice,
            props.taxPrice);

        props.handleServiceType(radioButtons[parseFloat(newServiceType) - 1].value as string);
        props.handleServiceTypePrice(parseFloat(radioButtons[parseFloat(newServiceType) - 1].price!));
        setSelectedServiceType(newServiceType);
    }

    useEffect(() => {
        handleServiceType(selectedServiceType);
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.serviceType__container_header}>
                <HeaderComponent
                    title={"Book"}
                    isNotStartBookScreen={true}
                    handleNavigateTo={props.handleIsNavigateToApartmentSize}/>
            </View>
            <View style={{height: contentHeight}}>
                <ScrollView style={styles.serviceType__container_content_wrap}>
                    <View style={styles.serviceType__container_content_below_header_wrap}>
                        <BookBelowHeaderComponent
                            numberOfPage={2}
                            numberOfPages={9}
                            title={"Service type"}
                        />
                    </View>
                    <View style={styles.serviceType__container_content}>
                        <RadioGroup
                            radioButtons={radioButtons}
                            onPress={(item) => handleServiceType(item)}
                            selectedId={selectedServiceType}
                        />
                    </View>
                </ScrollView>
            </View>
            <View style={styles.serviceType__container_content_price_wrap}>
                <View style={styles.serviceType__container_content_price}>
                    <PriceDropdownComponent
                        priceComponents={
                        [
                            {
                                value: radioButtons[parseFloat(selectedServiceType) - 1].value as string,
                                price: parseFloat(radioButtons[parseFloat(selectedServiceType) - 1].price!)
                            }
                        ]}
                        currentPrice={parseFloat(radioButtons[parseFloat(selectedServiceType) - 1].price!)}
                        totalPrice={props.totalPrice/* + props.taxPrice + parseFloat(radioButtons[parseFloat(selectedServiceType) - 1].price!) * 0.21*/ /* + parseFloat(radioButtons[parseFloat(selectedServiceType) - 1].price!)*/}
                        subTotalPrice={props.subTotalPrice/* + parseFloat(radioButtons[parseFloat(selectedServiceType) - 1].price!)*/}
                        taxPrice={props.taxPrice/* + (parseFloat(radioButtons[parseFloat(selectedServiceType) - 1].price!)) * 0.21*/}
                        handleTotalPrice={() => {}/*props.handleTotalPrice*/}
                        handleSubTotalPrice={() => {}/*props.handleSubTotalPrice*/}
                        handleTaxPrice={() => {}/*props.handleTaxPrice*/}
                    />
                </View>
                <View style={styles.serviceType__container_next_button_wrap}>
                    <BookButtonComponent
                        backgroundButtonColor={selectedServiceType === '' ? "#256951cc" : "#268664"}
                        textButtonColor={selectedServiceType === '' ? "#00000033" : "#fff"}
                        textButtonContent={"Next"}
                        handleNavigateTo={props.handleIsNavigateToPropertyInformation}
                        inputValue={selectedServiceType}
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
    serviceType__container_header: {

    },
    serviceType__container_content_wrap: {

    },
    serviceType__container_content_below_header_wrap: {

    },
    serviceType__container_content: {
        marginTop: 10,
    },
    serviceType__container_content_price_wrap: {
        flex: 1,
    },
    serviceType__container_content_price: {

    },
    serviceType__container_next_button_wrap: {

    }
});