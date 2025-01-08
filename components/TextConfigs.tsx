import { StyleSheet, View } from "react-native";
import TextColorInput from "@/components/TextColorInput";
import BackgroundColorInput from "@/components/BackgroundColorInput";
import TextSizeInput from "@/components/TextSizeInput";
import FontFamilyInput from "@/components/FontFamilyInput";

type TextConfigsProps = {
    textColor: string;
    bgColor: string;
    fontSize: number;
    fontFamily: string;
    onUpdateTextConfig: (key: keyof TextConfig, value: any) => void;
}


const TextConfigs = ({ textColor, bgColor, fontSize, fontFamily, onUpdateTextConfig }: TextConfigsProps) => {
    const updateTextColor = (color: string) => {
        onUpdateTextConfig("textColor", color);
    }

    const updateBgColor = (color: string) => {
        onUpdateTextConfig("bgColor", color);
    }

    const updateFontSize = (size: number) => {
        onUpdateTextConfig("fontSize", size);
    }

    const updateFontFamily = (font: string) => {
        onUpdateTextConfig("fontFamily", font)
    }

    return (
        <View style={styles.configContainer}>
            <TextColorInput textColor={textColor} onSelected={updateTextColor} />
            <BackgroundColorInput bgColor={bgColor} onSelected={updateBgColor} />
            <TextSizeInput textSize={fontSize} onSelected={updateFontSize} />
            <FontFamilyInput fontFamily={fontFamily} onSelected={updateFontFamily} />
        </View>
    );
};
export default TextConfigs;
const styles = StyleSheet.create({
    configContainer: {
        width: "100%",
        flex: 1,
        rowGap: 30,
    },
});
