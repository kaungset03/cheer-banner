import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { textColors } from "@/constants/constants";
import useAppStore from "@/lib/zustand/store";
import ColorsListModal from "@/components/ColorsListModal";


const TextColorInput = () => {
    const textColor = useAppStore((state) => state.textColor);
    const updateTextConfig = useAppStore((state) => state.updateTextConfig);
    const [showModal, setShowModal] = useState(false);

    const toggleShowModal = () => {
        setShowModal(!showModal);
    }

    const onConfirm = (c: string) => {
        updateTextConfig({ textColor: c })
        toggleShowModal();

    }


    return (
        <View style={styles.config}>
            <Text style={styles.configTitle}>
                Text Color:
            </Text>
            <Pressable onPress={toggleShowModal}>
                <View style={[styles.selected, { backgroundColor: textColor }]} />
            </Pressable>
            <ColorsListModal colors={textColors} showModal={showModal} onConfirm={onConfirm} onCancel={toggleShowModal} />
        </View>
    );
};
export default TextColorInput;
const styles = StyleSheet.create({
    config: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
    },
    configTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
    },
    selected: {
        width: 50,
        height: 50,
        borderRadius: 5,
    }
});
