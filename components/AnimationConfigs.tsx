import { Slider } from "@miblanchard/react-native-slider";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { animationTypes } from "@/constants/constants";
import AnimationTypeInput from "@/components/AnimationTypeInput";
import useAppStore from "@/lib/zustand/store";

type AnimationConfigProps = {
    type: string;
    speed: number;
};


const AnimationConfig = ({ type, speed }: AnimationConfigProps) => {
    const updateAnimationConfig = useAppStore((state) => state.updateAnimationConfig);

    const updateSpeed = (value: number) => {
        updateAnimationConfig({ animationSpeed: value });
    }

    const updateType = (value: string) => {
        updateAnimationConfig({ animationType: value });
    }


    return (
        <View style={styles.configContainer}>
            <View style={styles.config}>
                <Text style={styles.configTitle}>
                    Animation Type
                </Text>
                <FlatList horizontal data={animationTypes} renderItem={({ item }) => <AnimationTypeInput item={item} selected={type} handlePress={updateType} />} />
            </View>
            <View style={styles.config}>
                <Text style={styles.configTitle}>
                    Animation Speed
                </Text>
                <Slider
                    value={speed}
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
