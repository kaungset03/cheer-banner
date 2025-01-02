import { router } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

type BannerItemProps = {
    banner: SavedBanner;
}

const BannerItem = ({ banner }: BannerItemProps) => {
    const onPress = () => {
        router.navigate(`/banner/${banner.id}`);
    }


    return (
        <Pressable style={styles.item} android_ripple={{ color: "rgba(255, 255, 255, 0.2)" }} onPress={onPress}>
            <Text style={styles.text}>
                {banner.text}
            </Text>
            <Text style={styles.time}>
                {banner.savedAt}
            </Text>
        </Pressable>
    );
};
export default BannerItem;
const styles = StyleSheet.create({
    item: {
        padding: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: "medium",
        color: "white",
    },
    time: {
        textAlign: "right",
        color: "#b0b0b0",
    }
});
