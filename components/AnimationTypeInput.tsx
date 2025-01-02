import { Pressable, StyleSheet, View } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type AnimationTypeInputProps = {
    item: string;
    selected: string;
    handlePress: (v: string) => void;
}

const AnimationTypeInput = ({ item, selected, handlePress }: AnimationTypeInputProps) => {
    const isSelected = item === selected;

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
