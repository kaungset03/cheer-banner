import { FlatList, ListRenderItem, Pressable, StyleSheet, View } from "react-native";
import { animationTypes } from "@/constants/constants";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import useAppStore from "../lib/zustand/store";

const AnimationTypeInput = () => {
    const animationType = useAppStore((state) => state.animationType);
    const updateAnimationConfig = useAppStore((state) => state.updateAnimationConfig);

    const handlePress = (type: string) => {
        updateAnimationConfig({ animationType: type })
    }


    const renderItem: ListRenderItem<string> = ({ item }) => {
        const isSelected = item === animationType;
        return (
            <Pressable style={[styles.selectedConfig, { borderColor: isSelected ? "white" : "transparent" }]} onPress={() => handlePress(item)}>
                <View style={styles.configInput} >
                    {item === "none" ? <MaterialIcons name="cancel" size={23} color="white" style={{ textAlign: "center" }} /> :
                        <Entypo
                            name={item === "right_to_left" ? "arrow-left" : item === "left_to_right" ? "arrow-right" : "star-outlined"}
                            size={23} color="white" style={{ textAlign: "center" }} />}
                </View>
            </Pressable>
        )
    }


    return (
        <FlatList horizontal data={animationTypes} renderItem={renderItem} />
    );
};
export default AnimationTypeInput;
const styles = StyleSheet.create({
    selectedConfig: {
        width: 60,
        height: 60,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        padding: 1,
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
});
