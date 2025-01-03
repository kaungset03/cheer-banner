import { Slider } from "@miblanchard/react-native-slider";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { animationTypes } from "@/constants/constants";
import AnimationTypeInput from "@/components/AnimationTypeInput";

type AnimationConfigProps = {
    animationConfig: AnimationConfig
    onUpdateAnimationConfig: (key: keyof AnimationConfig, value: any) => void
};


const AnimationConfig = ({ animationConfig, onUpdateAnimationConfig }: AnimationConfigProps) => {
    const updateSpeed = (value: number) => {
        onUpdateAnimationConfig("animationSpeed", value);
    }

    const updateType = (value: string) => {
        onUpdateAnimationConfig("animationType", value);
    }


    return (
        <View style={styles.configContainer}>
            <View style={styles.config}>
                <Text style={styles.configTitle}>
                    Animation Type
                </Text>
                <FlatList horizontal data={animationTypes} renderItem={({ item }) => <AnimationTypeInput item={item} selected={animationConfig.animationType} handlePress={updateType} />} />
            </View>
            <View style={styles.config}>
                <Text style={styles.configTitle}>
                    Animation Speed
                </Text>
                <Slider
                    value={animationConfig.animationSpeed}
                    minimumValue={1}
                    maximumValue={5}
                    onValueChange={(value) => updateSpeed(value[0])}
                />
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
