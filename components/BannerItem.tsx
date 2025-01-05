import { router } from "expo-router";
import { ListRenderItem, Pressable, StyleSheet, Text } from "react-native";


const BannerItem: ListRenderItem<SavedBanner> = ({ item }) => {
    const viewBanner = () => {
        router.navigate(`/banner/${item.id}`)
    }

    return (
        <Pressable style={[styles.item, { backgroundColor: item.bgColor }]} android_ripple={{ color: "rgba(255, 255, 255, 0.2)" }} onPress={viewBanner}>
            <Text style={[styles.text, { color: item.textColor }]} ellipsizeMode="tail" numberOfLines={1}>
                {item.text}
            </Text>
            <Text style={styles.time}>
                {item.savedAt}
            </Text>
        </Pressable>
    );
};
export default BannerItem;
const styles = StyleSheet.create({
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255, 255, 255, 0.1)"
    },
    text: {
        fontSize: 18,
        color: "white",
    },
    time: {
        color: "gray",
        textAlign: "right"
    },
});
