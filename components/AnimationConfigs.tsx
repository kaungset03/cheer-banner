import { StyleSheet, Text, View } from "react-native";
import AnimationSpeedInput from "@/components/AnimationSpeedInput";
import AnimationTypeInput from "@/components/AnimationTypeInput";


const AnimationConfig = () => {
    return (
        <View style={styles.configContainer}>
            <View style={styles.config}>
                <Text style={styles.configTitle}>
                    Animation Type
                </Text>
                <AnimationTypeInput />
            </View>
            <View style={styles.config}>
                <Text style={styles.configTitle}>
                    Animation Speed
                </Text>
                <AnimationSpeedInput />
            </View>
        </View>
    );
};
export default AnimationConfig;
const styles = StyleSheet.create({
    configContainer: {
        width: "100%",
        rowGap: 35,
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
