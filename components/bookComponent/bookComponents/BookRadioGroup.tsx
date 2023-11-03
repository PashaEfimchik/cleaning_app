import React from 'react';
import { StyleSheet, View, StyleProp, TextStyle, ViewStyle  } from 'react-native';
import RadioButton, {RadioButtonProps} from "./BookRadioButton";

type RadioGroupProps = {
    accessibilityLabel?: string;
    containerStyle?: StyleProp<ViewStyle>;
    layout?: 'row' | 'column';
    onPress?: (selectedId: string) => void;
    radioButtons: RadioButtonProps[];
    selectedId?: string;
    testID?: string;
};

export default function RadioGroup({
                                       accessibilityLabel,
                                       containerStyle,
                                       layout = 'column',
                                       onPress,
                                       radioButtons,
                                       selectedId,
                                       testID
                                   }: RadioGroupProps) {

    function handlePress(id: string) {
        if (id !== selectedId && onPress) {
            onPress(id);
        }
    }

    return (
        <View
            accessibilityLabel={accessibilityLabel}
            accessibilityRole="radiogroup"
            style={[styles.container, { flexDirection: layout }, containerStyle]}
            testID={testID}
        >
            {radioButtons.map((button) => (
                <RadioButton
                    {...button}
                    key={button.id}
                    selected={button.id === selectedId}
                    onPress={() => handlePress(button.id)}
                />
            ))}
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    }
});