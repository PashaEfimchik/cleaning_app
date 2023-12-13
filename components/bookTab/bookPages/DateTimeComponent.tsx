import ServiceTypeComponent from "./ServiceTypeComponent";
import React, {useEffect, useState} from "react";
import {View} from "../../Themed";
import {Dimensions, ScrollView, StyleSheet} from "react-native";
import HeaderComponent from "../../header/HeaderComponent";
import {ApplicationProvider, Calendar} from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import BookDropdownPropertyComponent from "../bookComponents/BookDropdownPropertyComponent";
import PriceDropdownComponent from "../bookComponents/PriceDropdownComponent";
import BookButtonComponent from "../bookComponents/BookButtonComponent";
import {useDispatch} from "react-redux";
import {setValue} from "../../../reducers/bookReducer";
import Svg, {Path} from "react-native-svg";
import CalendarPicker from "react-native-calendar-picker";

const timeData: any[] = [
    {id: 0, label: "09:00", value: "09:00"},
    {id: 1, label: "10:00", value: "10:00"},
    {id: 2, label: "11:30", value: "11:30"},
    {id: 3, label: "13:00", value: "13:00"},
    {id: 4, label: "14:00", value: "14:00"},
    {id: 5, label: "15:30", value: "15:30"}
];

interface DateTimeComponentProps {
    navigation: any;
    //handleIsNavigateToCleaningFrequency: () => void;
    //handleIsNavigateToPropertyInformation: () => void;
}

