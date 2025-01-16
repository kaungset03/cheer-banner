import { StyleSheet, Text, View } from "react-native";
import FontFamilyList from "@/components/FontFamilyList";
import useAppStore from "../lib/zustand/store";


const FontFamilyInput = () => {
    const fontFamily = useAppStore((state) => state.fontFamily);
    const updateTextConfig = useAppStore((state) => state.updateTextConfig);

    const onPress = (font: string) => {
        updateTextConfig({ fontFamily: font })
    }


    return (
        <View style={styles.config}>
            <Text style={styles.configTitle}>
                Font Family:
            </Text>
            <FontFamilyList selected={fontFamily} onPress={onPress} />
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
});
