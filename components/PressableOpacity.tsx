import { Pressable, type StyleProp, type ViewStyle } from "react-native";

interface PressableOpacityProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    onPress: () => void;
}


const PressableOpacity = ({ children, style, onPress }: PressableOpacityProps) => {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }, style]}>
            {children}
        </Pressable>
    );
};
export default PressableOpacity;
