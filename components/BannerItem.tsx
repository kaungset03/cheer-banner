import { router } from "expo-router";
import { ListRenderItem, Pressable, StyleSheet, Text } from "react-native";


const BannerItem: ListRenderItem<SavedBanner> = ({ item }) => {
    const viewBanner = () => {
        router.navigate(`/banner/${item.id}`)
    }
    const date = new Date(item.savedAt);

    const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    });

    return (
        <Pressable onPress={viewBanner} style={({pressed}) => [{ opacity: pressed ? 0.7 : 1, backgroundColor: item.bgColor }, styles.item]}>
                <Text style={[styles.text, { color: item.textColor, fontFamily: item.fontFamily }]} ellipsizeMode="tail" numberOfLines={1}>
                    {item.text}
                </Text>
                <Text style={styles.time}>
                    {formattedDate}
                </Text>
        </Pressable>
    );
};
export default BannerItem;
const styles = StyleSheet.create({
    item: {
        height: 80,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255, 255, 255, 0.1)",
        justifyContent: "center",
    },
    text: {
        fontSize: 18,
    },
    time: {
        color: "gray",
        textAlign: "right"
    },
});
