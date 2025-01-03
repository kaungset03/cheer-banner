import { Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import useAppStore from "@/lib/zustand/store";
import ConfirmModal from "./ConfirmModal";


const SaveButton = () => {
    const { text, textColor, fontSize, fontFamily, bgColor, animationType, animationSpeed, addBanner } = useAppStore((state) => state);

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const handleSave = () => {
        const id = Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
        const savedAt = new Date().toISOString();
        const newBanner: SavedBanner = {
            id,
            text,
            textColor,
            fontSize,
            fontFamily,
            bgColor,
            animationType,
            animationSpeed,
            savedAt,
        }
        addBanner(newBanner);
        toggleModal();
    }


    return (
        <>
            <Pressable style={styles.saveBtn} onPress={toggleModal}>
                <FontAwesome name="bookmark-o" size={20} color="white" />
            </Pressable>
            <ConfirmModal
                showModal={showModal}
                onConfirm={handleSave}
                onCancel={toggleModal}
                title="Save"
                description="Do you want to save this banner?" />
        </>
    );
};
export default SaveButton;
const styles = StyleSheet.create({
    saveBtn: {
        position: "absolute",
        top: 25,
        right: 20,
        backgroundColor: "#1e1e1e",
        padding: 13,
        borderRadius: 10,
    },
});
