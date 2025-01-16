import { StyleSheet, Text, View } from "react-native";
import TextSizesList from "@/components/TextSizesList";
import useAppStore from "@/lib/zustand/store";

const TextSizeInput = () => {
    const fontSize = useAppStore((state) => state.fontSize);
    const updateTextConfig = useAppStore((state) => state.updateTextConfig);

    const onPress = (size: number) => {
        updateTextConfig({ fontSize: size })
    }


    return (
        <View style={styles.config}>
            <Text style={styles.configTitle}>
                Text Size:
            </Text>
            <TextSizesList selected={fontSize} onPress={onPress} />
        </View>
    );
};
export default TextSizeInput;
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
