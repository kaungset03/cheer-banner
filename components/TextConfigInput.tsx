import { ListRenderItem, Pressable, StyleSheet, View } from "react-native";

type TextConfigInputProps = {
    item: string;
    selected: string;
    handlePress: (t: string) => void;
}


const TextConfigInput = ({ item, selected, handlePress }: TextConfigInputProps) => {
    const isSelected = item === selected;
    return (
        <Pressable style={[styles.selectedConfig, { borderColor: isSelected ? "white" : "transparent" }]} onPress={() => handlePress(item)}>
            <View style={[styles.configInput, { backgroundColor: item }]} />
        </Pressable>
    )
};
export default TextConfigInput;
const styles = StyleSheet.create({
    selectedConfig: {
        width: 55,
        height: 55,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        padding: 5,
        marginRight: 12,
    },
    configInput: {
        width: "100%",
        height: "100%",
        borderRadius: 50,
    },
});