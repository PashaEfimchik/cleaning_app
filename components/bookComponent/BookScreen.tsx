import {View} from "../Themed";
import {StyleSheet} from "react-native";
import React, {useEffect, useState} from "react";
import ApartmentSizeComponent from "./bookPages/ApartmentSizeComponent";
import ServiceTypeComponent from "./bookPages/ServiceTypeComponent";
import PropertyInformationComponent from "./bookPages/PropertyInformationComponent";
import ExtraServicesComponent from "./bookPages/ExtraServicesComponent";

interface PriceComponentProps {
    value: string,
    price: number,
}
export default function BookScreen () {
    const [totalPrice, setTotalPrice] = useState(0);
    const [subTotalPrice, setSubTotalPrice] = useState(0);
    const [taxPrice, setTaxPrice] = useState(0);

    const [priceComponents, setPriceComponents] = useState<PriceComponentProps[]>([]);

    const [apartmentSize, setApartmentSize] = useState(0);
    const [apartmentSizePrice, setApartmentSizePrice] = useState(0);

    const [serviceType, setServiceType] = useState('' as string);
    const [serviceTypePrice, setServiceTypePrice] = useState(0);

    const [bedRoomCount, setBedRoomCount] = useState(0);
    const [bedRoomCountPrice, setBedRoomCountPrice] = useState(0);

    const [cleaningFrequencyType, setCleaningFrequencyType] = useState('');
    const [cleaningFrequencyTypePrice, setCleaningFrequencyTypePrice] = useState(0);

    const [bathRoomCount, setBathRoomCount] = useState(0);
    const [bathRoomCountPrice, setBathRoomCountPrice] = useState(0);

    const [dirtyDegree, setDirtyDegree] = useState('');
    const [dirtyDegreePrice, setDirtyDegreePrice] = useState(0);

    const [extraServices, setExtraServices] = useState([]);
    const [extraServicesPrice, setExtraServicesPrice] = useState(0);

    const [isNavigateToServiceType, setIsNavigateToServiceType] = useState(false as boolean);
    const [isNavigateToPropertyInformation, setIsNavigateToPropertyInformation] = useState(false as boolean);
    const [isNavigateToExtraServices, setIsNavigateToExtraServices] = useState(false as boolean);

    const handleApartmentSize = (newApartmentSize: number) => {
        setApartmentSize(newApartmentSize);
    }

    const handelServiceType = (newServiceType: string) => {
        setServiceType(newServiceType);
    }

    const handleBedRoomCount = (newBedRoomCount: number) => {
        setBedRoomCount(newBedRoomCount);
    }

    const handleCleaningFrequencyType = (newCleaningFrequencyType: string) => {
        setCleaningFrequencyType(newCleaningFrequencyType);
    }

    const handleBathRoomCount = (newBathRoomCount: number) => {
        setBathRoomCount(newBathRoomCount);
    }

    const handleDirtyDegree = (newDirtyDegree: string) => {
        setDirtyDegree(newDirtyDegree);
    }

    const handleExtraServices = (newExtraServices: string[]) => {
        // @ts-ignore
        setExtraServices([newExtraServices])
        console.log("extraServices: ", newExtraServices);
    }

    const handleApartmentSizePrice = (newApartmentSizePrice: number) => {
        setApartmentSizePrice(newApartmentSizePrice);
        setSubTotalPrice(newApartmentSizePrice);
        setTotalPrice(newApartmentSizePrice + newApartmentSizePrice * 0.21);
        setTaxPrice(newApartmentSizePrice * 0.21);
    }

    const handleServiceTypePrice = (newServiceTypePrice: number) => {
        setServiceTypePrice(newServiceTypePrice);
        setSubTotalPrice(newServiceTypePrice + apartmentSizePrice);
        setTotalPrice(
            newServiceTypePrice +
            newServiceTypePrice * 0.21 +
            apartmentSizePrice +
            apartmentSizePrice * 0.21
        );
        setTaxPrice((apartmentSizePrice + newServiceTypePrice) * 0.21);

        const newPriceComponent = {
            value: serviceType,
            price: newServiceTypePrice,
        };

        setPriceComponents([...priceComponents, newPriceComponent]);

    }

    const handleBedRoomCountPrice = (newBedRoomCountPrice: number) => {
        setBedRoomCountPrice(newBedRoomCountPrice);

        /*console.log("-------------------------");
        console.log(" - handleExtraServicesPrice start - ");
        console.log("totalPrice: ", totalPrice);
        console.log("subTotalPrice: ", subTotalPrice);
        console.log("taxPrice: ", taxPrice);
        console.log("apartmentSizePrice: ", apartmentSizePrice);
        console.log("newBedRoomCountPrice: ", newBedRoomCountPrice);
        console.log("newServiceTypePrice + apartmentSizePrice + extraServicesPrice: ", newBedRoomCountPrice + apartmentSizePrice + serviceTypePrice);
        console.log(" - handleExtraServicesPrice end - ");
        console.log("-------------------------");*/

        setSubTotalPrice(newBedRoomCountPrice + serviceTypePrice + apartmentSizePrice);
        setTotalPrice(
            newBedRoomCountPrice +
            newBedRoomCountPrice * 0.21 +
            apartmentSizePrice +
            apartmentSizePrice * 0.21 +
            serviceTypePrice +
            serviceTypePrice * 0.21
        );
        setTaxPrice((apartmentSizePrice + serviceTypePrice + newBedRoomCountPrice) * 0.21)
    }

    const handleCleaningFrequencyTypePrice = (newCleaningFrequencyTypePrice: number) => {
        setCleaningFrequencyTypePrice(newCleaningFrequencyTypePrice);
        console.log("handleCleaningFrequencyTypePrice: ", newCleaningFrequencyTypePrice);
        console.log("bedRoomCountPrice: ", bedRoomCountPrice);
        setSubTotalPrice(newCleaningFrequencyTypePrice + bedRoomCountPrice + serviceTypePrice + apartmentSizePrice);
        setTotalPrice(
            newCleaningFrequencyTypePrice +
            apartmentSizePrice +
            apartmentSizePrice * 0.21 +
            serviceTypePrice +
            serviceTypePrice * 0.21 +
            bedRoomCountPrice +
            bedRoomCountPrice * 0.21
        );
        setTaxPrice((apartmentSizePrice + serviceTypePrice + bedRoomCountPrice) * 0.21)
    }

    const handleBathRoomCountPrice = (newBathRoomCountPrice: number) => {
        setBathRoomCountPrice(newBathRoomCountPrice);

        /*console.log("-------------------------");
        console.log(" - handleExtraServicesPrice start - ");
        console.log("totalPrice: ", totalPrice);
        console.log("subTotalPrice: ", subTotalPrice);
        console.log("taxPrice: ", taxPrice);
        console.log("apartmentSizePrice: ", apartmentSizePrice);
        console.log("newBedRoomCountPrice: ", newBedRoomCountPrice);
        console.log("newServiceTypePrice + apartmentSizePrice + extraServicesPrice: ", newBedRoomCountPrice + apartmentSizePrice + serviceTypePrice);
        console.log(" - handleExtraServicesPrice end - ");
        console.log("-------------------------");*/

        setSubTotalPrice(newBathRoomCountPrice + cleaningFrequencyTypePrice + bedRoomCountPrice + serviceTypePrice + apartmentSizePrice);
        setTotalPrice(
            newBathRoomCountPrice +
            newBathRoomCountPrice * 0.21 +
            apartmentSizePrice +
            apartmentSizePrice * 0.21 +
            serviceTypePrice +
            serviceTypePrice * 0.21 +
            bedRoomCountPrice +
            bedRoomCountPrice * 0.21
        );
        setTaxPrice((apartmentSizePrice + serviceTypePrice + bedRoomCountPrice + newBathRoomCountPrice) * 0.21)
    }

    const handleDirtyDegreePrice = (newDirtyDegreePrice: number) => {
        setDirtyDegreePrice(newDirtyDegreePrice);

        setSubTotalPrice(newDirtyDegreePrice + bathRoomCountPrice + cleaningFrequencyTypePrice + bedRoomCountPrice + serviceTypePrice + apartmentSizePrice);
        setTotalPrice(
            newDirtyDegreePrice +
            newDirtyDegreePrice * 0.21 +
            apartmentSizePrice +
            apartmentSizePrice * 0.21 +
            serviceTypePrice +
            serviceTypePrice * 0.21 +
            bedRoomCountPrice +
            bedRoomCountPrice * 0.21 +
            cleaningFrequencyTypePrice +
            cleaningFrequencyTypePrice * 0.21 +
            bathRoomCountPrice +
            bathRoomCountPrice * 0.21
        );

        setTaxPrice((apartmentSizePrice + serviceTypePrice + bedRoomCountPrice + cleaningFrequencyTypePrice + bathRoomCountPrice + newDirtyDegreePrice) * 0.21);
    }

    const handleExtraServicesPrice = (newExtraServicesPrice: number) => {
//        setBedRoomCountPrice(newExtraServicesPrice);

        console.log("-------------------------");
        console.log(" - handleExtraServicesPrice start - ");
        console.log("totalPrice: ", totalPrice);
        console.log("subTotalPrice: ", subTotalPrice);
        console.log("taxPrice: ", taxPrice);
        console.log("apartmentSizePrice: ", apartmentSizePrice);
        console.log("newExtraServicesPrice: ", newExtraServicesPrice);
        console.log("newServiceTypePrice + apartmentSizePrice + extraServicesPrice: ", newExtraServicesPrice + apartmentSizePrice + serviceTypePrice);
        console.log(" - handleExtraServicesPrice end - ");
        console.log("-------------------------");

        setSubTotalPrice(newExtraServicesPrice + serviceTypePrice + apartmentSizePrice);
        setTotalPrice(
            newExtraServicesPrice +
            newExtraServicesPrice * 0.21 +
            apartmentSizePrice +
            apartmentSizePrice * 0.21 +
            serviceTypePrice +
            serviceTypePrice * 0.21
        );
        setTaxPrice((apartmentSizePrice + serviceTypePrice + newExtraServicesPrice) * 0.21)
    }

    useEffect(() => {
        console.log("-------------------------");
        console.log(" - useEffect start - ");
        console.log("totalPrice: ", totalPrice);
        console.log("subTotalPrice: ", subTotalPrice);
        console.log("taxPrice: ", taxPrice);
        console.log(" - useEffect end - ");
        console.log("-------------------------");
    }, [totalPrice, subTotalPrice, taxPrice]);

    const updatePrices = (newTotalPrice: number, newSubTotalPrice: number, newTaxPrice: number) => {

        console.log("-------------------------");
        console.log(" - update prices start - ");
        console.log("newTotalPrice: ", newTotalPrice);
        console.log("newSubTotalPrice: ", newSubTotalPrice);
        console.log("newTaxPrice: ", newTaxPrice);
        console.log("totalPrice: ", totalPrice);
        console.log("subTotalPrice: ", subTotalPrice);
        console.log("taxPrice: ", taxPrice);
        console.log(" - update prices end - ");
        console.log("-------------------------");

        setTotalPrice(newTotalPrice);
        setSubTotalPrice(newSubTotalPrice);
        setTaxPrice(newTaxPrice);
    }

    return (
        <View style={styles.container}>
            <View style={styles.bookScreen__container_content_wrap}>
                {
                    isNavigateToServiceType ? (
                        <View>
                            {
                                isNavigateToPropertyInformation ? (
                                        <View>
                                            {
                                                isNavigateToExtraServices ? (
                                                    <ExtraServicesComponent
                                                        extraServices={extraServices}
                                                        extraServicesPrice={extraServicesPrice}
                                                        totalPrice={totalPrice}
                                                        subTotalPrice={subTotalPrice}
                                                        taxPrice={taxPrice}
                                                        handleExtraServices={handleExtraServices}
                                                        handleExtraServicesPrice={handleExtraServicesPrice}
                                                        handleTotalPrice={() => setTotalPrice(  apartmentSizePrice + serviceTypePrice + taxPrice)}
                                                        handleSubTotalPrice={() => setSubTotalPrice(serviceTypePrice)}
                                                        handleTaxPrice={() => setTaxPrice(0.21 * ( serviceTypePrice))}
                                                        handleIsNavigateToPropertyInformation={() => setIsNavigateToExtraServices(false)}
                                                    />
                                                ) : (
                                                    <PropertyInformationComponent
                                                        bedRoomCount={bedRoomCount}
                                                        bedRoomCountPrice={bedRoomCountPrice}
                                                        cleaningFrequencyType={cleaningFrequencyType}
                                                        cleaningFrequencyTypePrice={cleaningFrequencyTypePrice}
                                                        bathRoomCount={bathRoomCount}
                                                        bathRoomCountPrice={bathRoomCountPrice}
                                                        dirtyDegree={dirtyDegree}
                                                        dirtyDegreePrice={dirtyDegreePrice}
                                                        totalPrice={totalPrice}
                                                        subTotalPrice={subTotalPrice}
                                                        taxPrice={taxPrice}
                                                        serviceType={serviceType}
                                                        serviceTypePrice={serviceTypePrice}
                                                        handleBedRoomCount={handleBedRoomCount}
                                                        handleBedRoomCountPrice={handleBedRoomCountPrice}
                                                        handleCleaningFrequencyType={handleCleaningFrequencyType}
                                                        handleCleaningFrequencyTypePrice={handleCleaningFrequencyTypePrice}
                                                        handleBathRoomCount={handleBathRoomCount}
                                                        handleBathRoomCountPrice={handleBathRoomCountPrice}
                                                        handleDirtyDegree={handleDirtyDegree}
                                                        handleDirtyDegreePrice={handleDirtyDegreePrice}
                                                        onUpdatePrices={updatePrices}
                                                        handleIsNavigateToServiceType={() => setIsNavigateToPropertyInformation(false)}
                                                        handleIsNavigateToExtraServices={() => setIsNavigateToExtraServices(true)}
                                                    />
                                                )
                                            }
                                        </View>

                                ) : (
                                    <ServiceTypeComponent
                                        serviceType={serviceType}
                                        serviceTypePrice={serviceTypePrice}
                                        totalPrice={totalPrice}
                                        subTotalPrice={subTotalPrice}
                                        taxPrice={taxPrice}
                                        handleServiceType={handelServiceType}
                                        handleServiceTypePrice={handleServiceTypePrice}
                                        onUpdatePrices={updatePrices}
                                        /*handleTotalPrice={() => setTotalPrice(  apartmentSizePrice + serviceTypePrice + taxPrice)}
                                        handleSubTotalPrice={() => setSubTotalPrice(apartmentSizePrice + serviceTypePrice)}
                                        handleTaxPrice={() => setTaxPrice(0.21 * ( serviceTypePrice))}
                                        */
                                        handleIsNavigateToApartmentSize={() => setIsNavigateToServiceType(false)}
                                        handleIsNavigateToPropertyInformation={() => setIsNavigateToPropertyInformation(true)}
                                    />
                                )
                            }
                        </View>
                    ) : (
                        <ApartmentSizeComponent
                            apartmentSize={apartmentSize}
                            apartmentSizePrice={apartmentSizePrice}
                            totalPrice={totalPrice}
                            subTotalPrice={subTotalPrice}
                            taxPrice={taxPrice}
                            onUpdatePrices={updatePrices}
                            handleApartmentSize={handleApartmentSize}
                            handleApartmentSizePrice={handleApartmentSizePrice}
                            /*handleTotalPrice={() => setTotalPrice(apartmentSizePrice + taxPrice)}
                            handleSubTotalPrice={() => setSubTotalPrice(apartmentSizePrice)}
                            handleTaxPrice={() => setTaxPrice(0.21 * apartmentSizePrice)}*/
                            handleIsNavigateToServiceType={() => setIsNavigateToServiceType(true)}
                        />
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
        height: 240,
        alignItems: "center",
        marginTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
    },
});

