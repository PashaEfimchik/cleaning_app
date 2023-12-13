import React from 'react';
import {
    PixelRatio,
    Pressable,
    StyleSheet,
    Text,
    View,
    StyleProp,
    TextStyle,
    ViewStyle, Dimensions
} from 'react-native';
import {SFProDisplayLight} from "../../StyledText";

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
    key?: string;
    label?: string;
    price?: string;
    clockwise?: string;
    labelStyle?: StyleProp<TextStyle>;
    layout?: 'row' | 'column';
    onPress?: (id: string) => void;
    selected?: boolean;
    size?: number;
    testID?: string;
    value?: string;
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
                                        label,
                                        price,
                                        clockwise,
                                        labelStyle,
                                        layout = 'row',
                                        onPress,
                                        selected = false,
                                        size = 24,
                                        testID,
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
            onPress(id);
        }
    }

    const deviceWidth = Dimensions.get('window').width;
    const contentWidth = deviceWidth - 88;

    return (
        <>
            <Pressable
                accessibilityHint={description}
                accessibilityLabel={accessibilityLabel || label}
                accessibilityRole="radio"
                accessibilityState={{ checked: selected, disabled }}
                disabled={disabled}
                onPress={handlePress}
                style={[
                    styles.container,
                    orientation,
                    {
                      backgroundColor: selected ? "#F4F9F7" : "#FFF",
                        paddingTop: 18,
                        paddingRight: 16,
                        paddingBottom: 18,
                        paddingLeft: 16,
                        borderRadius: 4,
                        borderStyle: "solid",
                        borderWidth: 1,
                        borderColor: selected ? "#A7CBBE" : "#E8E7E7",
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
                <View style={{justifyContent: "space-between", flexDirection: "row", width: contentWidth}}>
                    <View>
                    {
                        Boolean(label) &&
                            <SFProDisplayLight style={[margin, labelStyle, {
                                color: "#3A3A3A",
                                fontSize: 20,
                                fontStyle: "normal",
                                fontWeight: "300",
                                letterSpacing: 0.8,
                            }]}>
                                {
                                    label
                                }
                            </SFProDisplayLight>
                    }
                    </View>
                    <View>
                    {
                        Boolean(price) &&
                            <SFProDisplayLight style={[margin, labelStyle, {
                                color: "#3A3A3A",
                                fontSize: 20,
                                fontStyle: "normal",
                                fontWeight: "300",
                                letterSpacing: 1.2,
                            }]}>
                                €{
                                    price
                                }
                                {
                                    Boolean(clockwise) &&
                                        <Text style={[margin, labelStyle]}>
                                            {
                                                clockwise
                                            }
                                        </Text>
                                }

                            </SFProDisplayLight>
                    }
                    </View>
                </View>
            </Pressable>
            {Boolean(description) && (
                <Text style={[margin, descriptionStyle]}>{description}</Text>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 5,
        width: "100%",
    },
    border: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});