import {View} from "../Themed";
import {StyleSheet} from "react-native";
import React, {useState} from "react";
import ApartmentSizeComponent from "./bookPages/ApartmentSizeComponent";
import ServiceTypeComponent from "./bookPages/ServiceTypeComponent";
import PropertyInformationComponent from "./bookPages/PropertyInformationComponent";
import ExtraServicesComponent from "./bookPages/ExtraServicesComponent";
import DateTimeComponent from "./bookPages/DateTimeComponent";
import CleaningFrequencyComponent from "./bookPages/CleaningFrequencyComponent";
import ExecutionSpeedComponent from "./bookPages/ExecutionSpeedComponent";
import PropertyAddressComponent from "./bookPages/PropertyAddressComponent";
import SummaryComponent from "./bookPages/SummaryComponent";
import BookPaymentComponent from "./bookPages/BookPaymentComponent";
import {SFProDisplayBold} from "../StyledText";

export default function BookScreen () {
    const [isNavigateToServiceType, setIsNavigateToServiceType] = useState(false as boolean);
    const [isNavigateToPropertyInformation, setIsNavigateToPropertyInformation] = useState(false as boolean);
    const [isNavigateToExtraServices, setIsNavigateToExtraServices] = useState(false as boolean);
    const [isNavigateToDateTime, setIsNavigateToDateTime] = useState(false as boolean);
    const [isNavigateToCleaningFrequency, setIsNavigateToCleaningFrequency] = useState(false as boolean);
    const [isNavigateToExecutionSpeed, setIsNavigateToExecutionSpeed] = useState(false as boolean);
    const [isNavigateToPropertyAddress, setIsNavigateToPropertyAddress] = useState(false as boolean);
    const [isNavigateToSummary, setIsNavigateToSummary] = useState(false as boolean);
    const [isNavigateToCancellationPolicy, setIsNavigateToCancellationPolicy] = useState(false as boolean);
    const [isNavigateToPayment, setIsNavigateToPayment] = useState(false as boolean);
    const [isNavigateToConfirmation, setIsNavigateToConfirmation] = useState(false as boolean);

    const [isUserAuth, setIsUserAuth] = useState(false as boolean);

    return (
        <View style={styles.container}>
            <View style={styles.bookScreen__container_content_wrap}>
                {
                    isUserAuth ? (
                        <View>

                        </View>
                    ) : (
                        <View>{isNavigateToServiceType ? (
                            <View>{isNavigateToExtraServices ? (
                                <View>{isNavigateToExecutionSpeed ? (
                                    <View>{isNavigateToExecutionSpeed/*isNavigateToDateTime*/ ? (
                                        <View>{isNavigateToCleaningFrequency ? (
                                            <View>{isNavigateToExecutionSpeed ? (
                                                <View>{isNavigateToPropertyAddress ? (
                                                    <View>{isNavigateToSummary ? (
                                                        <View>{isNavigateToPayment ? (
                                                            <BookPaymentComponent/>
                                                            ) : (
                                                                <SummaryComponent
                                                                    handleIsNavigateToPropertyAddress={() => setIsNavigateToSummary(false)}
                                                                    handleIsNavigateToPayment={() => setIsNavigateToPayment(true)}

                                                                    handleIsNavigateToCancellationPolicy={() => setIsNavigateToCancellationPolicy(true)}
                                                                    handleIsNavigateToExecutionSpeed={() => setIsNavigateToExecutionSpeed(true)}
                                                                    handleIsNavigateToCleaningFrequency={() => setIsNavigateToCleaningFrequency(true)}
                                                                    handleIsNavigateToDateTime={() => setIsNavigateToDateTime(true)}
                                                                    handleIsNavigateToPropertyInformation={() => setIsNavigateToPropertyInformation(true)}
                                                                    handleIsNavigateToExtraServices={() => setIsNavigateToExtraServices(true)}
                                                                    handleIsNavigateToServiceType={() => setIsNavigateToServiceType(true)}
                                                                    handleIsNavigateToApartmentSize={() => setIsNavigateToServiceType(false)}
                                                                />
                                                            )
                                                        }</View>
                                                    ) : (
                                                        <PropertyAddressComponent
                                                            handleIsNavigateToExecutionSpeed={() => setIsNavigateToPropertyAddress(false)}
                                                            handleIsNavigateToSummary={() => setIsNavigateToSummary(true)}
                                                        />
                                                        )
                                                    }</View>
                                                ) : (
                                                    <CleaningFrequencyComponent
                                                        handleIsNavigateToExtraServices={() => setIsNavigateToCleaningFrequency(false)}
                                                        handleIsNavigateToExecutionSpeed={() => setIsNavigateToExecutionSpeed(true)}
                                                    />
                                                )
                                                }</View>
                                            ) : (
                                                <CleaningFrequencyComponent
                                                    handleIsNavigateToExtraServices={() => setIsNavigateToCleaningFrequency(false)}
                                                    handleIsNavigateToExecutionSpeed={() => setIsNavigateToExecutionSpeed(true)}
                                                />
                                            )
                                            }</View>
                                        ) : (
                                            <DateTimeComponent
                                                handleIsNavigateToCleaningFrequency={() => setIsNavigateToCleaningFrequency(true)}
                                                handleIsNavigateToPropertyInformation={() => setIsNavigateToDateTime(false)}
                                            />
                                        )
                                        }</View>
                                    ) : (
                                        <ExecutionSpeedComponent
                                            handleIsNavigateToExecutionSpeed={() => setIsNavigateToExecutionSpeed(false)}
                                            handleIsNavigateToDateTime={() => setIsNavigateToDateTime(true)}
                                        />
                                    )
                                    }</View>
                                ) : (
                                    <ExtraServicesComponent
                                        handleIsNavigateToServiceType={() => setIsNavigateToExtraServices(false)}
                                        handleIsNavigateToExecutionSpeed={() => setIsNavigateToExecutionSpeed(true)}
                                    />
                                )
                                }</View>
                            ) : (
                                <ServiceTypeComponent
                                    //handleIsNavigateToApartmentSize={() => setIsNavigateToServiceType(false)}
                                    //handleIsNavigateToExtraServices={() => setIsNavigateToExtraServices(true)}
                                />
                            )
                            }</View>
                        ) : (
                            <ApartmentSizeComponent
                                //handleIsNavigateToServiceType={() => setIsNavigateToServiceType(true)}
                            />
                        )
                        }</View>
                    )
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
    },
    bookScreen__container_header: {
        width: "100%",
        backgroundColor: "#fff",
    },
    bookScreen__container_content_wrap: {
        //height: 240,
        alignItems: "center",
        marginTop: 16,
    },
});

