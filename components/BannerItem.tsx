import { Pressable, StyleSheet, Text } from "react-native";
const BannerItem = () => {
    return (
        <Pressable style={styles.item} android_ripple={{ color: "rgba(255, 255, 255, 0.2)" }}>
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet.
            </Text>
            <Text style={styles.time}>
                5: 40 PM
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
