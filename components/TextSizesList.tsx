import { FlatList, ListRenderItem, Pressable, StyleSheet, Text, View } from "react-native";
import { textSizes } from "@/constants/constants";

type TextSizesListProps = {
    selected: number,
    onPress: (size: number) => void
}


const TextSizesList = ({ selected, onPress }: TextSizesListProps) => {

    const renderItem: ListRenderItem<any> = ({ item }) => {
        const isSelected = selected === item.size

        return (
            <Pressable onPress={() => onPress(item.size)}>
                <View style={[styles.listItem, { borderColor: isSelected ? "white" : "transparent" }]} >
                    <Text style={styles.listText}>
                        {item.name}
                    </Text>
                </View>
            </Pressable>
        );

    }


    return (
        <FlatList horizontal contentContainerStyle={{ gap: 20 }} data={textSizes} renderItem={renderItem} />
    );
};
export default TextSizesList;
const styles = StyleSheet.create({
    listItem: {
        width: 50,
        height: 50,
        borderRadius: 5,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
    },
    listText: {
        color: "white",
        textAlign: "center"
    }
});
