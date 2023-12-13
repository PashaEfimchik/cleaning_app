import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Dimensions} from "react-native";
import info from "./info";
import Svg, {Path} from "react-native-svg";
import {SFProDisplaySemibold} from "../components/StyledText";
import book from "./book";
import profile from "./profile";
import React from "react";

const Tab = createBottomTabNavigator();

const height  = Dimensions.get('window').height;

export default function HomeTabs() {
    return (
        <Tab.Navigator initialRouteName="info">
            <Tab.Screen
                component={info}
                name="info"
                options={{
                    tabBarStyle: {
                        height: 55,
                        paddingTop: 8,
                        paddingBottom: height > 750 ? 23 : 5,
                        borderTopWidth: 0,
                    },
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <>
                                <Svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                >
                                    <Path
                                        d="M11 14V11"
                                        stroke={focused ? "#268664" : "#E0E0E0"}
                                    />
                                    <Path
                                        d="M11 7C10.4477 7 10 7.44772 10 8C10 8.55228 10.4477 9 11 9C11.5523 9 12 8.55228 12 8C12 7.44772 11.5523 7 11 7Z"
                                        stroke={focused ? "#268664" : "#E0E0E0"}
                                    />
                                    <Path
                                        d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                                        stroke={focused ? "#268664" : "#E0E0E0"}
                                    />
                                </Svg>
                            </>
                        )
                    },
                    tabBarLabel: ({ focused }) => {
                        return (
                            <>
                                <SFProDisplaySemibold
                                    style={{
                                        color: focused ? "#268664" : "#E0E0E0",
                                        fontSize: 12,
                                        fontStyle: "normal",
                                        fontWeight: "600",
                                        letterSpacing: 0.144,
                                        marginTop: 8,
                                    }}
                                >
                                    Info
                                </SFProDisplaySemibold>
                            </>
                        );

                    }
                }}
            />
            <Tab.Screen
                component={book}
                name="book"
                options={{
                    tabBarStyle: {
                        height: 55,
                        paddingTop: 8,
                        paddingBottom: /*height > 750 ? 23 : */5,
                        borderTopWidth: 0,
                        //backgroundColor: "#4f4",
                    },
                    headerShown: false,
                    tabBarIcon: () => null,
                    tabBarLabel: ({ focused }) => {
                        return (
                            <>
                                <Svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <Path
                                        d="M3 10.1818V20.1818C3 20.1818 3 22 4.8 22C6.6 22 19.2 22 19.2 22C19.2 22 21 22 21 20.1818C21 18.3636 21 10.1818 21 10.1818L12 2L3 10.1818Z"
                                        fill="none"
                                        stroke={focused ? "#268664" : "#E0E0E0"}
                                    />
                                </Svg>
                                <SFProDisplaySemibold
                                    style={{
                                        color: focused ? "#268664" : "#E0E0E0",
                                        fontSize: 12,
                                        fontStyle: "normal",
                                        letterSpacing: 0.144,
                                        marginTop: 8,
                                        fontWeight: "600",
                                    }}
                                >
                                    Book
                                </SFProDisplaySemibold>
                            </>
                        );
                    }
                }}
            />
            <Tab.Screen
                component={profile}
                name="profile"
                options={{
                    tabBarStyle: {
                        height: 55,
                        paddingTop: 8,
                        paddingBottom: height > 750 ? 23 : 5,
                        borderTopWidth: 0,
                    },
                    headerShown: false,
                    tabBarIcon: () => null,
                    tabBarLabel: ({ focused }) => {
                        return (
                            <>
                                <Svg
                                    width="22"
                                    height="24"
                                    viewBox="0 0 25 24"
                                    fill="none"
                                >
                                    <Path
                                        d="M6 19.5C6 19.5 9.5 18 10.5 17C11.5 16 8.5 16 8.5 11C8.5 6 12.5 6 12.5 6C12.5 6 16.5 6 16.5 11C16.5 16 13.5 16 14.5 17C15.5 18 19 19.5 19 19.5"
                                        stroke={focused ? "#268664" : "#E0E0E0"}
                                    />
                                    <Path
                                        d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
                                        stroke={focused ? "#268664" : "#E0E0E0"}
                                    />
                                </Svg>
                                <SFProDisplaySemibold
                                    style={{
                                        color: focused ? "#268664" : "#E0E0E0",
                                        fontSize: 12,
                                        fontStyle: "normal",
                                        letterSpacing: 0.144,
                                        marginTop: 8,
                                        fontWeight: "600",
                                    }}
                                >
                                    Profile
                                </SFProDisplaySemibold>
                            </>
                        );
                    }
                }}
            />
        </Tab.Navigator>
    );
}