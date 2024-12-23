import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

type ScrollTextProps = {
  text: string;
};

const ScrollText = ({ text }: ScrollTextProps) => {
  const translateY = useSharedValue(0);

  const onPress = (value: number) => {
    translateY.value = withSpring(translateY.value + value);
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{ transform: [{ translateY }, { rotate: "90deg" }] }}
      >
        <Text style={styles.text}>{text}</Text>
      </Animated.View>
      <Pressable onPress={() => onPress(-30)}>
        <AntDesign name="caretleft" size={30} />
      </Pressable>
      <Pressable onPress={() => onPress(+30)}>
        <AntDesign name="caretright" size={30} />
      </Pressable>
    </View>
  );
};
export default ScrollText;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 20,
  },
  text: {
    fontSize: 24,
  },
  btn: {
    width: 200,
  },
});
