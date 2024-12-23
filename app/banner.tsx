import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";
import ScrollText from "@/components/ScrollText";

const banner = () => {
  const { text } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <ScrollText text={text as string} />
    </View>
  );
};
export default banner;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
