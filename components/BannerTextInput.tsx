import { Pressable, StyleSheet, TextInput, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type BannerTextInputProps = {
    typed: string;
    onChange: (key: keyof TextConfig, value: any) => void
    handlePress: () => void
}

const BannerTextInput = ({ typed, onChange, handlePress }: BannerTextInputProps) => {
    const onTextChange = (value: string) => {
        onChange("text", value)
    }


    return (
        <View style={styles.textInputContainer}>
            <TextInput style={styles.textInput}
                placeholder="Enter Text"
                value={typed}
                cursorColor={"white"}
                placeholderTextColor={"white"}
                onChangeText={onTextChange} />
            <Pressable style={styles.btn} onPress={handlePress}>
                <FontAwesome name="send" size={20} color="white" />
            </Pressable>
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
