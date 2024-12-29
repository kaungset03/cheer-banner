import { FlatList, StyleSheet, Text, View } from "react-native";
import { animationTypes } from "@/constants/constants";
import AnimationTypeInput from "@/components/AnimationTypeInput";
const AnimationConfig = () => {
    return (
        <View style={styles.configContainer}>
            <View style={styles.config}>
                <Text style={styles.configTitle}>
                    Animation Type
                </Text>
                <FlatList horizontal data={animationTypes} renderItem={({ item }) => <AnimationTypeInput item={item} />} />
            </View>
            <View style={styles.config}>
                <Text style={styles.configTitle}>
                    Animation Speed
                </Text>
                <FlatList horizontal data={animationTypes} renderItem={({ item }) => <AnimationTypeInput item={item} />} />
            </View>
        </View>
    );
};
export default AnimationConfig;
const styles = StyleSheet.create({
    configContainer: {
        width: "100%",
        rowGap: 25,
    },
    config: {
        rowGap: 20,
    },
    configTitle: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
    },
});
