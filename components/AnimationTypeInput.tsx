import { Pressable, StyleSheet, Text, View } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import useAppStore from "@/lib/zustand/store";

type AnimationTypeInputProps = {
    item: string;
}

const AnimationTypeInput = ({ item }: AnimationTypeInputProps) => {
    const selectedAnimationType = useAppStore((state) => state.animationType);
    const updateConfig = useAppStore((state) => state.updateAnimationConfig);

    const handlePress = () => {
        updateConfig({ animationType: item });
    }

    const isSelected = selectedAnimationType === item;

    return (
        <Pressable style={[styles.selectedConfig, { borderColor: isSelected ? "white" : "transparent" }]} onPress={handlePress}>
            <View style={styles.configInput} >
                {item === "none" ? <MaterialIcons name="cancel" size={23} color="white" style={{ textAlign: "center" }} /> :
                    <Entypo name={item === "left_to_right" ? "arrow-bold-right" : "arrow-bold-left"} size={23} color="white" style={{ textAlign: "center" }} />}
            </View>
        </Pressable>
    )
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
