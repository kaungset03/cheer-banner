import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type NavigationBarProps = {
    showedConfig: string;
    handlePress: (v: "animation" | "text") => void
}

const NavigationBar = ({ showedConfig, handlePress }: NavigationBarProps) => {
    return (
        <View style={styles.navContainer}>
            <Pressable style={[styles.navBtn, { backgroundColor: showedConfig === "text" ? "gray" : "transparent" }]} onPress={() => handlePress("text")}>
                <MaterialCommunityIcons name="format-text" size={20} color="white" />
                <Text style={styles.text}>
                    Text
                </Text>
            </Pressable>
            <Pressable style={[styles.navBtn, { backgroundColor: showedConfig === "animation" ? "gray" : "transparent" }]} onPress={() => handlePress("animation")}>
                <MaterialCommunityIcons name="animation-play" size={20} color="white" />
                <Text style={styles.text}>
                    Animation
                </Text>
            </Pressable>
        </View>

    );
};
export default NavigationBar;
const styles = StyleSheet.create({
    navContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "white",
        paddingBottom: 3,
    },
    navBtn: {
        flex: 1,
        paddingVertical: 15,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        columnGap: 10,
    },
    text: {
        color: "white",
    },
});
