import { FlatList, StyleSheet, Text, View } from "react-native";
import { bgColors, textColors, textSizes } from "@/constants/constants";
import TextConfigInput from "@/components/TextConfigInput";
import TextSizeInput from "@/components/TextSizeInput";
import useAppStore from "@/lib/zustand/store";

type TextConfigsProps = {
    selectedTextColor: string;
    selectedBgColor: string;
    selectedFontSize: number;
}


const TextConfigs = ({ selectedTextColor, selectedBgColor, selectedFontSize }: TextConfigsProps) => {
    const updateTextConfig = useAppStore(state => state.updateTextConfig);

    const updateTextColor = (color: string) => {
        updateTextConfig({ textColor: color });
    }

    const updateBgColor = (color: string) => {
        updateTextConfig({ bgColor: color });
    }

    const updateFontSize = (size: number) => {
        updateTextConfig({ fontSize: size });
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
                    renderItem={({ item }) => <TextConfigInput item={item} selected={selectedTextColor} handlePress={updateTextColor} />}
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
                    renderItem={({ item }) => <TextConfigInput item={item} selected={selectedBgColor} handlePress={updateBgColor} />}
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
                    renderItem={({ item }) => <TextSizeInput item={item} selected={selectedFontSize} handlePress={updateFontSize} />}
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
