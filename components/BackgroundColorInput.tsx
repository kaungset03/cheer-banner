import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { bgColors } from "@/constants/constants";
import useAppStore from "@/lib/zustand/store";
import ColorsListModal from "@/components/ColorsListModal";

const BackgroundColorInput = () => {
    const bgColor = useAppStore((state) => state.bgColor);
    const updateTextConfig = useAppStore((state) => state.updateTextConfig);
    const [showModal, setShowModal] = useState(false);

    const toggleShowModal = () => {
        setShowModal(!showModal)
    }

    const onConfirm = (c: string) => {
        updateTextConfig({ bgColor: c })
        toggleShowModal();
    }


    return (
        <View style={styles.config}>
            <Text style={styles.configTitle}>
                Text Color:
            </Text>
            <Pressable onPress={toggleShowModal}>
                <View style={[styles.selected, { backgroundColor: bgColor }]} />
            </Pressable>
            <ColorsListModal colors={bgColors} showModal={showModal} onConfirm={onConfirm} onCancel={toggleShowModal} />
        </View>
    );
};
export default BackgroundColorInput;
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
