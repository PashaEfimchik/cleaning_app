import React from "react";
import {Alert, Dimensions, ScrollView, StyleSheet} from 'react-native';
import { View } from "../../Themed";
import ProfileHeaderComponent from "../../header/ProfileHeaderComponent";
import {SFProDisplayLight, SFProDisplayRegular, SFProDisplaySemibold} from "../../StyledText";
import InfoItemComponent from "./components/InfoItemComponent";
import faqQuestionsData from "../../utils/faqQuestions";
import {cancellationPolicyScenarios} from "../../utils/cancellationPolicyData";

interface CancellationPolicyProps {
    navigation: any;
}
export default function CancellationPolicyScreen (props: CancellationPolicyProps) {
    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    const cancellationItemWidth = (width - 42) / 2;

    return (
        <View style={styles.container}>
            <View style={styles.policy__title_wrap}>
                <ProfileHeaderComponent
                    title="Cancellation Policy"
                    handleNavigateTo={() => {
                        props.navigation.removeListener
                        props.navigation.goBack();
                    }}
                />
            </View>

            <View style={{
                height: height - 115,
            }}>
                <ScrollView
                >
                    <View style={[
                        styles.policy__content_wrap,
                        {
                            height: "auto",
                            paddingBottom: 50,
                        }
                    ]}>
                        <View style={styles.policy__short_answer_wrap}>
                            <View style={styles.policy__short_answer_title}>
                                <SFProDisplaySemibold style={styles.policy__short_answer_title_text}>
                                    short answer
                                </SFProDisplaySemibold>
                            </View>
                            <View style={styles.policy__short_answer_description}>
                                <SFProDisplayLight style={styles.policy__short_answer_description_text}>
                                    You can cancel or edit your appointment for free within 1 hour of booking it or up to 48 hours before the time affected by the change. If you cancel or edit your appointment outside these times, you may receive a partial refund.
                                </SFProDisplayLight>
                            </View>
                        </View>

                        <View style={styles.policy__short_cancellation_wrap}>
                            <View style={styles.policy__short_answer_title}>
                                <SFProDisplaySemibold style={styles.policy__short_answer_title_text}>
                                    Cancellation policy
                                </SFProDisplaySemibold>
                            </View>
                            <View style={styles.policy__short_cancellation_content}>
                                <View style={[styles.policy__short_cancellation_content_item_wrap,
                                    {
                                        marginTop: 20,
                                    }
                                ]}>
                                    <View style={styles.policy__short_cancellation_content_item}>
                                        <SFProDisplayLight style={[
                                            styles.policy__short_cancellation_content_item_text,
                                            {
                                                width: cancellationItemWidth,
                                            }
                                        ]}>
                                            Time of cancellation or edit
                                        </SFProDisplayLight>
                                        <SFProDisplayLight style={[
                                            styles.policy__short_cancellation_content_item_text,
                                            {
                                                width: cancellationItemWidth,
                                            }
                                        ]}>
                                            Refund
                                        </SFProDisplayLight>
                                    </View>
                                    <View style={{flexDirection: "row"}}>
                                        <View
                                            style={{
                                                backgroundColor: 'rgb(232,231,231)',
                                                borderRadius: 4,
                                                height: 1,
                                                flex: 1,
                                                alignItems: 'flex-end',
                                                marginTop: 5,
                                            }}>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.policy__short_cancellation_content_item_wrap}>
                                    <View style={styles.policy__short_cancellation_content_item}>
                                        <SFProDisplayLight style={[
                                            styles.policy__short_cancellation_content_item_text,
                                            {
                                                width: cancellationItemWidth,
                                            }
                                        ]}>
                                            Within 1 hour of booking the trip
                                        </SFProDisplayLight>
                                        <SFProDisplayLight style={[
                                            styles.policy__short_cancellation_content_item_text,
                                            {
                                                width: cancellationItemWidth,
                                            }
                                        ]}>
                                            Full refund
                                        </SFProDisplayLight>
                                    </View>
                                    <View style={{flexDirection: "row"}}>
                                        <View
                                            style={{
                                                backgroundColor: 'rgb(232,231,231)',
                                                borderRadius: 4,
                                                height: 1,
                                                flex: 1,
                                                alignItems: 'flex-end',
                                            }}>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.policy__short_cancellation_content_item_wrap}>
                                    <View style={styles.policy__short_cancellation_content_item}>
                                        <SFProDisplayLight style={[
                                            styles.policy__short_cancellation_content_item_text,
                                            {
                                                width: cancellationItemWidth,
                                            }
                                        ]}>
                                            Over 48 hours in advance
                                        </SFProDisplayLight>
                                        <SFProDisplayLight style={[
                                            styles.policy__short_cancellation_content_item_text,
                                            {
                                                width: cancellationItemWidth,
                                            }
                                        ]}>
                                            Full refund
                                        </SFProDisplayLight>
                                    </View>
                                    <View style={{flexDirection: "row"}}>
                                        <View
                                            style={{
                                                backgroundColor: 'rgb(232,231,231)',
                                                borderRadius: 4,
                                                height: 1,
                                                flex: 1,
                                                alignItems: 'flex-end',
                                            }}>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.policy__short_cancellation_content_item_wrap}>
                                    <View style={styles.policy__short_cancellation_content_item}>
                                        <SFProDisplayLight style={[
                                            styles.policy__short_cancellation_content_item_text,
                                            {
                                                width: cancellationItemWidth,
                                            }
                                        ]}>
                                            24 to 48 hours in advance
                                        </SFProDisplayLight>
                                        <SFProDisplayLight style={[
                                            styles.policy__short_cancellation_content_item_text,
                                            {
                                                width: cancellationItemWidth,
                                            }
                                        ]}>
                                            Partial refund: you’ll pay 50% of booking value
                                        </SFProDisplayLight>
                                    </View>
                                    <View style={{flexDirection: "row"}}>
                                        <View
                                            style={{
                                                backgroundColor: 'rgb(232,231,231)',
                                                borderRadius: 4,
                                                height: 1,
                                                flex: 1,
                                                alignItems: 'flex-end',
                                            }}>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.policy__short_cancellation_content_item_wrap}>
                                    <View style={styles.policy__short_cancellation_content_item}>
                                        <SFProDisplayLight style={[
                                            styles.policy__short_cancellation_content_item_text,
                                            {
                                                width: cancellationItemWidth,
                                            }
                                        ]}>
                                            Less than 24 hours in advance
                                        </SFProDisplayLight>
                                        <SFProDisplayLight style={[
                                            styles.policy__short_cancellation_content_item_text,
                                            {
                                                width: cancellationItemWidth,
                                            }
                                        ]}>
                                            Partial refund: you’ll pay 100% of booking value
                                        </SFProDisplayLight>
                                    </View>
                                    <View style={{flexDirection: "row"}}>
                                        <View
                                            style={{
                                                backgroundColor: 'rgb(232,231,231)',
                                                borderRadius: 4,
                                                height: 1,
                                                flex: 1,
                                                alignItems: 'flex-end',
                                            }}>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.policy__short_cancellation_description}>
                                    <SFProDisplayLight style={styles.policy__short_answer_description_text}>
                                        Please note that the time of cancellation or editing is calculated based on the start time of your cleaning appointment or the earliest part of the appointment affected by the change.
                                    </SFProDisplayLight>
                                </View>

                            </View>
                        </View>

                        <View style={styles.policy__refund_process_wrap}>
                            <View style={styles.policy__short_answer_title}>
                                <SFProDisplaySemibold style={styles.policy__short_answer_title_text}>
                                    Refund Process
                                </SFProDisplaySemibold>
                            </View>
                            <View style={styles.policy__short_answer_description}>
                                <SFProDisplayLight style={styles.policy__short_answer_description_text}>
                                    Refunds for cancellations will be credited to your account with us, which you can use for a future cleaning service or withdraw back to your payment card. If the time you canceled becomes booked by another customer, you will receive a refund for that time.
                                </SFProDisplayLight>
                            </View>
                        </View>

                        <View style={styles.policy__exceptional_circumstances_wrap}>
                            <View style={styles.policy__short_answer_title}>
                                <SFProDisplaySemibold style={styles.policy__short_answer_title_text}>
                                    Exceptional Circumstances
                                </SFProDisplaySemibold>
                            </View>
                            <View style={styles.policy__short_answer_description}>
                                <SFProDisplayLight style={styles.policy__short_answer_description_text}>
                                    We understand that unforeseen situations may arise, such as an owner requesting cancellation or difficulties finding keys. In such rare cases, we may offer a full refund. When canceling, please select the most appropriate reason from the options provided in the app or website. If your reason is not listed, select “Other” and reach out to our customer support for assistance.
                                </SFProDisplayLight>
                            </View>
                            <View style={styles.policy__short_answer_description}>
                                <SFProDisplayLight style={styles.policy__short_answer_description_text}>
                                    We hope this policy provides clarity and transparency regarding cancellations and edits to your cleaning appointments. If you have any further questions or require assistance, please do not hesitate to contact us. Your satisfaction is our priority.
                                </SFProDisplayLight>
                            </View>
                        </View>

                        <View style={styles.policy__example_scenarios_wrap}>
                            <View style={styles.policy__short_answer_title}>
                                <SFProDisplaySemibold style={styles.policy__short_answer_title_text}>
                                    Example Scenarios for Cleaning Services
                                </SFProDisplaySemibold>
                            </View>
                            <View style={styles.policy__short_answer_description}>
                                <SFProDisplayLight style={styles.policy__short_answer_description_text}>
                                    Michelle has reserved a cleaning appointment for €100. Her scheduled cleaning service is set to begin at 9 am on Friday.
                                </SFProDisplayLight>
                            </View>

                            <View style={styles.policy__content_items_wrap}>
                                {
                                    cancellationPolicyScenarios.map((item, index) => {
                                        return (
                                            <InfoItemComponent
                                                key={index}
                                                title={item.scenario}
                                                description={item.description}
                                            />
                                        )
                                    })
                                }
                            </View>

                        </View>

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
    policy__title_wrap: {

    },
    policy__content_wrap: {
        paddingTop: 10,
        paddingLeft: 16,
        paddingRight: 16,
    },
    policy__short_answer_wrap: {

    },
    policy__short_answer_title: {

    },
    policy__short_answer_title_text: {
        color: "#3A3A3A",
        fontSize: 22,
        lineHeight: 28,
        fontWeight: "600",
        letterSpacing: 0.44,
        alignSelf: "flex-start",
        textTransform: "uppercase",
    },
    policy__short_answer_description: {
        marginTop: 10,
    },
    policy__short_answer_description_text: {
        color: "#3A3A3A",
        fontSize: 20,
        lineHeight: 26,
        fontWeight: "300",
        letterSpacing: 0.4,
        alignSelf: "flex-start",
    },
    policy__short_cancellation_wrap: {
        marginTop: 40,
    },
    policy__short_cancellation_content: {
        marginTop: 10,
    },
    policy__short_cancellation_content_item_wrap: {
        flexDirection: "column",
        marginTop: 10,
    },
    policy__short_cancellation_content_item: {
        flexDirection: "row",
        width: "100%",
        paddingTop: 5,
        paddingBottom: 5,

    },
    policy__short_cancellation_content_item_text: {
        color: "#3A3A3A",
        fontSize: 20,
        lineHeight: 26,
        fontWeight: "300",
        letterSpacing: 0.4,
        alignSelf: "flex-start",
    },
    policy__short_cancellation_description: {
        marginTop: 30,
    },
    policy__refund_process_wrap: {
        marginTop: 40,
    },
    policy__exceptional_circumstances_wrap: {
        marginTop: 40,
    },
    policy__example_scenarios_wrap: {
        marginTop: 40,
    },
    policy__content_items_wrap: {

    },
});
