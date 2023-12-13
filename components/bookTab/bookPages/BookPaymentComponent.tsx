import {View} from "../../Themed";
import {StyleSheet} from "react-native";
import {SFProDisplayBold} from "../../StyledText";

export default function BookPaymentComponent () {
    return (
        <View style={styles.container}>
            <SFProDisplayBold>
                Stripe payment
            </SFProDisplayBold>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
    },
});