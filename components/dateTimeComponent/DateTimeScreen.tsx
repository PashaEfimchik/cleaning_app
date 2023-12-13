import React from "react";
import {View, StyleSheet} from "react-native";
import HeaderComponent from "../header/HeaderComponent";
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Calendar} from '@ui-kitten/components';


interface DateTimeScreenProps {

    handleIsNavigateToBookScreen: () => void;
}

export default function DateTimeScreen(props: DateTimeScreenProps) {
    const [date, setDate] = React.useState(new Date());
    const [time, setTime] = React.useState(new Date());

    return (
        <View style={styles.container}>
            <View style={styles.dateTimeScreen__container_header}>

            </View>
            <View style={styles.dateTimeScreen__container_content_wrap}>
                <View style={styles.dateTimeScreen__container_calendar_wrap}>
                    <ApplicationProvider {...eva} theme={eva.light}>
                    <Calendar
                        style={styles.dateTimeScreen__container_calendar}
                        date={date}
                        accessibilityIgnoresInvertColors={true}
                        onSelect={nextDate => setDate(nextDate)}
                        />
                    </ApplicationProvider>
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
    dateTimeScreen__container_header: {
        width: "100%",
        backgroundColor: "#fff",
    },
    dateTimeScreen__container_content_wrap: {
        height: 240,
        alignItems: "center",
        marginTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
    },
    dateTimeScreen__container_calendar_wrap: {
        backgroundColor: "#26866433",
        borderRadius: 4,
        width: "100%",
        paddingLeft: 20,
        paddingRight: 20,
    },
    dateTimeScreen__container_calendar: {
        width: "100%",
        height: 340,
    },
});