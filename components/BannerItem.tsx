import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";

type BannerItemProps = {
    banner: SavedBanner;
}

const BannerItem = ({ banner }: BannerItemProps) => {
    const viewBanner = () => {
        router.navigate(`/banner/${banner.id}`)
    }

    const editBanner = () => {
        router.navigate(`/edit/${banner.id}`)
    }



    return (
        <Pressable style={styles.item} android_ripple={{ color: "rgba(255, 255, 255, 0.2)" }}>
            <View style={styles.textContainer}>
                <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>
                    {banner.text}
                </Text>
                <Text style={styles.time}>
                    {banner.savedAt}
                </Text>
            </View>
            <View style={styles.btnContainer}>
                <Pressable onPress={viewBanner}>
                    <Feather name="eye" size={23} color={"gray"} />
                </Pressable>
                <Pressable onPress={editBanner}>
                    <Feather name="edit" size={23} color={"gray"} />
                </Pressable>
            </View>
        </Pressable>
    );
};
export default BannerItem;
const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255, 255, 255, 0.1)"
    },
    textContainer: {
        rowGap: 5,
        width: "70%"
    },
    text: {
        fontSize: 18,
        color: "white",
    },
    time: {
        color: "gray"
    },
    btnContainer: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 20,
    }
});
