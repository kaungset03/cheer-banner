import { router } from "expo-router";
import { ListRenderItem, Pressable, StyleSheet, Text } from "react-native";


const BannerItem: ListRenderItem<SavedBanner> = ({ item }) => {
    const viewBanner = () => {
        router.navigate(`/banner/${item.id}`)
    }

    return (
        <Pressable onPress={viewBanner} style={({pressed}) => [{ opacity: pressed ? 0.7 : 1 }, styles.item]}>
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
        borderBottomColor: "rgba(255, 255, 255, 0.1)",
    },
    text: {
        fontSize: 18,
    },
    time: {
        color: "gray",
        textAlign: "right"
    },
});
