import { Modal, StyleSheet, Text, View } from "react-native";
import PressableOpacity from "@/components/PressableOpacity";

type ConfirmModalProps = {
    showModal: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    title: string;
    description: string;    
}


const ConfirmModal = ({ showModal, onConfirm, onCancel, title, description }: ConfirmModalProps) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={showModal}
            onRequestClose={onCancel}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.title}>
                        {title}?
                    </Text>
                    <Text style={styles.modalText}>
                       {description}
                    </Text>
                    <View style={styles.btnContainer}>
                        <PressableOpacity style={[styles.button, styles.buttonOpen]} onPress={onCancel}>
                            <Text style={styles.btnText}>Cancel</Text>
                        </PressableOpacity>
                        <PressableOpacity style={[styles.button, styles.buttonClose]} onPress={onConfirm}>
                            <Text style={styles.btnText}>{title}</Text>
                        </PressableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};
export default ConfirmModal;
const styles = StyleSheet.create({
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
