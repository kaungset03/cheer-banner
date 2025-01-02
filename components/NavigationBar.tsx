import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
const NavigationBar = () => {
    const [showedConfig, setShowedConfig] = useState<"text" | "animation">("text");

    const handleNavPress = (config: "text" | "animation") => {
        setShowedConfig(config);
    };

    return (
        <>
            <View style={styles.navContainer}>
                <Pressable
                    style={[styles.navBtn, { backgroundColor: showedConfig === "text" ? "gray" : "transparent" }]}
                    onPress={() => handleNavPress("text")}
                >
                    <MaterialCommunityIcons name="format-text" size={20} color="white" />
                    <Text style={styles.text}>Text</Text>
                </Pressable>
                <Pressable
                    style={[styles.navBtn, { backgroundColor: showedConfig === "animation" ? "gray" : "transparent" }]}
                    onPress={() => handleNavPress("animation")}
                >
                    <MaterialCommunityIcons name="animation-outline" size={20} color="white" />
                    <Text style={styles.text}>Animation</Text>
                </Pressable>
            </View>
        </>
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
