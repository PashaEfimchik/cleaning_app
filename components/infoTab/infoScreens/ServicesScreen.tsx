import React from "react";
import {Alert, Dimensions, ScrollView, StyleSheet} from 'react-native';
import { View } from "../../Themed";
import ProfileHeaderComponent from "../../header/ProfileHeaderComponent";
import {SFProDisplayRegular} from "../../StyledText";
import InfoItemComponent from "./components/InfoItemComponent";
import SignButtonComponent from "../../buttons/SignButtonComponent";

interface ServicesScreenProps {
    navigation: any;
}
export default function ServicesScreen (props: ServicesScreenProps) {

    const height = Dimensions.get('window').height;

    return (
        <View style={styles.container}>
            <View style={styles.services__title_wrap}>
                <ProfileHeaderComponent
                    title="Services"
                    handleNavigateTo={() => {
                        props.navigation.removeListener
                        props.navigation.goBack();
                    }}
                />
            </View>
            <View style={{
                height: height - 225,
            }}>
                <ScrollView>
                    <View style={[
                        styles.services__content_wrap,
                        {
                            height: "auto",
                        }
                    ]}>
                        <View style={styles.services__content_label_wrap}>
                            <SFProDisplayRegular style={styles.services__content_label__text}>
                                Press to select your preferred type of cleaning
                            </SFProDisplayRegular>
                        </View>
                        <View style={styles.services__content_items_wrap}>
                            <InfoItemComponent
                                title={"Basic"}
                                description={"Basic cleaning starts with an assessment, followed by systematic dusting, vacuuming, and mopping. The kitchen and bathroom receive special attention, including surface sanitization. After the final touch-ups, we perform a walk-through to ensure our high standards are met, leaving your home in pristine condition."}
                                time={"Minimum 3 hours"}
                            />
                            <InfoItemComponent
                                title={"Detailed"}
                                description={"Detailed cleaning takes the BASIC cleaning to the next level, leaving no corner untouched. We meticulously clean and sanitize every surface and crevice in your home. From deep cleaning kitchen appliances to thorough dusting, we ensure that your living space is truly immaculate."}
                                time={"Minimum 5 hours"}
                            />
                            <InfoItemComponent
                                title={"Move in/out"}
                                description={"Designed for transitioning in or out of a home, this service includes a thorough cleaning of all areas, with extra attention to spaces that may have been neglected. We take care of cabinets, appliances, and ensure the entire space is ready for the next chapter."}
                                time={"Minimum 4 hours"}
                            />
                            <InfoItemComponent
                                title={"After builders"}
                                description={"Perfect for post-construction or renovation clean-ups, we tackle the mess and dust left behind by builders, leaving you with a clean and comfortable environment. From cleaning surfaces to removing construction debris, we make your newly built or renovated area shine."}
                                time={"Minimum 6 hours"}
                            />
                            <InfoItemComponent
                                title={"After party"}
                                description={"After a great event, the last thing you want to do is clean up. We handle the cleanup, from removing spills and stains to general tidying up, ensuring every surface is sparkling. Allowing you to wake up to a refreshed and clean home."}
                                time={"Minimum 4 hours"}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={[
                styles.services__container_content_button_wrap,
                {
                    marginTop: height > 750 ? 0 : height - 115,
                }
            ]}>
                <SignButtonComponent
                    backgroundButtonColor={"#268664"}
                    textButtonColor={"#fff"}
                    textButtonContent={"Book"}
                    inputValue={"Book"}
                    handleNavigateTo={() => {
                        Alert.alert("Book");
                        //props.navigation.navigate("");
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    services__title_wrap: {

    },
    services__content_wrap: {
        //flex: 1,
        //backgroundColor: "#8a5353",
        paddingTop: 20,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 50,
    },
    services__content_label_wrap: {

    },
    services__content_label__text: {
        color: "#3A3A3A",
        fontSize: 16,
        lineHeight: 20,
        fontWeight: "400",
        letterSpacing: 0.32,
        textAlign: "center",
    },
    services__content_items_wrap: {
        marginTop: 10,
        //backgroundColor: "#62c25a",
    },
    services__container_content_button_wrap: {
        flex: 1,
        position: "absolute",
        width: "100%",
    },
});