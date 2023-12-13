import React from "react";
import {Dimensions, ScrollView, StyleSheet} from 'react-native';
import { View } from "../../Themed";
import ProfileHeaderComponent from "../../header/ProfileHeaderComponent";
import {SFProDisplayLight} from "../../StyledText";
import InfoItemComponent from "./components/InfoItemComponent";
import faqQuestionsData from "../../utils/faqQuestions";

interface FAQScreenComponentProps {
    navigation: any;
}

export default function FAQScreen (props: FAQScreenComponentProps) {

    const height = Dimensions.get('window').height;

    return (
        <View style={styles.container}>
            <View style={styles.faq__title_wrap}>
                <ProfileHeaderComponent
                    title="FAQ"
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
                        styles.faq__content_wrap,
                        {
                            height: "auto",
                        }
                    ]}>
                        <View style={styles.faq__content_label_wrap}>
                            <SFProDisplayLight style={styles.faq__content_label__text}>
                                Contact us
                            </SFProDisplayLight>
                        </View>
                        <View style={styles.faq__content_items_wrap}>
                            {
                                faqQuestionsData.map((item, index) => {
                                    return (
                                        <InfoItemComponent
                                            key={index}
                                            title={item.question}
                                            description={item.answer}
                                        />
                                    )
                                })
                            }
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
    faq__title_wrap: {

    },
    faq__content_wrap: {
        paddingTop: 10,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 50,
    },
    faq__content_label_wrap: {

    },
    faq__content_label__text: {
        color: "#92A1A9",
        fontSize: 16,
        lineHeight: 16,
        fontWeight: "300",
        letterSpacing: 0.8,
        alignSelf: "flex-start",
    },
    faq__content_items_wrap: {

    },
});