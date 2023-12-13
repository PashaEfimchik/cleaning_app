import React, {useEffect, useMemo, useState} from "react";
import {Alert, Dimensions, ScrollView, StyleSheet} from "react-native";
import {View} from "../../Themed";
import HeaderComponent from "../../header/HeaderComponent";
import RadioGroup from "../bookComponents/BookRadioGroup";
import {RadioButtonProps} from "../bookComponents/BookRadioButton";
import PriceDropdownComponent from "../bookComponents/PriceDropdownComponent";
import BookButtonComponent from "../bookComponents/BookButtonComponent";
import {setValue} from "../../../reducers/bookReducer";
import {useDispatch} from "react-redux";

interface CleaningFrequencyComponentProps {
    handleIsNavigateToExtraServices: () => void;
    handleIsNavigateToExecutionSpeed: () => void;
}

export default function CleaningFrequencyComponent (props: CleaningFrequencyComponentProps) {
    const dispatch = useDispatch();
    const [selectedCleaningFrequencyType, setSelectedCleaningFrequencyType] = useState('1' as string);
    const { height } = Dimensions.get('window');
    const contentHeight = height > 750 ? height - 243 : height - 225;

    // @ts-ignore
    const cleaningFrequencyTypeData: RadioButtonProps[] = useMemo(() => ([
        {id: '1', label: "One-time", value: "One-time"},
        {id: '2', label: "Weekly", value: "Weekly"},
        {id: '3', label: "Bi-weekly", value: "Bi-weekly"},
        {id: '4', label: "Monthly", value: "Monthly"},
    ]), []);

    const handleCleaningFrequencyType = (newCleaningFrequencyType: string) => {
        if (parseFloat(newCleaningFrequencyType) > 0) {
            dispatch(setValue({ key: "cleaningFrequencyType", value: cleaningFrequencyTypeData[parseFloat(newCleaningFrequencyType) - 1].value as string}));
            //props.handleCleaningFrequencyType(cleaningFrequencyTypeData[parseFloat(newCleaningFrequencyType) - 1].value as string);
        } else {
            dispatch(setValue({ key: "cleaningFrequencyType", value: cleaningFrequencyTypeData[0].value as string}));
            //props.handleCleaningFrequencyType(cleaningFrequencyTypeData[0].value as string);
        }
//        props.handleCleaningFrequencyTypePrice(0);
        dispatch(setValue({ key: "cleaningFrequencyTypePrice", value: 0}));
        setSelectedCleaningFrequencyType(newCleaningFrequencyType);
    }

    useEffect(() => {
        handleCleaningFrequencyType(selectedCleaningFrequencyType);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.cleaningFrequency__container_header}>
                <HeaderComponent
                    title={"How often?"}
                    isNotStartBookScreen={true}
                    numberOfPage={6}
                    numberOfPages={10}
                    handleNavigateTo={props.handleIsNavigateToExtraServices}
                />
            </View>
            <View style={{height: contentHeight, marginTop: 100}}>
                <ScrollView style={styles.cleaningFrequency__container_content_wrap}>
                    <View style={styles.cleaningFrequency__container_content}>
                        <RadioGroup
                            radioButtons={cleaningFrequencyTypeData}
                            onPress={(item) => handleCleaningFrequencyType(item)}
                            selectedId={selectedCleaningFrequencyType}
                        />
                    </View>
                </ScrollView>
            </View>
            <View style={styles.cleaningFrequency__container_content_price_wrap}>
                <View style={styles.cleaningFrequency__container_content_price}>
                    <PriceDropdownComponent/>
                </View>
                <View style={styles.cleaningFrequency__container_next_button_wrap}>
                    <BookButtonComponent
                        backgroundButtonColor={"#268664"}
                        textButtonColor={"#fff"}
                        textButtonContent={"Next"}
                        handleNavigateTo={props.handleIsNavigateToExecutionSpeed}
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
    cleaningFrequency__container_header: {
        width: "100%",
        backgroundColor: "#fff",
        paddingLeft: 16,
        paddingRight: 16,
    },
    cleaningFrequency__container_content_wrap: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
    },
    cleaningFrequency__container_content: {
        marginTop: 20,
    },
    cleaningFrequency__container_content_price_wrap: {

    },
    cleaningFrequency__container_content_price: {

    },
    cleaningFrequency__container_next_button_wrap: {

    },
});