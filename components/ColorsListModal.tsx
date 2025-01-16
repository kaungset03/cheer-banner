import { Modal, View, FlatList, Pressable, StyleSheet, ListRenderItem } from 'react-native';
interface ColorsListModalProps {
    showModal: boolean;
    colors: string[]
    onConfirm: (c: string) => void;
    onCancel: () => void;
}

const ColorsListModal = ({ showModal, colors, onCancel, onConfirm }: ColorsListModalProps) => {
    const renderColorInput: ListRenderItem<string> = ({ item }) => {
        return (
            <Pressable onPress={() => onConfirm(item)}>
                <View style={[styles.inputItem, { backgroundColor: item }]} />
            </Pressable>
        );
    };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={showModal}
            onRequestClose={onCancel}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <FlatList
                        horizontal={false}
                        contentContainerStyle={{ gap: 8 }}
                        columnWrapperStyle={{ gap: 8 }}
                        numColumns={5}
                        data={colors}
                        renderItem={renderColorInput}
                        keyExtractor={(item) => item}
                    />
                </View>
            </View>
        </Modal>
    );
};

export default ColorsListModal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)',
    },
    modalView: {
        width: "90%",
        maxHeight: 400,
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
    inputItem: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
});