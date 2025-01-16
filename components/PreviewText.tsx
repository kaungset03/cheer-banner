import { StyleSheet, Text, View } from "react-native";
import SaveButton from "@/components/SaveButton";
import useAppStore from "../lib/zustand/store";


const PreviewText = () => {
    const text = useAppStore((state) => state.text);
    const textColor = useAppStore((state) => state.textColor);
    const bgColor = useAppStore((state) => state.bgColor);
    const fontSize = useAppStore((state) => state.fontSize);
    const fontFamily = useAppStore((state) => state.fontFamily);

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
