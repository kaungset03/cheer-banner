import { useState } from "react";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import useAppStore from "@/lib/zustand/store";
import SaveButton from "@/components/SaveButton";
import TextConfigs from "@/components/TextConfigs";
import AnimationConfigs from "@/components/AnimationConfigs";

const create = () => {
    const textColor = useAppStore(state => state.textColor)
    const bgColor = useAppStore(state => state.bgColor)
    const fontSize = useAppStore(state => state.fontSize)
    const text = useAppStore(state => state.text)
    const [typed, setTyped] = useState(text);
    const [showedConfig, setShowedConfig] = useState<"text" | "animation">("text");

    const handlePress = () => {
        router.push({ pathname: "/banner", params: { text } });
    }

    const handleNavPress = (config: "text" | "animation") => {
        setShowedConfig(config);
    }

    return (
        <View style={styles.container}>
            <View style={[styles.textContainer, { backgroundColor: bgColor }]}>
                <Text style={[styles.previewText, { color: textColor, fontSize }]}>
                    {typed}
                </Text>
                <SaveButton />
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Text"
                        value={text}
                        cursorColor={"white"}
                        placeholderTextColor={"white"}
                        onChangeText={setTyped}
                    />
                    <Pressable style={styles.btn} onPress={handlePress}>
                        <FontAwesome name="send" size={20} color="white" />
                    </Pressable>
                </View>
                <View style={styles.navContainer}>
                    <Pressable style={[styles.navBtn, { backgroundColor: showedConfig === "text" ? "gray" : "transparent" }]} onPress={() => handleNavPress("text")}>
                        <MaterialCommunityIcons name="format-text" size={20} color="white" />
                        <Text style={styles.text}>
                            Text
                        </Text>
                    </Pressable>
                    <Pressable style={[styles.navBtn, { backgroundColor: showedConfig === "animation" ? "gray" : "transparent" }]} onPress={() => handleNavPress("animation")}>
                        <MaterialCommunityIcons name="animation-play" size={20} color="white" />
                        <Text style={styles.text}>
                            Animation
                        </Text>
                    </Pressable>
                </View>
                {showedConfig === "text" ?
                    <TextConfigs selectedTextColor={textColor} selectedBgColor={bgColor} selectedFontSize={fontSize} />
                    :
                    <AnimationConfigs />}
            </View>
        </View>
    );
};
export default create;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    textContainer: {
        width: "100%",
        height: 250,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    previewText: {
        textAlign: "center",
        padding: 10,
    },
    inputContainer: {
        flex: 1,
        width: "100%",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: "white",
        backgroundColor: "#1e1e1e",
        paddingHorizontal: 10,
        paddingVertical: 20,
        rowGap: 25,
    },
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
