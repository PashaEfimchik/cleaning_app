import React, {useEffect, useMemo, useState} from "react";
import {View} from "../../Themed";
import {Dimensions, ScrollView, StyleSheet} from "react-native";
import RadioGroup from "../bookComponents/BookRadioGroup";
import {RadioButtonProps} from "../bookComponents/BookRadioButton";
import HeaderComponent from "../../header/HeaderComponent";
import PriceDropdownComponent from "../bookComponents/PriceDropdownComponent";
import BookButtonComponent from "../bookComponents/BookButtonComponent";
import {useDispatch, useSelector} from "react-redux";
import {setValue} from "../../../reducers/bookReducer";
import {SFProDisplayRegular} from "../../StyledText";
import {RootState} from "../../../store/store";


interface ServiceTypeComponentProps {
    navigation: any;
    //handleIsNavigateToApartmentSize: () => void;
    //handleIsNavigateToExtraServices: () => void;
}

export default function ServiceTypeComponent (props: ServiceTypeComponentProps) {
    const dispatch = useDispatch();
    const [selectedServiceType, setSelectedServiceType] = useState('1' as string);

    const apartmentSizePrice = useSelector((state: RootState) => state.book.apartmentSizePrice);

    const bedroomCountPrice = useSelector((state: RootState) => state.book.bedroomCountPrice);
    const kitchenCountPrice = useSelector((state: RootState) => state.book.kitchenCountPrice);
    const bathroomCountPrice = useSelector((state: RootState) => state.book.bathroomCountPrice);
    //const dirtyDegreePrice = useSelector((state: RootState) => state.book.dirtyDegreePrice);

    const radioButtons =  [
        {
            id: '1',
            label: 'Basic',
            value: 'Basic',
            price: ((apartmentSizePrice + bathroomCountPrice + bedroomCountPrice + kitchenCountPrice) * 1).toFixed(2),
            clockwise: '',
        },
        {
            id: '2',
            label: 'Detailed',
            value: 'Detailed',
            price: ((apartmentSizePrice + bathroomCountPrice + bedroomCountPrice + kitchenCountPrice) * 1.2).toFixed(2),
            clockwise: '',
        },
        {
            id: '3',
            label: 'Move in/out',
            value: 'Move in/out',
            price: ((apartmentSizePrice + bathroomCountPrice + bedroomCountPrice + kitchenCountPrice) * 1.3).toFixed(2),
            clockwise: '',
        },
        {
            id: '4',
            label: 'After building',
            value: 'After building',
            price: ((apartmentSizePrice + bathroomCountPrice + bedroomCountPrice + kitchenCountPrice) * 1.4).toFixed(2),
            clockwise: '',
        },
        {
            id: '5',
            label: 'After party',
            value: 'After party',
            price: ((apartmentSizePrice + bathroomCountPrice + bedroomCountPrice + kitchenCountPrice) * 1.5).toFixed(2),
            clockwise: '',
        },
    ];


    const { height } = Dimensions.get('window');
    //const contentHeight = height /*height > 750 ? height - 243 : height - 225*/;


    const handleServiceType = (newServiceType: string) => {
        setSelectedServiceType(newServiceType);
        if (newServiceType) {
            dispatch(setValue({key: "serviceType", value: radioButtons[parseFloat(newServiceType) - 1].value as string}));
            dispatch(setValue({key: "serviceTypePrice", value: parseFloat(radioButtons[parseFloat(newServiceType) - 1].price!)}));
        }
    }

    useEffect(() => {
        console.log("useEffect: ", (apartmentSizePrice + bathroomCountPrice + bedroomCountPrice + kitchenCountPrice).toFixed(2));

        handleServiceType(selectedServiceType);
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.serviceType__container_header}>
                <HeaderComponent
                    title={"Service type"}
                    isNotStartBookScreen={true}
                    numberOfPage={2}
                    numberOfPages={8}
                    handleNavigateTo={() => {

                        props.navigation.goBack();
                    }}/>
            </View>
            <View style={{height: height - 310}}>
                <ScrollView style={styles.serviceType__container_content_wrap}>
                    <View style={styles.serviceType__container_content_description}>
                        <SFProDisplayRegular style={styles.serviceType__container_content_description_text}>
                            Prices have a fixed and a variable rate based on m<View style={styles.apartmentSize__container_content_label_square}><SFProDisplayRegular style={styles.apartmentSize__container_content_label_text_square}>2</SFProDisplayRegular></View>. If you add extra services, the price will update automatically.
                        </SFProDisplayRegular>
                    </View>
                    <View style={[
                        styles.serviceType__container_content,
                        {
                            height: height - 300,
                        }
                    ]}>
                        <RadioGroup
                            radioButtons={radioButtons}
                            onPress={(item) => handleServiceType(item)}
                            selectedId={selectedServiceType}
                        />
                    </View>
                </ScrollView>
            </View>
            <View style={[
                styles.serviceType__container_content_price_wrap,
                {marginTop: height > 750 ? 0 : height - 115}
            ]}>
                <View style={styles.serviceType__container_content_price}>
                    <PriceDropdownComponent navigation={props.navigation} />
                </View>
                <View style={styles.serviceType__container_next_button_wrap}>
                    <BookButtonComponent
                        backgroundButtonColor={selectedServiceType === '' ? "#256951cc" : "#268664"}
                        textButtonColor={selectedServiceType === '' ? "#00000033" : "#fff"}
                        textButtonContent={"Next"}
                        handleNavigateTo={() => props.navigation.navigate('ExtraServices')/*props.handleIsNavigateToExtraServices*/}
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
        paddingLeft: 16,
        paddingRight: 16,
    },
    serviceType__container_content_wrap: {
        paddingLeft: 16,
        paddingRight: 16,
    },
    serviceType__container_content_below_header_wrap: {

    },
    serviceType__container_content: {
        marginTop: 20,
    },
    serviceType__container_content_description: {
        marginTop: 20,
    },
    serviceType__container_content_description_text: {
        color: "#3A3A3A",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "400",
        letterSpacing: 0.32,
    },
    apartmentSize__container_content_label_square: {
        paddingRight: 5,
    },
    apartmentSize__container_content_label_text_square: {
        fontSize: 8,
        fontWeight: "600",
        lineHeight: 10,
        position: "absolute",
        top: -14,
    },
    serviceType__container_content_price_wrap: {
        flex: 1,
        position: "absolute",
        width: "100%",
    },
    serviceType__container_content_price: {

    },
    serviceType__container_next_button_wrap: {

    }
});