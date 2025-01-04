import { StyleSheet, Text, View } from "react-native";
import TextSizesList from "@/components/TextSizesList";

type TextSizeInputProps = {
    textSize: number;
    onSelected: (size: number) => void;
}


const TextSizeInput = ({ textSize, onSelected }: TextSizeInputProps) => {
    return (
        <View style={styles.config}>
            <Text style={styles.configTitle}>
                Text Size:
            </Text>
            <TextSizesList selected={textSize} onPress={onSelected} />
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
