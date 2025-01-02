import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import useAppStore from "@/lib/zustand/store";
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
            <Modal
                animationType="fade"
                transparent={true}
                visible={showModal}
                onRequestClose={toggleModal}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.title}>
                            Save?
                        </Text>
                        <Text style={styles.modalText}>
                            Do you want to save this banner?
                        </Text>
                        <View style={styles.btnContainer}>
                            <Pressable style={[styles.button, styles.buttonOpen]} onPress={toggleModal}>
                                <Text style={styles.btnText}>Cancel</Text>
                            </Pressable>
                            <Pressable style={[styles.button, styles.buttonClose]} onPress={handleSave}>
                                <Text style={styles.btnText}>Save</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
    button: {
        width: '33%',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#1e1e1e',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    btnText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: "semibold",
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
    },
});
