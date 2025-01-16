import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import PreviewText from "@/components/PreviewText";
import BannerTextInput from "@/components/BannerTextInput";
import NavigationBar from "@/components/NavigationBar";
import useAppStore from "../lib/zustand/store";

const Create = () => {
    const updateTextConfig = useAppStore((state) => state.updateTextConfig);
    const updateAnimationConfig = useAppStore((state) => state.updateAnimationConfig);

    useEffect(() => {
        updateAnimationConfig({
            animationType: "right_to_left",
            animationSpeed: 2.5,
        });
        updateTextConfig({
            text: "Hello World!",
            fontSize: 32,
            fontFamily: "serif",
            textColor: "#ffffff",
            bgColor: "#000000",
        })
    }, [updateAnimationConfig, updateTextConfig])


    return (
        <View style={styles.container}>
            <PreviewText />
            <View style={styles.inputContainer}>
                <BannerTextInput />
                <NavigationBar />
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
