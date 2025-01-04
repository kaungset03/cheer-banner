import { StyleSheet, View } from "react-native";
import TextColorInput from "@/components/TextColorInput";
import BackgroundColorInput from "@/components/BackgroundColorInput";

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

    // const updateFontSize = (size: number) => {
    //     onUpdateTextConfig("fontSize", size);
    // }

    return (
        <View style={styles.configContainer}>
            <TextColorInput textColor={textColor} onSelected={updateTextColor} />
            <BackgroundColorInput bgColor={bgColor} onSelected={updateBgColor} />
            {/* <TextFontSizeInput fontSize={fontSize} onSelected={updateFontSize} /> */}
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
