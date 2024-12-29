import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from "react";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import useAppStore from "@/lib/zustand/store";
import TextConfigs from "@/components/TextConfigs";
import AnimationConfig from "../components/AnimationConfig";

const create = () => {
    const [text, setText] = useState("Hello World!");
    const [showedConfig, setShowedConfig] = useState<"text" | "animation">("text");
    const textColor = useAppStore(state => state.textColor)
    const bgColor = useAppStore(state => state.bgColor)
    const fontSize = useAppStore(state => state.fontSize)

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
                    {text}
                </Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Text"
                        value={text}
                        cursorColor={"white"}
                        placeholderTextColor={"white"}
                        onChangeText={setText}
                    />
                    <Pressable style={styles.btn} onPress={handlePress}>
                        <FontAwesome name="send" size={20} color="white" />
                    </Pressable>
                </View>
                <View style={styles.configContainer}>
                    <Pressable style={styles.navBtn} onPress={() => handleNavPress("text")}>
                        <MaterialCommunityIcons name="format-text" size={20} color="white" />
                        <Text style={styles.text}>
                            Text
                        </Text>
                    </Pressable>
                    <Pressable style={styles.navBtn} onPress={() => handleNavPress("animation")}>
                        <MaterialCommunityIcons name="animation-play" size={20} color="white" />
                        <Text style={styles.text}>
                            Animation
                        </Text>
                    </Pressable>
                </View>
                {showedConfig === "text" ?
                    <TextConfigs selectedTextColor={textColor} selectedBgColor={bgColor} selectedFontSize={fontSize} />
                    :
                    <AnimationConfig />}
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
        rowGap: 30,
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
    configContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    navBtn: {
        flex: 1,
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        columnGap: 10,
        borderBottomWidth: 1,
        borderBottomColor: "white",
    },
    text: {
        color: "white",
    },
});
