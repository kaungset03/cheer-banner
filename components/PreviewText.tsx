import { StyleSheet, Text, View } from "react-native";
import SaveButton from "@/components/SaveButton";

type PreviewTextProps = {
    config: TextConfig
}


const PreviewText = ({ config }: PreviewTextProps) => {
    const { text, bgColor, textColor, fontFamily, fontSize } = config;
    return (
        <View style={[styles.textContainer, { backgroundColor: bgColor }]}>
            <Text style={[styles.previewText, { color: textColor, fontSize, fontFamily }]}>
                {text}
            </Text>
            <SaveButton />
        </View>
    );
};
export default PreviewText;
const styles = StyleSheet.create({
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
});
