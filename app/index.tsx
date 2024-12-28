import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const index = () => {
  const handlePress = () => {
    router.push({ pathname: "/create" });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <Pressable style={styles.btn} onPress={handlePress}>
        <Ionicons name="add" size={35} color="#1e1e1e" />
      </Pressable>
    </View>
  );
};
export default index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    paddingTop: 50,
    position: "relative",
  },
  text: {
    color: "#e0e0e0",
    fontSize: 32,
    textAlign: "center",
  },
  btn: {
    position: "absolute",
    bottom: 80,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 10,
    elevation: 15,
    backgroundColor: "#b0b0b0",
    justifyContent: "center",
    alignItems: "center",
  },
});
