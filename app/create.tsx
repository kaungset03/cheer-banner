import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { router } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { bgColors, textColors, textSizes } from "@/constants/constants";
import useAppStore from "@/lib/zustand/store";
import TextConfigInput from "@/components/TextConfigInput";
import TextSizeInput from "@/components/TextSizeInput";

const create = () => {
    const [text, setText] = useState("Hello World!");
    const textColor = useAppStore(state => state.textColor)
    const bgColor = useAppStore(state => state.bgColor)
    const fontSize = useAppStore(state => state.fontSize)
    const updateConfig = useAppStore(state => state.updateTextConfig)

    const handlePress = () => {
        router.push({ pathname: "/banner", params: { text } });
    }

    const updateTextColor = (color: string) => {
        updateConfig({ textColor: color });
    }

    const updateBgColor = (color: string) => {
        updateConfig({ bgColor: color });
    }

    const updateFontSize = (size: number) => {
        updateConfig({ fontSize: size });
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
                <View style={styles.config}>
                    <Text style={styles.configTitle}>
                        Text Color
                    </Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={textColors}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => <TextConfigInput item={item} selected={textColor} handlePress={updateTextColor} />}
                    />
                </View>
                <View style={styles.config}>
                    <Text style={styles.configTitle}>
                        Background Color
                    </Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={bgColors}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => <TextConfigInput item={item} selected={bgColor} handlePress={updateBgColor} />}
                    />
                </View>
                <View style={styles.config}>
                    <Text style={styles.configTitle}>
                        Text Size
                    </Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={textSizes}
                        keyExtractor={(item) => item.name}
                        renderItem={({ item }) => <TextSizeInput item={item} selected={fontSize} handlePress={updateFontSize} />}
                    />
                </View>
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
        height: 230,
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
    config: {
        rowGap: 15,
    },
    configTitle: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
    },
});
