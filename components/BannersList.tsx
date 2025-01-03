import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import useAppStore from "@/lib/zustand/store";
import BannerItem from "@/components/BannerItem";
import ConfirmModal from "@/components/ConfirmModal";

const BannersList = () => {
    const savedBanners = useAppStore((state) => state.banners);
    const deleteAllBanners = useAppStore((state) => state.deleteAllBanners);
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const handleDeleteAll = () => {
        deleteAllBanners();
        toggleModal();
    }

    const listHeader = () => {
        return (
            <View style={styles.header}>
                <Pressable style={styles.deleteBtn} onPress={toggleModal}>
                    <Text style={styles.text}>
                        Clear All
                    </Text>
                </Pressable>
            </View>
        )
    }

    const ListEmptyComponent = () => {
        return (
            <View>
                <Text style={styles.emptyText}>
                    No saved banners yet!
                </Text>
            </View>
        )
    }


    return (
        <>
            <FlatList style={styles.list} keyExtractor={item => item.id} data={savedBanners} ListHeaderComponent={listHeader} renderItem={BannerItem} ListEmptyComponent={ListEmptyComponent} />
            <ConfirmModal title="Delete" description="Do you want to delete all saved banners?" showModal={showModal} onCancel={toggleModal} onConfirm={handleDeleteAll} />
        </>
    );
};
export default BannersList;

const styles = StyleSheet.create({
    list: {
        paddingTop: 15,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },
    deleteBtn: {
        width: "25%",
        marginLeft: "auto",
        paddingVertical: 8,
    },
    text: {
        fontSize: 16,
        color: "white",
        textAlign: "center",
    },
    emptyText: {
        fontSize: 18,
        color: "gray",
        textAlign: "center",
        marginTop: 25,
    },
});
