import { FlatList, StyleSheet, Text, View } from "react-native";
import { bgColors, textColors, textSizes } from "@/constants/constants";
import TextConfigInput from "@/components/TextConfigInput";
import TextSizeInput from "@/components/TextSizeInput";

type TextConfigsProps = {
    textColor: string;
    bgColor: string;
    fontSize: number;
    onUpdateTextConfig: (key: keyof TextConfig, value: any) => void;
}


const TextConfigs = ({ textColor, bgColor, fontSize, onUpdateTextConfig }: TextConfigsProps) => {
    const updateTextColor = (color: string) => {
        onUpdateTextConfig("textColor", color);
    }

    const updateBgColor = (color: string) => {
        onUpdateTextConfig("bgColor", color);
    }

    const updateFontSize = (size: number) => {
        onUpdateTextConfig("fontSize", size);
    }

    return (
        <View style={styles.configContainer}>
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
    );
};
export default TextConfigs;
const styles = StyleSheet.create({
    configContainer: {
        width: "100%",
        rowGap: 25,
    },
    config: {
        gap: 13,
    },
    configTitle: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
    },
});
