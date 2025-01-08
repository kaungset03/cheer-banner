import { StyleSheet, Text, View } from "react-native";
import FontFamilyList from "@/components/FontFamilyList";

const FontFamilyInput = () => {
    return (
        <View style={styles.config}>
            <Text style={styles.configTitle}>
                Font Family:
            </Text>
            <FontFamilyList />
        </View>
    );
};
export default FontFamilyInput;
const styles = StyleSheet.create({
    config: {
        paddingHorizontal: 15,
        rowGap: 15,
    },
    configTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
    },
    selected: {
        width: 50,
        height: 50,
        borderRadius: 5,
    }
});
