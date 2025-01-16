import { router } from "expo-router";
import { StyleSheet, TextInput, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import PressableOpacity from "@/components/PressableOpacity";
import useAppStore from "@/lib/zustand/store";


const BannerTextInput = () => {

    const text = useAppStore((state) => state.text);
    const updateTextConfig = useAppStore((state) => state.updateTextConfig);

    const onTextChange = (v: string) => {
        updateTextConfig({ text: v })
    }

    const handlePress = () => {
        router.navigate("/banner");
    }



    return (
        <View style={styles.textInputContainer}>
            <TextInput style={styles.textInput}
                placeholder="Enter Text"
                autoFocus
                value={text}
                cursorColor={"white"}
                placeholderTextColor={"white"}
                onChangeText={onTextChange} />
            <PressableOpacity style={styles.btn} onPress={handlePress}>
                <FontAwesome name="send" size={20} color="white" />
            </PressableOpacity>
        </View>
    );
};
export default BannerTextInput;
const styles = StyleSheet.create({
    textInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10,
        backgroundColor: "black",
        padding: 8,
        borderRadius: 10,
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        color: "white",
        paddingHorizontal: 5,
    },
    btn: {
        height: 40,
        width: 40,
        borderWidth: 1,
        borderColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
});
