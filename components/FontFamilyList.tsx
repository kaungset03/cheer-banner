import { FlatList, ListRenderItem, Pressable, StyleSheet, Text, View } from "react-native";
import { fontFamilies } from "@/constants/constants";

type FontFamilyListProps = {
    selected: string,
    onPress: (size: string) => void
}


const FontFamilyList = ({ selected, onPress }: FontFamilyListProps) => {

    const renderItem: ListRenderItem<any> = ({ item }) => {
        const isSelected = item === selected;        

        return (
            <Pressable onPress={() => onPress(item)}>
                <View style={[styles.listItem, { borderColor: isSelected ? "white" : "transparent" }]} >
                    <Text style={[styles.listText, { fontFamily: item}]}>
                        Aa
                    </Text>
                </View>
            </Pressable>
        );

    }


    return (
        <FlatList horizontal contentContainerStyle={{ gap: 20 }} data={fontFamilies} renderItem={renderItem} />
    );
};
export default FontFamilyList;
const styles = StyleSheet.create({
    listItem: {
        width: 45,
        height: 45,
        borderRadius: 5,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
    },
    listText: {
        fontSize: 18,
        color: "white",
        textAlign: "center"
    }
});
