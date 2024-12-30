import { useEffect } from "react";
import { View, type ViewStyle } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

type BlinkTextProps = {
    text: string;
    textStyles: {
        fontSize: number,
        fontFamily: string,
        color: string,
    };
    containerStyle: ViewStyle;
    duration: number;
}

const BlinkText = ({ text, textStyles, containerStyle, duration }: BlinkTextProps) => {
    const opacity = useSharedValue(1);

    const animatedStyles = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }))

    useEffect(() => {
        opacity.value = withRepeat(withTiming(0, { duration }), -1, true);
    }, [])


    return (
        <View style={containerStyle}>
            <Animated.Text style={[textStyles, animatedStyles]}>
                {text}
            </Animated.Text>
        </View>
    );
};
export default BlinkText;
