import { Pressable, StyleSheet, Text, View } from "react-native";

type TextSizeInputProps = {
    item: { name: string, size: number };
    selected: number;
    handlePress: (t: number) => void;
}


const TextSizeInput = ({ item, selected, handlePress }: TextSizeInputProps) => {
    const isSelected = selected === item.size;
    return (
        <Pressable style={[styles.selectedConfig, { borderColor: isSelected ? "white" : "transparent" }]} onPress={() => handlePress(item.size)}>
            <View style={styles.configInput} >
                <Text style={styles.text}>{item.name}</Text>
            </View>
        </Pressable>
    )
};
export default TextSizeInput;
const styles = StyleSheet.create({
    selectedConfig: {
        width: 55,
        height: 55,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        padding: 3,
        marginRight: 10,
    },
    configInput: {
        width: "100%",
        height: "100%",
        borderRadius: 5,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 14,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    }
});
