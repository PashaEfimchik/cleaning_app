import {
    Alert,
    ScrollView,
    StyleSheet,
    StatusBar,
    TouchableHighlight,
    Image
} from "react-native";
import React, {useState} from "react";
import {View} from "../Themed";
import {
    InterSemibold,
    SFProDisplayLight,
    SFProDisplayMedium,
    SFProDisplayRegular,
    SFProDisplaySemibold
} from "../StyledText";
import {Dropdown} from "react-native-element-dropdown";
import Svg, {Path} from "react-native-svg";
import BookCheckBox from "../checkbox/BookCheckbox";

interface BookScreenProps {
    handleIsNavigateToDateTimeScreen: () => void;
}

export default function BookScreenTmp ({handleIsNavigateToDateTimeScreen}: BookScreenProps) {
    const [isOpenDropdownType, setIsOpenDropdownType] = useState(false);
    const [isOpenDropdownApartmentSize, setIsOpenDropdownApartmentSize] = useState(false);

    const [typeOfCleaning, setTypeOfCleaning] = useState("");
    const [apartmentSize, setApartmentSize] = useState("");

    const [addWindowCleaning, setAddWindowCleaning] = useState(false);

    const [typeOfCLeaningPrice, setTypeOfCleaningPrice] = useState(0);
    const [apartmentSizePrice, setApartmentSizePrice] = useState(0);

    const [price, setPrice] = useState(0);

    const handleCleaningTypeChange = (item: any) => {
        setTypeOfCleaning(item.value);
        setTypeOfCleaningPrice(item.price);
        calculateTotalPrice(item.price, apartmentSizePrice, false);
    }

    const handleApartmentSizeChange = (item: any) => {
        setApartmentSize(item.value);
        setApartmentSizePrice(item.price);
        calculateTotalPrice(typeOfCLeaningPrice, item.price, false);
    }

    const handleAddWindowCleaning = () => {
        setAddWindowCleaning(!addWindowCleaning);
        calculateTotalPrice(typeOfCLeaningPrice, apartmentSizePrice, !addWindowCleaning);
    }

    const calculateTotalPrice = (cleaningType: number, size: number, isWindowCleaning: boolean) => {
        if (cleaningType && size) {
            if (isWindowCleaning) {
                setPrice(cleaningType + size + 30);
                return;
            } else {
                setPrice(cleaningType + size);
            }
        }
    }

    const handleNavigateToDateTimeScreen = () => {
        Alert.alert("Navigate to DateTimeScreen");
        handleIsNavigateToDateTimeScreen();
    }

    return (
        <View
            style={{
                flex: 1,
                height: '100%',
            }}
        >
        <ScrollView
            style={{
                flex: 1,
            }}
        >
            <View style={styles.bookScreen__container_title_wrap}>
                <SFProDisplaySemibold
                    style={styles.bookScreen__container_title_text}
                >
                    Maid for perfection
                </SFProDisplaySemibold>
            </View>

            <View style={styles.bookScreen__container_subtitle_wrap}>
                <InterSemibold
                    style={styles.bookScreen__container_subtitle_text}
                >
                    Professional cleaning 7 days a week starting at € 10/hour
                </InterSemibold>
            </View>

            <View style={styles.bookScreen__container_book_wrap}>
                <View style={styles.bookScreen__container_book_wrap_content}>
                    <View style={styles.bookScreen__container_book_wrap_title}>
                        <SFProDisplayRegular
                            style={styles.bookScreen__container_book_wrap_title_text}
                        >
                            Book
                        </SFProDisplayRegular>
                    </View>
                    <View style={styles.bookScreen__container_book_wrap_block_content}>
                        <View
                            style={{
                                ...styles.bookScreen__container_book_wrap_regular_cleaning_wrap,
                                borderBottomColor: isOpenDropdownType ? "#268664" : "#fff",
                                borderBottomWidth: isOpenDropdownType ? 2 : 0,
                                borderBottomLeftRadius: isOpenDropdownType ? 0 : 4,
                                borderBottomRightRadius: isOpenDropdownType ? 0 : 4,
                            }}
                        >
                            <View
                                style={styles.bookScreen__container_book_wrap_regular_cleaning_content}
                            >
                                <Dropdown
                                    onFocus={() => setIsOpenDropdownType(true)}
                                    onBlur={() => setIsOpenDropdownType(false)}
                                    placeholder={"Type of cleaning"}
                                    placeholderStyle={styles.bookScreen__container_book_wrap_regular_cleaning_dropdown_placeholder}
                                    style={styles.bookScreen__container_book_wrap_regular_cleaning_dropdown}
                                    data={[
                                        {label: 'Basic', value: 'Basic', price: 10},
                                        {label: 'Detailed', value: 'Detailed', price: 20},
                                        {label: 'Move in', value: 'Move in', price: 30},
                                        {label: 'Move out', value: 'Move out', price: 40},
                                        {label: 'After builders', value: 'After builders', price: 50},
                                    ]}
                                    containerStyle={{
                                        marginTop: 15,
                                        borderRadius: 4,
                                        paddingTop: 8,
                                        paddingBottom: 8,
                                    }}
                                    itemContainerStyle={{
                                        backgroundColor: "#fff",
                                    }}
                                    labelField="label"
                                    valueField="value"
                                    value={typeOfCleaning}
                                    onChange={(item) => handleCleaningTypeChange(item)}
                                    iconColor={"#fff"}
                                    selectedTextStyle={{
                                        color: "#000",
                                        fontSize: 20,
                                        fontWeight: "300",
                                        fontStyle: "normal",
                                        height: 43,
                                        paddingTop: 24
                                    }}
                                    renderRightIcon={() => (
                                        <Svg
                                            width="24"
                                            height="25"
                                            fill="none"
                                        >
                                            {
                                                isOpenDropdownType ? (
                                                    <Path
                                                        d="M6 14.5L12 8.5L18 14.5"
                                                        stroke="#268664"
                                                    />
                                                ) : (
                                                    <Path
                                                        d="M6 10.5L12 16.5L18 10.5"
                                                        stroke="#268664"
                                                    />
                                                )
                                            }
                                        </Svg>
                                    )}
                                />
                                {
                                    typeOfCleaning && (
                                        <View style={styles.bookScreen__container_book_wrap_regular_cleaning_dropdown_after_label}>
                                            <SFProDisplayLight style={styles.bookScreen__container_book_wrap_regular_cleaning_dropdown_after_label_text}>
                                                Type of cleaning
                                            </SFProDisplayLight>
                                        </View>
                                    )
                                }
                                {
                                    !typeOfCleaning && (
                                        <View style={styles.bookScreen__container_book_wrap_regular_cleaning_dropdown_choose}>
                                            <SFProDisplayLight style={styles.bookScreen__container_book_wrap_regular_cleaning_dropdown_choose_text}>
                                                Choose
                                            </SFProDisplayLight>
                                        </View>
                                    )
                                }
                            </View>

                        </View>

                        <View
                            style={{
                                ...styles.bookScreen__container_book_wrap_regular_apartment_size_wrap,
                                borderBottomColor: isOpenDropdownApartmentSize ? "#268664" : "#fff",
                                borderBottomWidth: isOpenDropdownApartmentSize ? 2 : 0,
                                borderBottomLeftRadius: isOpenDropdownApartmentSize ? 0 : 4,
                                borderBottomRightRadius: isOpenDropdownApartmentSize ? 0 : 4,
                            }}
                        >
                            <View
                                style={styles.bookScreen__container_book_wrap_regular_apartment_size_content}
                            >
                                <Dropdown
                                    onFocus={() => setIsOpenDropdownApartmentSize(true)}
                                    onBlur={() => setIsOpenDropdownApartmentSize(false)}
                                    placeholder={"Apartment size"}
                                    placeholderStyle={styles.bookScreen__container_book_wrap_regular_apartment_size_dropdown_placeholder}
                                    style={styles.bookScreen__container_book_wrap_regular_apartment_size_dropdown}
                                    data={[
                                        {label: '10-20', value: '10-20', price: 10},
                                        {label: '20-30', value: '20-30', price: 20},
                                        {label: '30-50', value: '30-50', price: 30},
                                        {label: '50-100', value: '50-100', price: 40},
                                        {label: '100+', value: '100+', price: 50}
                                    ]}
                                    containerStyle={{
                                        marginTop: 15,
                                        borderRadius: 4,
                                        paddingTop: 8,
                                        paddingBottom: 8,
                                    }}
                                    itemContainerStyle={{
                                        backgroundColor: "#fff",
                                    }}
                                    labelField="label"
                                    valueField="value"
                                    value={apartmentSize}
                                    onChange={(item) => handleApartmentSizeChange(item)}
                                    iconColor={"#fff"}
                                    selectedTextStyle={{
                                        color: "#000",
                                        fontSize: 20,
                                        fontWeight: "300",
                                        fontStyle: "normal",
                                        height: 43,
                                        paddingTop: 24
                                    }}
                                    renderRightIcon={() => (
                                        <Svg
                                            width="24"
                                            height="25"
                                            fill="none"
                                        >
                                            {
                                                isOpenDropdownApartmentSize ? (
                                                    <Path
                                                        d="M6 14.5L12 8.5L18 14.5"
                                                        stroke="#268664"
                                                    />
                                                ) : (
                                                    <Path
                                                        d="M6 10.5L12 16.5L18 10.5"
                                                        stroke="#268664"
                                                    />
                                                )
                                            }
                                        </Svg>
                                    )}
                                />
                                {
                                    apartmentSize && (
                                        <View style={styles.bookScreen__container_book_wrap_regular_cleaning_dropdown_after_label}>
                                            <SFProDisplayLight style={styles.bookScreen__container_book_wrap_regular_cleaning_dropdown_after_label_text}>
                                                Apartment size
                                            </SFProDisplayLight>
                                        </View>
                                    )
                                }
                                {
                                    !apartmentSize && (
                                        <View style={styles.bookScreen__container_book_wrap_regular_cleaning_dropdown_choose}>
                                            <SFProDisplayLight style={styles.bookScreen__container_book_wrap_regular_cleaning_dropdown_choose_text}>
                                                Choose
                                            </SFProDisplayLight>
                                        </View>
                                    )
                                }
                            </View>
                        </View>

                        <View
                            style={styles.bookScreen__container_book_wrap_regular_window_cleaning_wrap}
                            onTouchEndCapture={() => handleAddWindowCleaning()}
                        >
                            <BookCheckBox
                                title="Add Window cleaning"
                                isChecked={addWindowCleaning}
                                onPress={() => handleAddWindowCleaning()}
                            />
                        </View>

                    </View>
                </View>

                <View style={styles.bookScreen__container_book_wrap_regular_price_wrap}>
                    <View style={styles.bookScreen__container_book_wrap_regular_price_content}>
                        <SFProDisplayLight
                            style={styles.bookScreen__container_book_wrap_regular_price_content_text}>
                            Price
                        </SFProDisplayLight>
                        <View
                            style={{
                                marginLeft: 5,
                                backgroundColor: 'rgba(38,134,100,0.2)',
                                borderRadius: 4,
                                height: 1,
                                flex: 1,
                                alignItems: 'flex-end',
                                marginTop: 22,
                            }}>
                        </View>
                        <View style={styles.bookScreen__container_book_wrap_regular_price_content_cost}>
                            <SFProDisplayRegular
                                style={styles.bookScreen__container_book_wrap_regular_price_content_cost_text}
                            >
                                € {
                                    typeOfCleaning && apartmentSize && price !== 0 ? (price) : ("")
                                }
                            </SFProDisplayRegular>
                        </View>
                    </View>
                </View>
            </View>

            <Image
                source={require('../../assets/images/scrolling_bg.png')}
                style={{
                    width: '100%',
                    height: 75,
                }}/>
        </ScrollView>
            <View style={styles.bookScreen__container_button_wrap}>
                <Image
                    source={require('../../assets/images/scrolling_bg.png')}
                    style={{
                        position: 'absolute',
                        top: -36,
                        left: 0,
                        width: '100%',
                        height: 75,
                        zIndex: 1,
                    }}/>
                <TouchableHighlight
                    style={{...styles.bookScreen__container_button, backgroundColor: price !== 0 ? "#268664" : "rgba(37, 105, 81, 0.8)"}}
                    underlayColor={"#256951CC"}
                    onPress={() => {
                        if (price) {
                            handleNavigateToDateTimeScreen()
                        } else {
                            Alert.alert("Please enter data")
                        }
                    }}
                >
                    <SFProDisplayMedium
                        style={{...styles.bookScreen__container_button_text, color: price !== 0 ? "#fff" : "rgba(37, 105, 81, 0.8)"}}
                    >
                        Next
                    </SFProDisplayMedium>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bookScreen__container: {
        width: '100%',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: StatusBar.currentHeight,
    },
    bookScreen__container_title_wrap: {
        width: '100%',
        paddingBottom: 10,
        paddingTop: 70,
    },
    bookScreen__container_title_text: {
        color: '#268664',
        fontSize: 50,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 50,
        letterSpacing: 1,
    },
    bookScreen__container_subtitle_wrap: {
        paddingBottom: 40,
    },
    bookScreen__container_subtitle_text: {
        color: '#268664',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 20,
        letterSpacing: 1,
    },
    bookScreen__container_book_wrap: {
        backgroundColor: '#26866433',
        width: '100%',
        borderRadius: 4,
        height: 296,
    },
    bookScreen__container_book_wrap_content: {
        backgroundColor: 'transparent',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 30,
    },
    bookScreen__container_book_wrap_title: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        paddingBottom: 20,
    },
    bookScreen__container_book_wrap_title_text: {
        color: '#268664',
        fontSize: 22,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 26,
        letterSpacing: 0.44,
    },
    bookScreen__container_book_wrap_block_content: {
        height: 206,
        backgroundColor: 'transparent',
    },
    bookScreen__container_book_wrap_regular_cleaning_wrap: {
        height: 75,
        backgroundColor: '#fff',
        borderRadius: 4,
/*        paddingLeft: 20,
        paddingRight: 20,*/
        paddingTop: 16,
        paddingBottom: 16,
        alignItems: 'center',
    },
    bookScreen__container_book_wrap_regular_apartment_size_wrap: {
        height: 75,
        backgroundColor: '#fff',
        borderRadius: 4,
        /*paddingLeft: 20,
        paddingRight: 20,*/
        paddingTop: 16,
        paddingBottom: 16,
        alignItems: 'center',
        marginTop: 10,
    },
    bookScreen__container_book_wrap_regular_cleaning_content: {
        backgroundColor: 'rgba(238,238,238,0)',
        height: 43,
        width: '100%',
        alignItems: 'center',
    },
    bookScreen__container_book_wrap_regular_apartment_size_content: {
        backgroundColor: 'rgba(238,238,238,0)',
        height: 43,
        width: '100%',
        alignItems: 'center',
    },

    bookScreen__container_book_wrap_regular_cleaning_dropdown: {
        width: '100%',
        height: 43,
        alignItems: 'center',
        zIndex: 1,
        paddingLeft: 20,
        paddingRight: 20,
    },

    bookScreen__container_book_wrap_regular_cleaning_dropdown_placeholder: {
        color: '#268664',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '300',
        lineHeight: 24,
        letterSpacing: 0.5,
        marginTop: -19,
    },
    bookScreen__container_book_wrap_regular_cleaning_dropdown_choose: {
        position: 'absolute',
        left: 20,
        bottom: 0,
    },
    bookScreen__container_book_wrap_regular_cleaning_dropdown_after_label: {
        position: 'absolute',
        left: 20,
        top: 0,
    },

    bookScreen__container_book_wrap_regular_cleaning_dropdown_choose_text: {
        color: '#000',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '300',
        backgroundColor: 'transparent',
    },
    bookScreen__container_book_wrap_regular_cleaning_dropdown_after_label_text: {
        color: '#268664',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '300',
        backgroundColor: 'transparent',
    },

    bookScreen__container_book_wrap_regular_apartment_size_dropdown: {
        width: '100%',
        height: 43,
        alignItems: 'center',
        zIndex: 1,
        paddingLeft: 20,
        paddingRight: 20,
    },

    bookScreen__container_book_wrap_regular_apartment_size_dropdown_placeholder: {
        color: '#268664',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '300',
        lineHeight: 24,
        letterSpacing: 0.5,
        marginTop: -19,
    },

    bookScreen__container_book_wrap_regular_window_cleaning_wrap: {
        width: '100%',
        backgroundColor: 'transparent',
        marginTop: 20,
    },

    bookScreen__container_book_wrap_regular_price_wrap: {
        height: 75,
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 57,
        width: '100%',
    },
    bookScreen__container_book_wrap_regular_price_content: {
/*
        backgroundColor: '#33733e',
*/
        height: 35,
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 1,
    },

    bookScreen__container_book_wrap_regular_price_content_text: {
        marginTop: 5,
        color: '#000',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '300',
        lineHeight: 25,
    },

    bookScreen__container_book_wrap_regular_price_content_cost: {
        marginTop: 5,
        marginLeft: 5,
        backgroundColor: "transparent",
    },

    bookScreen__container_book_wrap_regular_price_content_cost_text: {
        color: '#000',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 25,
    },

    bookScreen__container_button_wrap: {
        marginTop: 10,
        height: 45,
        paddingBottom: 10,
        marginBottom: 10,
    },
    bookScreen__container_button: {
        alignItems: 'center',
        paddingLeft: 154,
        paddingRight: 154,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 4,
        height: 45,
        zIndex: 2,
    },
    bookScreen__container_button_text: {
        /*color: '#fff',*/
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 21,
        letterSpacing: 0.9,
    }
})