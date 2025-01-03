import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import PreviewText from "@/components/PreviewText";
import BannerTextInput from "@/components/BannerTextInput";
import NavigationBar from "@/components/NavigationBar";
import TextConfigs from "@/components/TextConfigs";
import AnimationConfigs from "@/components/AnimationConfigs";
import useAppStore from "@/lib/zustand/store";

const Create = () => {
    const { text, textColor, bgColor, fontSize, fontFamily, animationSpeed, animationType, updateTextConfig, updateAnimationConfig } = useAppStore((state) => state);

    const [textConfig, setTextConfig] = useState<TextConfig>({
        text,
        textColor,
        bgColor,
        fontSize,
        fontFamily
    })
    const onTextConfigChange = (key: keyof TextConfig, value: any) => {
        setTextConfig((prevConfig) => ({
            ...prevConfig,
            [key]: value,
        }));
    };

    const [animationConfig, setAnimationConfig] = useState<AnimationConfig>({
        animationSpeed,
        animationType
    })
    const onAnimationConfigChange = (key: keyof AnimationConfig, value: any) => {
        setAnimationConfig((prevConfig) => ({
            ...prevConfig,
            [key]: value
        }))
    }

    const [showedConfig, setShowedConfig] = useState<"animation" | "text">("text");
    const onShowedConfigChange = (v: "animation" | "text") => {
        setShowedConfig(v)
    }

    const handleSubmit = () => {
        // update global state
        updateTextConfig(textConfig);
        updateAnimationConfig(animationConfig);
        // route to banner screen
        router.navigate("/banner")
    }


    return (
        <View style={styles.container}>
            <PreviewText config={textConfig} />
            <View style={styles.inputContainer}>
                <BannerTextInput typed={textConfig.text} onChange={onTextConfigChange} handlePress={handleSubmit} />
                <NavigationBar showedConfig={showedConfig} handlePress={onShowedConfigChange} />
                {showedConfig === "text" ?
                    <TextConfigs textColor={textConfig.textColor} bgColor={textConfig.bgColor} fontSize={textConfig.fontSize} onUpdateTextConfig={onTextConfigChange} />
                    :
                    <AnimationConfigs animationConfig={animationConfig} onUpdateAnimationConfig={onAnimationConfigChange} />}
            </View>
        </View>
    );
};
export default Create;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
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
});
