import {View} from "../../Themed";
import HeaderComponent from "../../header/HeaderComponent";
import React, {useEffect} from "react";
import {Alert, Dimensions, ScrollView, StyleSheet, TextInput} from "react-native";
import BookBelowHeaderComponent from "../bookComponents/BookBelowHeaderComponent";
import {SFProDisplayLight} from "../../StyledText";
import PriceDropdownComponent from "../bookComponents/PriceDropdownComponent";
import BookButtonComponent from "../bookComponents/BookButtonComponent";

interface ApartmentSizeProps {
    apartmentSize: number;
    apartmentSizePrice: number;
    totalPrice: number;
    subTotalPrice: number;
    taxPrice: number;
    onUpdatePrices: (totalPrice: number, subTotalPrice: number, taxPrice: number) => void;
    handleApartmentSize: (newApartmentSize: number) => void;
    handleApartmentSizePrice: (newApartmentSizePrice: number) => void;
    /*handleTotalPrice: () => void;
    handleSubTotalPrice: () => void;
    handleTaxPrice: () => void;*/
    handleIsNavigateToServiceType: () => void;
}

export default function ApartmentSizeComponent (props: ApartmentSizeProps) {
    const inputValue = props.apartmentSize === 0 ? '' : props.apartmentSize.toString();

    const { height } = Dimensions.get('window');
    /*const contentHeight = height - 60 - 100 - 10 - 45 - 10*/ /*- 84*/

    const contentHeight = height > 750 ? height - 243 : height - 225;

    const handleApartmentSize = (newApartmentSize: number) => {

        console.log("-------------------------");
        console.log(" - ApartmentSizeComponent start - ");
        console.log("newApartmentSize: ", newApartmentSize);
        console.log("totalPrice: ", props.totalPrice);
        console.log("subTotalPrice: ", props.subTotalPrice);
        console.log("taxPrice: ", props.taxPrice);
        console.log(" - ApartmentSizeComponent end - ");
        console.log("-------------------------");

        //props.onUpdatePrices(newApartmentSize, newApartmentSize, newApartmentSize * 0.21);

        props.onUpdatePrices;

        props.handleApartmentSize(newApartmentSize || 0);
        props.handleApartmentSizePrice(newApartmentSize * 0.25);
    }

    useEffect(() => {
        handleApartmentSize(parseFloat(inputValue!));
    }, []);

    const handleNavigateToServiceType = () => {
        Alert.alert("Navigate to Service type screen");
        props.handleIsNavigateToServiceType();
    }

    return (
        <View style={styles.container}>
            <View style={styles.apartmentSize__container_header}>
                <HeaderComponent
                    title={"Book"}
                    isNotStartBookScreen={false}
                    handleNavigateTo={() => {}}
                />
            </View>
            <View style={{height: contentHeight}}>
                <ScrollView style={styles.apartmentSize__container_content_wrap}>
                    <View style={styles.apartmentSize__container_content_below_header_wrap}>
                        <BookBelowHeaderComponent numberOfPage={1} numberOfPages={9} title="Apartment size" />
                    </View>
                    <View style={styles.apartmentSize__container_content}>
                        <View style={styles.apartmentSize__container_content_label}>
                            <SFProDisplayLight style={styles.apartmentSize__container_content_label_text}>
                                Type in M<View style={styles.apartmentSize__container_content_label_square}><SFProDisplayLight style={styles.apartmentSize__container_content_label_text_square}>2</SFProDisplayLight></View>
                            </SFProDisplayLight>
                        </View>
                        <View style={styles.apartmentSize__container_content_input_wrap}>
                            <TextInput
                                style={styles.apartmentSize__container_content_input}
                                onChangeText={(text) => handleApartmentSize(parseFloat(text) || 0)}
                                value={inputValue}
                                keyboardType="number-pad"
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.apartmentSize__container_content_price_wrap}>
                <View style={styles.apartmentSize__container_content_price}>
                    <PriceDropdownComponent
                        priceComponents={[]}
                        currentPrice={parseFloat(inputValue) * 0.25}
                        totalPrice={props.totalPrice}
                        subTotalPrice={props.subTotalPrice}
                        taxPrice={props.taxPrice}
                        handleTotalPrice={() => {}/*props.handleTotalPrice*/}
                        handleSubTotalPrice={() => {}/*props.handleSubTotalPrice*/}
                        handleTaxPrice={() => {}/*props.handleTaxPrice*/}
                    />
                </View>
                <View style={styles.apartmentSize__container_next_button_wrap}>
                    <BookButtonComponent
                        backgroundButtonColor={inputValue === '' ? "#256951cc" : "#268664"}
                        textButtonColor={inputValue === '' ? "#00000033" : "#fff"}
                        textButtonContent={"Next"}
                        handleNavigateTo={props.handleIsNavigateToServiceType}
                        inputValue={inputValue}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "column",
        backgroundColor: "#ff3",
    },
    apartmentSize__container_header: {
        width: "100%",
        backgroundColor: "#fff",
    },
    apartmentSize__container_content_wrap: {
        flex: 7,
    },
    apartmentSize__container_content_below_header_wrap: {

    },
    apartmentSize__container_content: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    apartmentSize__container_content_label: {

    },
    apartmentSize__container_content_label_text: {
        fontSize: 16,
        lineHeight: 24,
        color: "#3A3A3A",
        fontWeight: "300",
        letterSpacing: 0.48,
    },
    apartmentSize__container_content_label_square: {

    },
    apartmentSize__container_content_label_text_square: {
        fontSize: 10,
        lineHeight: 10,
        position: "absolute",
        top: -14,
    },
    apartmentSize__container_content_input_wrap: {
        marginTop: 5,
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#E8E7E7",
        borderStyle: "solid",
    },
    apartmentSize__container_content_input: {

    },
    apartmentSize__container_content_price_wrap: {
        flex: 1,
    },
    apartmentSize__container_content_price: {

    },
    apartmentSize__container_next_button_wrap: {
    }
});