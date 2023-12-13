import React, {useEffect} from "react";
import {View} from "../../Themed";
import {Dimensions, StyleSheet} from "react-native";
import {Dropdown} from "react-native-element-dropdown";

interface BookDropdownPropertyProps {
    data: any[];
    value: string;
    placeholder: string;
    handleValue: (newValue: any) => void;
    handleIsOpenDropdown: (newValue: boolean) => void;
}

export default function BookDropdownProperty (props: BookDropdownPropertyProps) {

    const handleValue = (newValue: any) => {
        props.handleValue(newValue.id);
    }


    return (
        <View style={styles.dropdown__container}>
            <Dropdown
                onFocus={() => {props.handleIsOpenDropdown(true)}}
                onBlur={() => {props.handleIsOpenDropdown(false)}}
                style={styles.dropdown__container_content}
                data={props.data}
                containerStyle={{
                    borderRadius: 4,
                }}
                dropdownPosition={"bottom"}
                itemTextStyle={styles.dropdown__container_content_item_text}
                placeholder={props.placeholder}
                placeholderStyle={styles.dropdown__container_content_placeholder_text}
                selectedTextStyle={styles.dropdown__container_content_item_selected_text}
                labelField="label"
                valueField="value"
                value={props.value}
                onChange={(item) => handleValue(item)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    dropdown__container: {
        width: "100%",
        flex: 1,
    },
    dropdown__container_content: {
        height: 60,
        // backgroundColor: "#f3f",
        borderRadius: 4,
        borderStyle: "solid",
        borderColor: "#E8E7E7",
        borderWidth: 1,
        paddingTop: 18,
        paddingRight: 16,
        paddingBottom: 18,
        paddingLeft: 16,
    },
    dropdown__container_content_item_text: {
        color: "#3A3A3A",
        fontSize: 20,
        fontWeight: "400",
        fontStyle: "normal",
        height: 20,
    },
    dropdown__container_content_placeholder_text: {
        color: "#3A3A3A",
        fontSize: 20,
        fontWeight: "400",
        fontStyle: "normal",
        height: 20,
    },
    dropdown__container_content_item_selected_text: {
        color: "#3A3A3A",
        fontSize: 20,
        fontWeight: "400",
        fontStyle: "normal",
        height: 20,
    },
    dropdown__container_content_arrow: {

    }
});
