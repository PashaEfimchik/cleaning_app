import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { LogBox } from 'react-native';
import ApartmentSizeComponent from "../../components/bookTab/bookPages/ApartmentSizeComponent";
import ServiceTypeComponent from "../../components/bookTab/bookPages/ServiceTypeComponent";
import ExtraServicesComponent from "../../components/bookTab/bookPages/ExtraServicesComponent";
import ExecutionSpeedComponent from "../../components/bookTab/bookPages/ExecutionSpeedComponent";
import DateTimeComponent from "../../components/bookTab/bookPages/DateTimeComponent";
import PropertyAddressComponent from "../../components/bookTab/bookPages/PropertyAddressComponent";
import SummaryComponent from "../../components/bookTab/bookPages/SummaryComponent";
import EditSummaryComponent from "../../components/bookTab/bookPages/EditSummaryComponent";
import ConfirmationComponent from "../../components/bookTab/bookPages/ConfirmationComponent";

LogBox.ignoreLogs(['Sending `onAnimatedValueUpdate` with no listeners registered.']);

const BookStack = createStackNavigator();

export default function TabBookScreen() {

    return (
        <BookStack.Navigator
            initialRouteName="ApartmentSize"
            screenOptions={{
                headerShown: false,
            }}
        >
            <BookStack.Screen name="ApartmentSize" component={ApartmentSizeComponent} />
            <BookStack.Screen name="ServiceType" component={ServiceTypeComponent} />
            <BookStack.Screen name="ExtraServices" component={ExtraServicesComponent} />
            <BookStack.Screen name="ExecutionSpeed" component={ExecutionSpeedComponent} />
            <BookStack.Screen name="DateTime" component={DateTimeComponent} />
            <BookStack.Screen name="PropertyAddress" component={PropertyAddressComponent} />
            <BookStack.Screen name="Summary" component={SummaryComponent} />
            <BookStack.Screen name="EditSummary" component={EditSummaryComponent} />
            <BookStack.Screen name="Confirmation" component={ConfirmationComponent} />

        </BookStack.Navigator>

    );
}