export default function DateTimeComponent (props: DateTimeComponentProps) {
    const dispatch = useDispatch();

    const [scroll, setScroll] = useState(true);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [cleaningDate, setCleaningDate] = useState(new Date());
    const [cleaningTimeIndex, setCleaningTimeIndex] = useState(0);

    const [isOpenDropdown, setIsOpenDropdown] = useState(false as boolean);


    const { height } = Dimensions.get('window');
    const { width } = Dimensions.get('window');
    const contentHeight = height > 750 ? height - 243 : height - 225;

    const dateOptions: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
    };

    const formatter = new Intl.DateTimeFormat('en-US', dateOptions);


    const handleDate = (newDate: any) => {
        dispatch(setValue({ key: "cleaningDate", value: formatter.format(newDate)}));
        //console.log(formatter.format(newDate));
        //props.handleCleaningDate(newDate.getDate() + "/" + parseFloat(newDate.getMonth() + 1) + "/" + newDate.getFullYear());
    }

    const handleTime = (newTimeIndex: any) => {
        if (newTimeIndex > 0) {
            dispatch(setValue({ key: "cleaningTime", value: timeData[cleaningTimeIndex].value}));
            //props.handleCleaningTime(timeData[cleaningTimeIndex].value);
        } else {
            dispatch(setValue({ key: "cleaningTime", value: timeData[0].value}));
            //props.handleCleaningTime(timeData[0].value);
        }
        setCleaningTimeIndex(newTimeIndex);
    }

    useEffect(() => {
        handleDate(cleaningDate);
        handleTime(cleaningTimeIndex)
    }, [cleaningDate, cleaningTimeIndex]);

    return (
        <View style={styles.container}>
            <View style={styles.dateTime__container_header}>
                <HeaderComponent
                    title={"Date and time"}
                    isNotStartBookScreen={true}
                    numberOfPage={5}
                    numberOfPages={8}
                    handleNavigateTo={() => props.navigation.goBack()}
                />
            </View>
            <View style={{height: height - 310}}>
                <ScrollView style={styles.dateTime__container_content_wrap}>
                    <View style={[
                        styles.dateTime__container_content,
                        {
                            height: height - 220,
                        }
                    ]}>
                        <View style={styles.dateTime__container_content_time_wrap}>
                            <BookDropdownPropertyComponent
                                title="Time"
                                data={timeData}
                                value={timeData[cleaningTimeIndex - 1] ? timeData[cleaningTimeIndex].value : timeData[0].value}
                                placeholder={timeData[0].label}
                                handleValue={handleTime}
                                handleIsOpenDropdown={setIsOpenDropdown}
                            />
                        </View>

                        <View style={styles.dateTime__container_calendar_wrap}>
                            <ApplicationProvider {...eva} theme={eva.light}>
                                <CalendarPicker
                                    startFromMonday={true}
                                    allowRangeSelection={false}
                                    previousComponent={
                                        <Svg
                                            width={24}
                                            height={24}
                                            fill="none"
                                            style={{
                                                //position: "absolute",
                                                //left: width - 85,
                                                //top: -12,
                                            }}
                                        >
                                            <Path
                                                d="M15 6L9 12L15 18"
                                                stroke="black"
                                                stroke-linecap="round"
                                            />
                                        </Svg>
                                    }
                                    showDayStragglers={true}
                                    nextComponent={
                                        <Svg
                                            width={24}
                                            height={24}
                                            fill="none"
                                        >
                                            <Path
                                                d="M9 6L15 12L9 18"
                                                stroke="black"
                                                stroke-linecap="round"
                                            />
                                        </Svg>
                                    }
                                    restrictMonthNavigation={true}
                                    //scrollable={scroll}
                                    onDateChange={(date: any) => setSelectedStartDate(date)}
                                    dayLabelsWrapper={{
                                        borderTopWidth: 0,
                                        borderBottomWidth: 0,
                                        paddingTop: 10,
                                        paddingBottom: 10,
                                        backgroundColor: "transparent",
                                    }}
                                    minDate={new Date()}
                                    todayBackgroundColor={"rgba(38, 134, 100, 0.08)"}
                                    todayTextStyle={{
                                        color: "#000",
                                    }}
                                    headerWrapperStyle={{
                                        backgroundColor: "transparent",
                                        height: 60,
                                    }}
                                    weekdays={["M", "T", "W", "T", "F", "S", "S"]}
                                    customDayHeaderStyles={(dayOfWeek: any) => {
                                        return {
                                            textStyle: {
                                                color: "#CBCACA",
                                                fontSize: 16,
                                                fontWeight: "500",
                                                letterSpacing: 0.32,
                                                lineHeight: 16,
                                            },
                                        };
                                    }}
                                    selectedDayStyle={{
                                        backgroundColor: "#268664",
                                        borderRadius: 30,
                                    }}
                                    selectedDayTextColor={"#fff"}
                                    monthTitleStyle={{
                                        fontSize: 20,
                                        color: "#000",
                                        fontWeight: "300",
                                        letterSpacing: 0.8,
                                        lineHeight: 20,
                                        backgroundColor: "transparent",
                                        paddingTop: 18,
                                        paddingBottom: 18,
                                        paddingLeft: 16,
                                        paddingRight: 16,
                                        borderRadius: 4,
                                        borderWidth: 1,
                                        borderColor: "#E8E7E7",
                                    }}
                                    yearTitleStyle={{
                                        fontSize: 20,
                                        color: "#000",
                                        fontWeight: "300",
                                        letterSpacing: 0.8,
                                        backgroundColor: "transparent",
                                        paddingTop: 18,
                                        paddingBottom: 18,
                                        paddingLeft: 20,
                                        paddingRight: 20,
                                    }}
                                />
                            </ApplicationProvider>
                        </View>

                    </View>
                </ScrollView>
            </View>

            <View style={[
                styles.dateTime__container_content_price_wrap,
                {marginTop: height > 750 ? 0 : height - 115}
            ]}>
                <View style={styles.dateTime__container_content_price}>
                    <PriceDropdownComponent/>
                </View>
                <View style={styles.dateTime__container_next_button_wrap}>
                    <BookButtonComponent
                        backgroundButtonColor={"#268664"}
                        textButtonColor={"#fff"}
                        textButtonContent={"Next"}
                        handleNavigateTo={() => props.navigation.navigate('PropertyAddress')}
                        inputValue={"next"}
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
    dateTime__container_header: {
        width: "100%",
        backgroundColor: "#fff",
        paddingLeft: 16,
        paddingRight: 16,
        height: 100,
    },
    dateTime__container_content_wrap: {
        //marginTop: 100,
        paddingLeft: 16,
        paddingRight: 16,
    },
    dateTime__container_content: {
    },
    dateTime__container_calendar_wrap: {
        marginTop: 20,
    },
    dateTime__container_calendar: {
        width: "100%",
    },
    dateTime__container_content_time_wrap: {
        marginTop: 20,
        height: 86,
    },
    dateTime__container_content_price_wrap: {
        flex: 1,
        position: "absolute",
        width: "100%",
    },
    dateTime__container_content_price: {

    },
    dateTime__container_next_button_wrap: {

    },
});