import React from "react";
import {Dimensions, ScrollView, StyleSheet} from 'react-native';
import {View} from "../../Themed";
import ProfileHeaderComponent from "../../header/ProfileHeaderComponent";
import ProfileOrderItemComponent from "./components/ProfileOrderItemComponent";
import orderTestData from "../../utils/odrerTestData";
import {SFProDisplayLight} from "../../StyledText";

interface ProfileOrdersProps {
    navigation: any;
}
export default function ProfileOrdersScreen (props: ProfileOrdersProps) {
    const getMonthFromDate = (date: any) => {
        return new Date(date).toLocaleString('default', { month: 'long' });
    }

    const { height } = Dimensions.get('window');
    const contentHeight = height > 750 ? height - 243 : height - 130;

    const showOrderItems = () => {
        let currentMonth = '';

        return orderTestData.map((orderItem, index) => {
            const orderMonth = getMonthFromDate(orderItem.dataInfo.date);
            if (currentMonth !== orderMonth) {
                currentMonth = orderMonth;
                return (
                    <View key={orderItem.id} style={styles.profileOrders__content_item_with_month_wrap}>
                        <View style={styles.profileOrders__content_item_month_wrap}>
                            <SFProDisplayLight
                                style={styles.profileOrders__content_item_month_text}
                            >
                                {currentMonth}
                            </SFProDisplayLight>
                        </View>
                        <View style={styles.profileOrders__content_item_wrap}>
                            <ProfileOrderItemComponent
                                //navigation={props.navigation.navigate("ProfileOrderItem")}
                                orderData={orderItem}
                            />
                        </View>
                    </View>
                )
            } else {
                return (
                    <View key={orderItem.id} style={styles.profileOrders__content_item_without_month_wrap}>
                        <ProfileOrderItemComponent
                            //navigation={props.navigation.navigate("ProfileOrderItem")}
                            orderData={orderItem}
                        />
                    </View>
                )
            }
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.profileOrders__title_wrap}>
                <ProfileHeaderComponent
                    title="Orders"
                    handleNavigateTo={() => {
                        props.navigation.removeListener
                        props.navigation.goBack();
                    }}
                />
            </View>
            <View style={{
                    height: height - 130,
                }}
            >
                <ScrollView>
                    <View style={[
                        styles.profileOrders__content_wrap,
                        {
                            //height: ,
                        }
                    ]}>
                        {
                            showOrderItems()
                        }
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileOrders__title_wrap: {

    },
    profileOrders__content_wrap: {
        marginTop: -20,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 60,
    },
    profileOrders__content_item_wrap: {
        marginTop: 16,
    },
    profileOrders__content_item_with_month_wrap: {

    },
    profileOrders__content_item_month_wrap: {
        marginTop: 40,
    },
    profileOrders__content_item_month_text: {
        fontSize: 14,
        color: "#CACACA",
        fontWeight: "300",
        letterSpacing: 0.42,
        lineHeight: 18,
        textTransform: "uppercase",
    },
    profileOrders__content_item_without_month_wrap: {
        marginTop: 8,
    }
});