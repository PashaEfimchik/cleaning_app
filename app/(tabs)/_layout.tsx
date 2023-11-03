import { Link, Tabs } from 'expo-router';
import {Dimensions, Image, Pressable, useColorScheme} from 'react-native';
import { SFProDisplayRegular} from "../../components/StyledText";
import Colors from '../../constants/Colors';
import React from "react";
import Svg, { Path } from 'react-native-svg';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const { height } = Dimensions.get('window');

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
            tabBarStyle: {
                height: 60,
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
                            width="24"
                            height="24"
                            fill="none"
                        >
                            <Path
                                d="M12 4V6"
                                stroke={focused ? "#268664" : "#E0E0E0"}
                            />
                            <Path
                                d="M12 18V20"
                                stroke={focused ? "#268664" : "#E0E0E0"}
                            />
                            <Path
                                d="M15.5 8C15.5 8 15 6 12 6C9 6 8.5 7.95652 8.5 9C8.5 13.1403 15.5 10.9649 15.5 15C15.5 16.0435 15 18 12 18C9 18 8.5 16 8.5 16"
                                stroke={focused ? "#268664" : "#E0E0E0"}
                            />

                        </Svg>
                        <SFProDisplayRegular
                            style={{
                                color: focused ? "#268664" : "#E0E0E0",
                                fontSize: 12,
                                fontStyle: "normal",
                                letterSpacing: 0.144,
                                marginTop: 8,
                            }}
                        >
                            Info/Price
                        </SFProDisplayRegular>
                    </>
                );
            }
        }}
      />
      <Tabs.Screen
        name="book"
        options={{
            tabBarStyle: {
                height: 60,
                paddingTop: 8,
                paddingBottom: /*height > 750 ? 23 : */5,
                borderTopWidth: 0,
            },
            headerShown: false,
            tabBarIcon: () => null,
            tabBarLabel: ({ focused }) => {
                return (
                    <>
                        <Svg
                            width="24"
                            height="24"
                            fill="none"
                        >
                            <Path
                                d="M3 10.1818V20.1818C3 20.1818 3 22 4.8 22C6.6 22 19.2 22 19.2 22C19.2 22 21 22 21 20.1818C21 18.3636 21 10.1818 21 10.1818L12 2L3 10.1818Z"
                                fill="none"
                                stroke={focused ? "#268664" : "#E0E0E0"}
                            />
                        </Svg>
                        <SFProDisplayRegular
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
                        </SFProDisplayRegular>
                    </>
                );
            }
        }}
      />
        <Tabs.Screen
            name="profile"
            options={{
                tabBarStyle: {
                    height: 60,
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
                                width="24"
                                height="24"
                                fill="none"
                            >
                                <Path
                                    d="M6 19.5C6 19.5 9.5 18 10.5 17C11.5 16 8.5 16 8.5 11C8.5 6 12.5 6 12.5 6C12.5 6 16.5 6 16.5 11C16.5 16 13.5 16 14.5 17C15.5 18 19 19.5 19 19.5"
                                    stroke={focused ? "#268664" : "#E0E0E0"}
                                    stroke-linecap="round"
                                />
                                <Path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
                                    stroke={focused ? "#268664" : "#E0E0E0"}
                                />
                            </Svg>
                            <SFProDisplayRegular
                                style={{
                                    color: focused ? "#268664" : "#E0E0E0",
                                    fontSize: 12,
                                    fontStyle: "normal",
                                    letterSpacing: 0.144,
                                    marginTop: 8,
                                }}
                            >
                                Profile
                            </SFProDisplayRegular>
                        </>
                    );
                }
            }}
        />
    </Tabs>
  );
}
