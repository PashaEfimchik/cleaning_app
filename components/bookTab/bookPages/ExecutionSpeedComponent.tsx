import React, {useEffect, useMemo, useState} from "react";
import {Dimensions, ScrollView, StyleSheet} from "react-native";
import {View} from "../../Themed";
import {RadioButtonProps} from "../bookComponents/BookRadioButton";
import HeaderComponent from "../../header/HeaderComponent";
import RadioGroup from "../bookComponents/BookRadioGroup";
import {SFProDisplayRegular} from "../../StyledText";
import PriceDropdownComponent from "../bookComponents/PriceDropdownComponent";
import BookButtonComponent from "../bookComponents/BookButtonComponent";
import {setValue} from "../../../reducers/bookReducer";
import {useDispatch} from "react-redux";

interface ExecutionSpeedComponentProps {
    navigation: any;
    //handleIsNavigateToExecutionSpeed: () => void;
    //handleIsNavigateToDateTime: () => void;
}

export default function ExecutionSpeedComponent (props: ExecutionSpeedComponentProps) {
    const dispatch = useDispatch();

    const [selectedExecutionSpeed, setSelectedExecutionSpeed] = useState('1' as string);
    const { height } = Dimensions.get('window');
    const contentHeight = height > 750 ? height - 243 : height - 225;

    const executionSpeedData: any = [
        {id: '1', label: "x1", value: "1", price: 15},
        {id: '2', label: "x2", value: "2", price: 25},
        {id: '3', label: "x3", value: "3", price: 35},
    ];

    const handleExecutionSpeed = (newExecutionSpeed: string) => {
        if (parseFloat(newExecutionSpeed) > 0) {
            dispatch(setValue({ key: "executionSpeed", value: executionSpeedData[parseFloat(newExecutionSpeed) - 1].value as string}));
        } else {
            dispatch(setValue({ key: "executionSpeed", value: executionSpeedData[0].value as string}));
        }
        dispatch(setValue({ key: "executionSpeedPrice", value: executionSpeedData[parseFloat(newExecutionSpeed) - 1].price}))
        setSelectedExecutionSpeed(newExecutionSpeed);
    }

    useEffect(() => {
        handleExecutionSpeed(selectedExecutionSpeed);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.executionSpeed__container_header}>
                <HeaderComponent
                    title={"How fast?"}
                    isNotStartBookScreen={true}
                    numberOfPage={4}
                    numberOfPages={8}
                    handleNavigateTo={() => props.navigation.goBack()}
                />
            </View>
            <View style={{height: contentHeight}}>
                <ScrollView style={styles.executionSpeed__container_content_wrap}>
                    <View style={styles.executionSpeed__container_content_description}>
                        <SFProDisplayRegular style={styles.executionSpeed__container_content_description_text}>
                            For a faster clean, select '2x' to reduce a 6-hour clean to 3 hours with two cleaners, or '3x' to reduce it to 2 hours with three cleaners. Subject to availability.
                        </SFProDisplayRegular>
                    </View>
                    <View style={styles.executionSpeed__container_content}>
                        <RadioGroup
                            radioButtons={executionSpeedData.map((item: any) => {
                                return {
                                    id: item.id, label: item.label, value: item.value,
                                }
                            })}
                            onPress={(item) => handleExecutionSpeed(item)}
                            selectedId={selectedExecutionSpeed}
                        />
                    </View>
                </ScrollView>
            </View>



            <View style={[
                styles.executionSpeed__container_content_price_wrap,
                {marginTop: height > 750 ? 0 : height - 115}
            ]}>
                <View style={styles.executionSpeed__container_content_price}>
                    <PriceDropdownComponent navigation={props.navigation}/>
                </View>
                <View style={styles.executionSpeed__container_next_button_wrap}>
                    <BookButtonComponent
                        backgroundButtonColor={"#268664"}
                        textButtonColor={"#fff"}
                        textButtonContent={"Next"}
                        handleNavigateTo={() => props.navigation.navigate('DateTime')}
                        inputValue={"next"}
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
    executionSpeed__container_header: {
        width: "100%",
        backgroundColor: "#fff",
        paddingLeft: 16,
        paddingRight: 16,
    },
    executionSpeed__container_content_wrap: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
    },
    executionSpeed__container_content: {
        marginTop: 20,
    },
    executionSpeed__container_content_radio_group: {

    },
    executionSpeed__container_content_description: {
        marginTop: 20,
    },
    executionSpeed__container_content_description_text: {
        color: "#3A3A3A",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "400",
        letterSpacing: 0.32,
    },
    executionSpeed__container_content_price_wrap: {
        flex: 1,
        position: "absolute",
        width: "100%",

    },
    executionSpeed__container_content_price: {

    },
    executionSpeed__container_next_button_wrap: {

    }
});