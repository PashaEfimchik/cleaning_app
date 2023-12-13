
import {Dimensions, StyleSheet, PixelRatio, Pressable, StyleProp, TextStyle, ViewStyle} from "react-native";
import React from "react";
import { View } from "../../../Themed";

export type RadioButtonProps = {
    accessibilityLabel?: string;
    borderColor?: string;
    borderSize?: number;
    color?: string;
    containerStyle?: StyleProp<ViewStyle>;
    description?: string;
    descriptionStyle?: StyleProp<TextStyle>;
    disabled?: boolean;
    id: string;
    item: any
    layout?: 'row' | 'column';
    onPress?: (item: any) => void;
    selected?: boolean;
    size?: number;
    testID?: string;
    children?: React.ReactNode; // Allow custom component as a child
};

export default function RadioButton({
                                        accessibilityLabel,
                                        borderColor,
                                        borderSize = 2,
                                        color = '#E8E7E7',
                                        containerStyle,
                                        description,
                                        descriptionStyle,
                                        disabled = false,
                                        id,
                                        item,
                                        layout = 'row',
                                        onPress,
                                        selected = false,
                                        size = 24,
                                        testID,
                                        children,
                                    }: RadioButtonProps) {
    const borderWidth = PixelRatio.roundToNearestPixel(borderSize);
    const sizeHalf = PixelRatio.roundToNearestPixel(size * 0.5);
    const sizeFull = PixelRatio.roundToNearestPixel(size);

    let orientation: any = { flexDirection: 'row' };
    let margin: any = { marginLeft: 10 };

    if (layout === 'column') {
        orientation = { alignItems: 'center' };
        margin = { marginTop: 10 };
    }

    function handlePress() {
        if (onPress) {
            onPress(item);
        }
    }

    const deviceWidth = Dimensions.get('window').width;
    const contentWidth = deviceWidth - 88;

    return (
        <>
            <Pressable
                accessibilityHint={description}
                accessibilityLabel={accessibilityLabel}
                accessibilityRole="radio"
                accessibilityState={{ checked: selected, disabled }}
                disabled={disabled}
                onPress={handlePress}
                style={[
                    styles.container,
                    orientation,
                    {
                        backgroundColor: selected ? '#F4F9F7' : '#FFF',
                        paddingTop: 18,
                        paddingRight: 16,
                        paddingBottom: 18,
                        paddingLeft: 16,
                        borderRadius: 4,
                        borderStyle: 'solid',
                        borderWidth: 1,
                        borderColor: selected ? '#A7CBBE' : '#E8E7E7',
                    },
                    { opacity: disabled ? 0.2 : 1 },
                    containerStyle,
                ]}
                testID={testID}
            >
                <View
                    style={[
                        styles.border,
                        {
                            borderColor: selected ? "#268664" : color,
                            borderWidth,
                            width: sizeFull,
                            height: sizeFull,
                            borderRadius: sizeHalf,
                        },
                    ]}
                >
                    {selected && (
                        <View
                            style={{
                                backgroundColor: "#268664",
                                width: sizeHalf,
                                height: sizeHalf,
                                borderRadius: sizeHalf,
                            }}
                        />
                    )}
                </View>
                <View
                    style={{
                        justifyContent: "space-between",
                        flexDirection: "row",
                        width: contentWidth,
                        backgroundColor: "transparent",
                }}>
                    {children}
                </View>
            </Pressable>
            {/*{Boolean(description) && (
                <Text style={[margin, descriptionStyle]}>{description}</Text>
            )}*/}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 5,
        //width: '100%',
    },
    border: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
