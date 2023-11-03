import React from "react";
import {View} from "../../Themed";
import {StyleSheet} from "react-native";
import {SFProDisplayLight} from "../../StyledText";
import BookDropdownProperty from "./BookDropdownProperty";

interface BookDropdownPropertyComponentProps {
    title: string;
    data: any[];
    value: string;
    placeholder: string;
    handleValue: (newValue: any) => void;
    handleIsOpenDropdown: (newValue: boolean) => void;
}

export default function BookDropdownPropertyComponent (props: BookDropdownPropertyComponentProps) {
    return (
        <View style={styles.bookDropdownProperty}>
            <View style={styles.propertyInformation__container_content_bedrooms_count_wrap_label}>
                <SFProDisplayLight style={styles.propertyInformation__container_content_bedrooms_count_wrap_label_text}>
                    {props.title}
                </SFProDisplayLight>
            </View>
            <View style={styles.propertyInformation__container_content_bedrooms_wrap_dropdown}>
                <BookDropdownProperty
                    data={props.data}
                    value={props.value}
                    placeholder={props.placeholder}
                    handleValue={props.handleValue}
                    handleIsOpenDropdown={props.handleIsOpenDropdown}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bookDropdownProperty: {
        flex: 1,
        width: "100%",
        height: 60,
        position: "relative"
    },
    propertyInformation__container_content_bedrooms_count_wrap_label: {

    },
    propertyInformation__container_content_bedrooms_count_wrap_label_text: {
        color: "#3A3A3A",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "300",
        letterSpacing: 0.48,
    },
    propertyInformation__container_content_bedrooms_wrap_dropdown: {
        marginTop: 5,
    },

});