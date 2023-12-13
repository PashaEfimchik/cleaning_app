import React from "react";
import {StyleSheet} from "react-native";
import {View} from "../../Themed";
import {SFProDisplayLight} from "../../StyledText";

interface BookBelowHeaderComponentProps {
    numberOfPage: number;
    numberOfPages: number;
    title: string;
}

export default function BookBelowHeaderComponent (props: BookBelowHeaderComponentProps) {
    return (
        <View style={styles.container}>
            <View style={styles.bookBelowHeader__container_content_wrap}>
                <View style={styles.bookBelowHeader__container_content_number_of_page}>
                    <SFProDisplayLight style={styles.bookBelowHeader__container_content_number_of_page_text}>
                        {props.numberOfPage} / {props.numberOfPages}
                    </SFProDisplayLight>
                </View>
                <View style={styles.bookBelowHeader__container_content_title}>
                   <SFProDisplayLight style={styles.bookBelowHeader__container_content_title_text}>
                          {props.title}
                   </SFProDisplayLight>
                </View>
            </View>
        </View>
        );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
    },
    bookBelowHeader__container_content_wrap: {

    },
    bookBelowHeader__container_content_number_of_page: {
        width: "100%",
        alignItems: "flex-end",
    },
    bookBelowHeader__container_content_number_of_page_text: {
        fontSize: 16,
        lineHeight: 24,
        color: "#3A3A3A",
    },
    bookBelowHeader__container_content_title: {
        marginTop: 10,
    },
    bookBelowHeader__container_content_title_text: {
        fontSize: 24,
        lineHeight: 32,
        color: "#3A3A3A",
        fontWeight: "400",
        letterSpacing: 0.72,
    },
});